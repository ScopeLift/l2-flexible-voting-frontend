import Head from 'next/head';
import CardWithHeader from '@/components/CardWithHeader';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useConfig } from '@/hooks/useConfig';
import { useState } from 'react';
import { formatUnits, maxUint256, parseAbi, parseUnits } from 'viem';
import { classNames } from '@/util';
import { ZERO_ADDRESS } from '@/util/constants';
import { ArrowLongRightIcon } from '@heroicons/react/20/solid';
import { useBalances } from '@/hooks/useBalances';
import { useFees } from '@/hooks/useFees';
import { useAccount, useContractRead, useNetwork } from 'wagmi';
import { useEasyWrite } from '@/hooks/useEasyWrite';
import ErrorBox from '@/components/ErrorBox';
import Spinner from '@/components/Spinner';
import { useWalletClient } from 'wagmi';
import Image from 'next/image';

enum BridgeTarget {
  L1,
  L2,
}

const Bridge = () => {
  const mounted = useHasMounted();
  const { fees } = useFees();
  const { l1, l2 } = useBalances();
  const { l1: l1Config, l2: l2Config } = useConfig();
  const [bridgeTarget, setBridgeTarget] = useState<BridgeTarget>(BridgeTarget.L2);
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data: walletClient, isLoading: walletIsLoading } = useWalletClient();

  // State for amount input
  const [amount, setAmount] = useState<string>('0');
  const rawAmount = parseUnits(amount, l1.token?.decimals || 18);

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
  const {
    write: approveL1,
    isLoading: approveL1IsLoading,
    error: approveL1Error,
  } = useEasyWrite({
    address: l1Config.tokenAddress,
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
    address: l1Config.erc20Bridge,
    chainId: l1Config.chain.id,
    abi: parseAbi([
      'function deposit(address to, uint224 amount) public payable returns (uint256)',
    ]),
    functionName: 'deposit',
    args: [address!, rawAmount],
    value: fees?.l1 || BigInt(0),
  });

  // 2️⃣ l2 bridge to l1
  const {
    write: bridgeToL1,
    isLoading: bridgeToL1IsLoading,
    error: bridgeToL1Error,
  } = useEasyWrite({
    address: l2Config.tokenAddress,
    chainId: l2Config.chain.id,
    abi: parseAbi(['function l1Unlock(address to, uint256 amount) public payable']),
    functionName: 'l1Unlock',
    args: [address || ZERO_ADDRESS, rawAmount],
    value: fees?.l2 || BigInt(0),
  });

  const handleSwitchDirection = () => {
    setBridgeTarget(bridgeTarget === BridgeTarget.L2 ? BridgeTarget.L1 : BridgeTarget.L2);
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setAmount(e.currentTarget.value);
  };

  const handleAllowance = () => {
    if (!approveL1) return;
    approveL1();
  };

  const handleBridge = () => {
    return bridgeTarget === BridgeTarget.L2 ? bridgeToL2!() : bridgeToL1!();
  };

  const source =
    bridgeTarget === BridgeTarget.L2
      ? { ...l1Config, ...l1, fee: fees?.l1 || BigInt(0) }
      : { ...l2Config, ...l2, fee: fees?.l2 || BigInt(0) };
  const target =
    bridgeTarget === BridgeTarget.L2
      ? { ...l2Config, ...l2, fee: fees?.l2 || BigInt(0) }
      : { ...l1Config, ...l1, fee: fees?.l1 || BigInt(0) };

  const isAmountError = false;
  const needsAllowanceL1 = (allowanceL1 || 0) < rawAmount;

  return (
    <>
      <Head>
        <title>Cross Chain Voting: Bridge</title>
      </Head>
      <div className="flex flex-row justify-center align-center items-top content-center">
        <CardWithHeader header={'Bridge tokens'} className="w-full lg:max-w-2xl m-5">
          <div className="flex flex-col">
            {/* Top row */}
            <div className="flex flex-row justify-between items-center">
              {/* Source data */}
              <div className="relative flex flex-grow w-32 flex-col rounded-lg bg-gray-100 px-6 py-5 shadow-sm">
                <h3 className="gray-600 font-bold">From</h3>
                <div>{source.chain.name}</div>
                <div className="mt-3">
                  <span className="gray-600 font-bold">Balance</span>
                  <br />
                  <div className="items-center flex">
                    {mounted && source.token ? source.token.formatted : '0.00'}{' '}
                    <div className="ml-5 gray-600 font-bold">
                      {mounted && source.token ? source.token.symbol : 'Token'}
                    </div>
                    <Image
                      className="ml-2"
                      src={source.tokenLogo}
                      width={40}
                      height={40}
                      alt={`${source.token?.symbol} logo`}
                    />
                    {source.chain.id === 420 && (
                      <>
                        <div className="flex justify-end -ml-3 -mb-8 z-10">🗳️</div>
                        <Image
                          className="-ml-12 -mt-8"
                          src={source.chainLogo}
                          width={16}
                          height={16}
                          alt={`${source.chain.name} logo`}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Switch direction button */}
              <div className="grow-0 mx-5 flex flex-col items-center">
                <ArrowLongRightIcon className="h-10 w-10 text-gray-400" />
                <button
                  type="button"
                  className="mt-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={handleSwitchDirection}
                >
                  Switch Direction
                </button>
              </div>
              {/* Target data */}
              <div className="mt-3 relative flex flex-grow w-32 flex-col rounded-lg border bg-gray-100 px-6 py-5 shadow-sm">
                <h3 className="gray-600 font-bold">To</h3>
                <div>{target.chain.name}</div>
                <div className="mt-3">
                  <span className="gray-600 font-bold">Balance</span>
                  <br />
                  <div className="items-center flex">
                    {mounted && target.token ? target.token.formatted : '0.00'}{' '}
                    <div className="ml-5 gray-600 font-bold">
                      {mounted && target.token ? target.token.symbol : 'Token'}
                    </div>
                    <Image
                      className="ml-2 w-10"
                      src={target.tokenLogo}
                      width={40}
                      height={40}
                      alt={`${target.token?.symbol} logo`}
                    />
                    {target.chain.id === 420 && (
                      <>
                        <div className="flex justify-end -ml-3 -mb-8 z-10">🗳️</div>
                        <Image
                          className="w-4 -ml-12 -mt-8"
                          src={target.chainLogo}
                          width={16}
                          height={16}
                          alt={`${source.chain.name} logo`}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom row: Input form */}
            <div className="m-4">
              <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                Amount
              </label>

              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className={classNames(
                    isAmountError
                      ? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
                      : 'text-gray-900',
                    'block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                  )}
                  placeholder="0.00"
                  defaultValue=""
                  aria-invalid={isAmountError}
                  aria-describedby="amount"
                  onChange={handleInputChange}
                />
              </div>
              <div className={classNames(isAmountError ? '' : 'invisible')}>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm text-red-600" id="amount-error">
                  Not a valid amount.
                </p>
              </div>

              <div>Wormhole relayer fee: {mounted ? formatUnits(source.fee, 18) : 0} ETH</div>
              <div className="text-center">
                {mounted &&
                /* ⚪️ First, if we are on the wrong network, prompt to switch networks. */
                source.chain.id !== chain?.id ? (
                  <button
                    type="button"
                    className="mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    onClick={() => walletClient?.switchChain({ id: source.chain.id })}
                    disabled={walletIsLoading}
                  >
                    Switch network to {source.chain.name}
                  </button>
                ) : /* ⚪️ Otherwise, if we're bridging to L2 and need an allowance first, show allowance button. */
                bridgeTarget === BridgeTarget.L2 && needsAllowanceL1 ? (
                  <button
                    type="button"
                    className="flex mx-auto mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    onClick={handleAllowance}
                    disabled={!approveL1 || approveL1IsLoading || !!approveL1Error}
                  >
                    Set allowance for {target.token?.symbol} on {target.chain.name}
                    {approveL1IsLoading && (
                      <div className="ml-2">
                        <Spinner />
                      </div>
                    )}
                  </button>
                ) : (
                  mounted && (
                    /* ⚪️ Finally, we can show the bridge button. */
                    <button
                      type="button"
                      className="mt-5 mx-auto flex flex-row items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                      onClick={handleBridge}
                      disabled={
                        bridgeTarget === BridgeTarget.L2
                          ? !bridgeToL2 || bridgeToL2IsLoading
                          : !bridgeToL1 || bridgeToL1IsLoading
                      }
                    >
                      Bridge to {target.chain.name}
                      {(bridgeToL2IsLoading || bridgeToL1IsLoading) && (
                        <span className="ml-2">
                          <Spinner />
                        </span>
                      )}
                    </button>
                  )
                )}
              </div>
              <div className="mt-5">
                {bridgeTarget === BridgeTarget.L2
                  ? bridgeToL2Error &&
                    rawAmount !== BigInt(0) && (
                      <ErrorBox heading="There's a problem simulating your bridge transaction:">
                        {bridgeToL2Error.cause?.toString() || bridgeToL2Error.message}
                      </ErrorBox>
                    )
                  : bridgeToL1Error &&
                    rawAmount !== BigInt(0) && (
                      <ErrorBox heading="There's a problem simulating your bridge transaction:">
                        {bridgeToL1Error.cause?.toString() || bridgeToL1Error.message}
                      </ErrorBox>
                    )}
              </div>
            </div>
          </div>
        </CardWithHeader>
      </div>
    </>
  );
};

export default Bridge;
