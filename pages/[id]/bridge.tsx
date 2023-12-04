import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { formatUnits, maxUint256, parseAbi, parseUnits } from 'viem';
import { useAccount, useContractRead, useNetwork, useWalletClient } from 'wagmi';

import CardWithHeader from '@/components/CardWithHeader';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useConfig } from '@/hooks/useConfig';
import { classNames, switchChain } from '@/util';
import { ZERO_ADDRESS } from '@/util/constants';
import { ArrowLongDownIcon } from '@heroicons/react/20/solid';
import { useBalances } from '@/hooks/useBalances';
import { useFees } from '@/hooks/useFees';
import { useEasyWrite } from '@/hooks/useEasyWrite';
import ErrorBox from '@/components/ErrorBox';
import Spinner from '@/components/Spinner';
import { useTokenInfo } from '@/hooks/useTokenInfo';
import { ConnectButton } from '@rainbow-me/rainbowkit';

enum BridgeTarget {
  L1,
  L2,
}

// Errors we know how to handle:
enum ErrorType {
  UserRejectedRequest, // user clicked reject on tx
  ERC20AmountError, // not enough gov token based on input amount (ERC20: transfer amount exceeds balance)
  InsufficientNativeCurrencyError, // not enough eth to pay gas + relayer fee
  Unknown,
}

type ErrorReturnType = { errorType?: ErrorType; errorReason?: string };

type FormData = {
  amount: string;
};

const Bridge = () => {
  const mounted = useHasMounted();
  const { fees } = useFees();
  const { l1, l2 } = useBalances();
  const { data: tokenInfo } = useTokenInfo();
  const { l1: l1Config, l2: l2Config } = useConfig();
  const [bridgeTarget, setBridgeTarget] = useState<BridgeTarget>(BridgeTarget.L2);
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data: walletClient, isLoading: walletIsLoading } = useWalletClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormData>({ mode: 'onChange' });

  // State for amount input
  const amount = watch('amount', '0');
  const rawAmount = parseUnits(
    Boolean(errors.amount?.message) || isNaN(+amount) ? '0' : amount,
    l1.token?.decimals || 18
  );
  const isNonZeroInput = rawAmount !== BigInt(0);
  const source =
    bridgeTarget === BridgeTarget.L2
      ? {
          ...l1Config,
          ...{ ...l1, token: { ...l1.token, ...tokenInfo.l1 } },
          fee: fees?.l1 || BigInt(0),
        }
      : {
          ...l2Config,
          ...{ ...l2, token: { ...l2.token, ...tokenInfo.l2 } },
          fee: fees?.l2 || BigInt(0),
        };
  const target =
    bridgeTarget !== BridgeTarget.L2
      ? {
          ...l1Config,
          ...{ ...l1, token: { ...l1.token, ...tokenInfo.l1 } },
          fee: fees?.l1 || BigInt(0),
        }
      : {
          ...l2Config,
          ...{ ...l2, token: { ...l2.token, ...tokenInfo.l2 } },
          fee: fees?.l2 || BigInt(0),
        };

  // l1 token allowance
  const { data: allowanceL1 } = useContractRead({
    account: address,
    chainId: l1Config.chain.id,
    address: l1Config.tokenAddress,
    abi: parseAbi(['function allowance(address, address) public view returns (uint256)']),
    functionName: 'allowance',
    args: [address!, l1Config.erc20Bridge],
    watch: true,
  });

  const needsAllowanceL1 = (allowanceL1 || 0) < rawAmount;
  const isSufficientBalance = (source.token?.value || 0) >= rawAmount;

  const {
    write: approveL1,
    isLoading: approveL1IsLoading,
    isTransactionDataLoading: approvalL1TxIsLoading,
    error: approveL1Error,
  } = useEasyWrite({
    enabled: bridgeTarget === BridgeTarget.L2 && source.chain.id === chain?.id && needsAllowanceL1,
    address: l1Config.tokenAddress,
    chainId: l1Config.chain.id,
    abi: parseAbi(['function approve(address who, uint256 amount) public']),
    functionName: 'approve',
    args: [l1Config.erc20Bridge, maxUint256],
  });

  // 1️⃣ l1 bridge to l2
  const {
    write: bridgeToL2,
    isLoading: bridgeToL2IsLoading,
    error: bridgeToL2Error,
  } = useEasyWrite({
    enabled:
      bridgeTarget === BridgeTarget.L2 &&
      !needsAllowanceL1 &&
      !approveL1IsLoading &&
      source.chain.id === chain?.id &&
      isNonZeroInput,
    address: l1Config.erc20Bridge,
    chainId: l1Config.chain.id,
    abi: parseAbi([
      'function deposit(address to, uint224 amount) public payable returns (uint256)',
    ]),
    functionName: 'deposit',
    args: [address!, rawAmount],
    value: fees?.l1 || BigInt(0),
    isCrossChain: true,
  });

  // 2️⃣ l2 bridge to l1
  const {
    write: bridgeToL1,
    isLoading: bridgeToL1IsLoading,
    error: bridgeToL1Error,
  } = useEasyWrite({
    enabled: bridgeTarget === BridgeTarget.L1 && source.chain.id === chain?.id && isNonZeroInput,
    address: l2Config.tokenAddress,
    chainId: l2Config.chain.id,
    abi: parseAbi(['function l1Unlock(address to, uint256 amount) public payable']),
    functionName: 'l1Unlock',
    args: [address || ZERO_ADDRESS, rawAmount],
    value: fees?.l2 || BigInt(0),
    isCrossChain: true,
  });

  const handleSwitchDirection = () => {
    setBridgeTarget(bridgeTarget === BridgeTarget.L2 ? BridgeTarget.L1 : BridgeTarget.L2);
  };

  const handleAllowance = () => {
    if (!approveL1) return;
    approveL1();
  };

  const handleBridge = () => {
    if (bridgeTarget === BridgeTarget.L2) {
      if (!bridgeToL2) throw new Error('bridgeToL2 is not defined');
      bridgeToL2();
    } else {
      if (!bridgeToL1) throw new Error('bridgeToL1 is not defined');
      bridgeToL1();
    }
  };

  const onSubmit = handleSubmit(async () => {
    handleBridge();
  });

  const formatError = (e: Error | null): ErrorReturnType => {
    if (!isSufficientBalance) {
      return {
        errorType: ErrorType.ERC20AmountError,
        errorReason: `Error: Not enough ${source.token?.symbol} in wallet.`,
      };
    }
    if (e === null) return { errorType: undefined, errorReason: undefined };
    // Suppress ChainMismatchError as we have other checks in place to prevent
    if (e.name === 'ChainMismatchError') return { errorType: undefined, errorReason: undefined };
    const errorTypes = [
      {
        errorType: ErrorType.UserRejectedRequest,
        errorSearchString: 'User rejected the request.',
        prettyReason: `Error: User rejected the request.`,
      },
      {
        errorType: ErrorType.ERC20AmountError,
        errorSearchString: 'ERC20: transfer amount exceeds balance',
        prettyReason: `Error: Not enough ${source.token?.symbol} in wallet.`,
      },
      {
        // Here we duplicate the ERC20AmountError -- this is because the error search string is slightly different for L1 and L2,
        // but they're functionally equivalent.
        errorType: ErrorType.ERC20AmountError,
        errorSearchString: 'ERC20: burn amount exceeds balance',
        prettyReason: `Error: Not enough ${source.token?.symbol} in wallet.`,
      },
      {
        errorType: ErrorType.InsufficientNativeCurrencyError,
        errorSearchString:
          'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account',
        prettyReason: `Error: Not enough ${chain?.nativeCurrency.symbol} balance${
          (bridgeToL1Error || bridgeToL2Error) && ' for Wormhole relayer fee.'
        }.`,
      },
    ];
    const foundError = errorTypes.find(({ errorSearchString }) =>
      e.message?.includes(errorSearchString)
    );
    if (!foundError) {
      console.error(e.message);
      return {
        errorType: ErrorType.Unknown,
        errorReason: `Unexpected error: see console for details`,
      };
    }
    return { errorType: foundError.errorType, errorReason: foundError.prettyReason };
  };

  // Only get errors relevant to the current bridge direction
  const error =
    bridgeTarget === BridgeTarget.L2 ? bridgeToL2Error : bridgeToL1Error || approveL1Error;

  // Define new variables that help control UI states and display pretty error strings
  const { errorType, errorReason } = formatError(error);
  // Helpers for different parts of UI state
  const isAmountError = errorType === ErrorType.ERC20AmountError || !isValid;

  const connectButton = <ConnectButton />;

  const switchNetworkButton = (
    <button
      type="button"
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      onClick={async () => {
        if (walletClient) switchChain(walletClient, source.chain);
      }}
      disabled={walletIsLoading}
    >
      Switch network to {source.chain.name}
    </button>
  );

  const setAllowanceButton = (
    <button
      type="button"
      className="flex mx-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      onClick={handleAllowance}
      disabled={!approveL1 || approveL1IsLoading || approvalL1TxIsLoading || !isSufficientBalance}
    >
      Set allowance for {source.token?.symbol} on {target.chain.name}
      {(approveL1IsLoading || approvalL1TxIsLoading) && (
        <div className="ml-2">
          <Spinner />
        </div>
      )}
    </button>
  );

  const bridgeButton = (
    /* ⚪️ Finally, we can show the bridge button. */
    <button
      type="submit"
      className="mx-auto flex flex-row items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      disabled={
        bridgeTarget === BridgeTarget.L2
          ? !bridgeToL2 || bridgeToL2IsLoading || !isNonZeroInput || !isValid
          : !bridgeToL1 || bridgeToL1IsLoading || !isNonZeroInput || !isValid
      }
    >
      Bridge to {target.chain.name}
      {(bridgeToL2IsLoading || bridgeToL1IsLoading) && (
        <span className="ml-2">
          <Spinner />
        </span>
      )}
    </button>
  );

  const actionButton = () => {
    if (mounted) {
      // If no wallet is connected, prompt to connect.
      if (!address) {
        return connectButton;
        // If on the wrong network, prompt to switch networks.
      } else if (source.chain.id !== chain?.id) {
        return switchNetworkButton;
        // If we're bridging to L2 and need an allowance first.
      } else if (bridgeTarget === BridgeTarget.L2 && needsAllowanceL1) {
        return setAllowanceButton;
        // Default case
      } else {
        return bridgeButton;
      }
    }
  };

  return (
    <>
      <Head>
        <title>Cross Chain Voting: Bridge</title>
      </Head>
      <div className="flex flex-col max-w-xl w-full justify-center align-center items-center content-center grow">
        <CardWithHeader header={'Bridge tokens'} className="w-full mt-5  bg-opacity-90 sm:m-5">
          <div className="flex flex-col">
            {/* Top row */}
            <div className="flex flex-col justify-between items-center">
              {/* Source data */}
              <BalanceBox
                label="From"
                chainName={source.chain.name}
                tokenLogo={source.tokenLogo}
                formattedBalance={source.token?.formatted}
                chainLogo={source.chainLogo}
                tokenSymbol={source.token?.symbol}
                isFV={bridgeTarget === BridgeTarget.L1}
              />
              {/* Switch direction button */}
              <div className="grow-0 flex flex-col items-center">
                <button
                  type="button"
                  className="my-4 rounded-full bg-white px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={handleSwitchDirection}
                >
                  <ArrowLongDownIcon className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              {/* Target data */}
              <BalanceBox
                label="To"
                chainName={target.chain.name}
                tokenLogo={target.tokenLogo}
                formattedBalance={target.token?.formatted}
                chainLogo={target.chainLogo}
                tokenSymbol={target.token?.symbol}
                isFV={bridgeTarget === BridgeTarget.L2}
              />
            </div>
            {/* Bottom row: Input form */}
            <form onSubmit={onSubmit} className="mt-7 mx-2">
              <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                Amount
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  className={classNames(
                    errorType === ErrorType.ERC20AmountError || !isValid
                      ? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
                      : 'text-gray-900',
                    'block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                  )}
                  placeholder="0.00"
                  defaultValue=""
                  aria-invalid={errorType === ErrorType.ERC20AmountError || !isValid}
                  aria-describedby="amount"
                  {...register('amount', {
                    validate: async (value) => {
                      if (isNaN(+value)) {
                        return 'Amount needs to be a number';
                      }
                      if (parseFloat(value) <= 0) {
                        return 'Amount must be positive';
                      }
                      return true;
                    },
                  })}
                />
                <div
                  className={classNames(
                    'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
                    isAmountError ? '' : 'invisible'
                  )}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
              </div>
              <p
                className={classNames(
                  'mt-2 text-sm text-red-600',
                  isAmountError ? '' : 'invisible'
                )}
                id="amount-error"
              >
                {errors.amount?.message || errorReason}&nbsp;
              </p>

              <div className="mt-2 mb-6">
                <span className="block text-sm font-medium leading-6 text-gray-900">
                  Wormhole relayer fee
                </span>
                <div className="text-gray-500 text-sm ml-2">
                  {mounted ? formatUnits(source.fee, 18) : 0} ETH
                </div>
              </div>
              <div className="flex text-center justify-center mt-5">{actionButton()}</div>
              <div className="mt-5">
                {errorReason && !isAmountError && (
                  <ErrorBox heading="There's a problem simulating your bridge transaction:">
                    {errorReason}
                  </ErrorBox>
                )}
              </div>
            </form>
          </div>
        </CardWithHeader>
      </div>
    </>
  );
};

export const BalanceBox = ({
  chainName,
  formattedBalance,
  tokenSymbol,
  tokenLogo,
  chainLogo,
  isFV,
  label,
}: {
  chainName: string;
  formattedBalance?: string;
  tokenSymbol?: string;
  tokenLogo: string;
  chainLogo?: string;
  isFV: boolean;
  label: 'From' | 'To';
}) => {
  const mounted = useHasMounted();
  return !mounted ? undefined : (
    <div className="flex flex-row items-center px-5 justify-between w-full rounded-lg bg-white bg-opacity-50 py-9 shadow-md h-32 md:px-12">
      <div className="flex flex-col justify-between h-full">
        <label className="text-gray-500 font-semibold text-sm mb-2">{label}</label>
        <div className="">
          <div>{chainName}</div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <label className="text-gray-500 font-semibold text-sm mb-2">Balance</label>
        <div className="items-center flex ml-2">
          <div className="relative mr-3">
            <Image src={tokenLogo} width={24} height={24} alt={`${tokenSymbol} logo`} />
            {isFV && <div className="absolute -right-1 -bottom-2 text-sm">🗳️</div>}
            {chainLogo && (
              <Image
                className="absolute -top-1 -left-2"
                src={chainLogo}
                width={14}
                height={14}
                alt={`${chainName} logo`}
              />
            )}
          </div>
          {formattedBalance || '0.00'} <div className="ml-5 gray-600">{tokenSymbol || 'Token'}</div>
        </div>
      </div>
    </div>
  );
};

export default Bridge;
