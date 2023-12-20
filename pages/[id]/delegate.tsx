import clsx from 'clsx';
import { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useAccount, useEnsAvatar, useEnsName, useNetwork, useWalletClient } from 'wagmi';
import { isAddress, formatUnits } from 'viem';
import { useForm } from 'react-hook-form';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

import { useBalances } from '@/hooks/useBalances';
import { useConfig } from '@/hooks/useConfig';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useL2CurrentVotingWeight } from '@/hooks/useCurrentVotingWeight';
import { useL2DelegateVote } from '@/hooks/useL2DelegateVote';
import { useL2Delegate } from '@/hooks/useL2Delegate';
import { ZERO_ADDRESS } from '@/util/constants';
import CardWithHeader from '@/components/CardWithHeader';
import Spinner from '@/components/Spinner';
import { switchChain } from '@/util';
import { getEnsAddress } from '@/util/ens';
import { Tooltip } from 'react-tooltip';
import { useTokenInfo } from '@/hooks/useTokenInfo';
import { ConnectButton } from '@rainbow-me/rainbowkit';

type FormData = {
  delegateAddress: string;
};

const Delegate: NextPage = () => {
  const config = useConfig();
  const mounted = useHasMounted();
  const { l2, error } = useBalances();
  const { data: tokenInfo } = useTokenInfo();
  const { address } = useAccount();
  const { data: walletClient, isLoading: walletIsLoading } = useWalletClient();
  const { chain } = useNetwork();
  const [delegateAddress, setDelegateAddress] = useState(address);
  const { data: l2VotingWeight } = useL2CurrentVotingWeight({
    voterAddress: address || ZERO_ADDRESS,
  });
  const {
    write,
    isLoading,
    error: delegateError,
  } = useL2DelegateVote({ delegateAddress: delegateAddress || ZERO_ADDRESS });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'onChange' });
  const { data: delegatee } = useL2Delegate({ enabled: isValid });
  const { data: delegateEnsName } = useEnsName({ address: delegatee, chainId: 1 });
  const { data: delegateEnsAvatar } = useEnsAvatar({ name: delegateEnsName, chainId: 1 });

  const l2VotingWeightFormatted = formatUnits(
    l2VotingWeight || BigInt(0),
    l2.token?.decimals || 18
  );

  if (error) {
    console.error(`Fetch balances has failed: ${error}`);
  }

  if (delegateError) {
    console.error(`Delegating failed ${delegateError}`);
  }
  const onSubmit = handleSubmit(async () => {
    write?.();
  });

  const { chainLogo } = config.l2;

  return (
    <>
      <Head>
        <title>Cross Chain Voting: Delegate</title>
      </Head>
      <div className="flex flex-col max-w-xl w-full justify-center align-center items-center content-center grow">
        <CardWithHeader
          header={`Delegate on ${mounted && config.l2.chain.name}`}
          className="w-full mt-5 bg-opacity-90 sm:m-5"
        >
          {mounted && (
            <>
              <div className="flex items-center gap-1.5 text-gray-500 py-4 mb-5">
                <InformationCircleIcon className="h-4" />
                <p className="text-sm">
                  {(mounted && tokenInfo.l2.symbol) || 'Token'} determines {config.name} voting
                  power on {config.l2.chain.name}.
                </p>
              </div>

              <div className="flex flex-col gap-2 w-full bg-white bg-opacity-50 py-6 shadow-md px-5 rounded-lg md:px-10">
                <div className="flex justify-between mt-5">
                  <div className="flex flex-col">
                    <div className="text-sm font-semibold text-gray-500">Token Balance</div>
                    <div className="flex align-center p-4 gap-1">
                      <div className="relative">
                        <Image
                          height="24"
                          width="24"
                          src={config.l2.tokenLogo}
                          alt={`${config.name}'s Governor token logo`}
                        />
                        {<div className="absolute -right-1 -bottom-2 text-sm">🗳️</div>}
                        {chainLogo && (
                          <Image
                            className="absolute -top-1 -left-2"
                            src={chainLogo}
                            width={14}
                            height={14}
                            alt={`Chain logo`}
                          />
                        )}
                      </div>
                      <div className="self-center">{mounted && (l2.token?.formatted || 0)}</div>
                      <div className="self-center">{mounted && tokenInfo.l2.symbol}</div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm font-semibold text-gray-500">Voting Power</div>
                    <div className="flex align-center p-4 gap-1">
                      <div className="relative mr-3">
                        <Image
                          height="24"
                          width="24"
                          src={config.l2.tokenLogo}
                          alt={`${config.name}'s Governor token logo`}
                        />
                        {<div className="absolute -right-1 -bottom-2 text-sm select-none">🗳️</div>}
                        {chainLogo && (
                          <Image
                            className="absolute -top-1 -left-2"
                            src={chainLogo}
                            width={14}
                            height={14}
                            alt={`Chain logo`}
                          />
                        )}
                      </div>
                      <div className="self-center">{mounted && l2VotingWeightFormatted}</div>
                      <div className="self-center ml-4">{mounted && tokenInfo.l2.symbol}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <div className="text-sm font-semibold text-gray-500">Delegated To</div>
                  <div className="flex align-center p-4 gap-1">
                    <div className="self-center font-mono">
                      {mounted && delegatee !== ZERO_ADDRESS ? (
                        <div className="flex items-center gap-1">
                          {delegateEnsAvatar ? (
                            <img
                              className="inline-block h-6 w-6 rounded-full"
                              src={delegateEnsAvatar}
                              alt=""
                            />
                          ) : (
                            <Jazzicon diameter={24} seed={jsNumberForAddress(delegatee || '')} />
                          )}
                          <p className="text-sm self-end">{delegateEnsName || delegatee}</p>
                          <InformationCircleIcon
                            id="delegate-address-information"
                            className="h-4"
                          />
                        </div>
                      ) : (
                        'No one'
                      )}
                    </div>
                    <Tooltip
                      anchorSelect="#delegate-address-information"
                      content="Voting power for a given proposal is based on delegations at the time the proposal was created."
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-w-lg self-center mt-2">
                <form className="py-3" onSubmit={onSubmit}>
                  <label className="block mt-5 text-sm font-semibold leading-6 text-gray-900">
                    Delegate Address
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      className={`block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset  sm:text-sm sm:leading-6 ${clsx(
                        errors?.delegateAddress &&
                          'text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500'
                      )}`}
                      placeholder={address}
                      aria-invalid="true"
                      aria-describedby="address-error"
                      {...register('delegateAddress', {
                        onChange: async (e) => {
                          const val = await getEnsAddress(e.target.value);
                          setDelegateAddress(val || e.target.value);
                        },
                        validate: async (value) => {
                          if (value?.includes('.eth')) {
                            const val = await getEnsAddress(value);
                            if (val !== null) {
                              value = val;
                            }
                          }

                          const validAddress = isAddress(value);
                          const isBalanceNonzero = (l2.token?.value || BigInt(0)) > BigInt(0);
                          if (validAddress && isBalanceNonzero) return true;
                          if (!isBalanceNonzero) return 'Cannot delegate with 0 balance.';
                          return 'Not a valid address.';
                        },
                      })}
                    />
                    {mounted && errors?.delegateAddress && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>

                  {mounted && errors?.delegateAddress && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                      {errors.delegateAddress.message}
                    </p>
                  )}
                  <div className="flex justify-center mt-5">
                    {mounted && !address ? (
                      <div className="mt-5">
                        <ConnectButton />
                      </div>
                    ) : mounted && chain?.id !== config.l2.chain.id ? (
                      <button
                        type="button"
                        className="mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        onClick={async () => {
                          if (walletClient) switchChain(walletClient, config.l2.chain);
                        }}
                        disabled={walletIsLoading}
                      >
                        Switch network to {config.l2.chain.name}
                      </button>
                    ) : (
                      <button
                        className="flex flex-row mt-5 items-center rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={Boolean(errors?.delegateAddress) || isLoading}
                      >
                        Delegate
                        {isLoading && (
                          <span className="ml-2">
                            <Spinner />
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </>
          )}
        </CardWithHeader>
      </div>
    </>
  );
};

export default Delegate;
