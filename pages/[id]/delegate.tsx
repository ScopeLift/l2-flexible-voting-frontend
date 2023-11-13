import clsx from 'clsx';
import { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useAccount, useNetwork, useWalletClient } from 'wagmi';
import { isAddress, formatUnits } from 'viem';
import { useForm } from 'react-hook-form';
import { useBalances } from '@/hooks/useBalances';
import { useConfig } from '@/hooks/useConfig';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useL2CurrentVotingWeight } from '@/hooks/useCurrentVotingWeight';
import { useL2DelegateVote } from '@/hooks/useL2DelegateVote';
import { useL2Delegate } from '@/hooks/useL2Delegate';
import { ZERO_ADDRESS } from '@/util/constants';
import Spinner from '@/components/Spinner';

type FormData = {
  delegateAddress: string;
};

const Delegate: NextPage = () => {
  const config = useConfig();
  const mounted = useHasMounted();
  const { l2, error } = useBalances();
  const { address } = useAccount();
  const { data: walletClient, isLoading: walletIsLoading } = useWalletClient();
  const { chain } = useNetwork();
  const [delegateAddress, setDelegateAddress] = useState(address);
  const { data: delegatee } = useL2Delegate({});
  const { data: l2VotingWeight } = useL2CurrentVotingWeight({
    voterAddress: address || ZERO_ADDRESS,
  });
  const {
    write,
    isLoading,
    error: delegateError,
  } = useL2DelegateVote({ delegateAddress: delegateAddress || ZERO_ADDRESS });
	console.log("IsLoading")
	console.log(isLoading)
	console.log(!((l2.token?.value || BigInt(0)) <= BigInt(0)) || isLoading)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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

  return (
    <>
      <Head>
        <title>Cross Chain Voting: Delegate</title>
      </Head>
      <div className="flex justify-center align-center self-center h-full w-1/3">
        <div className="flex flex-col m-4 w-full gap-5">
          <div className="flex flex-col self-center">
            <h1 className="py-5 block text-xl">Delegate on {mounted && config.l2.chain.name}</h1>
            <div className="flex w-full py-4 justify-between">
              <div className="flex flex-col">
                <div>Token Balance</div>
                <div className="flex align-center p-4 gap-1">
                  <Image
                    height="32"
                    width="32"
                    src={config.l2.tokenLogo}
                    alt={`${config.name}'s Governor token logo`}
                  />
                  <div className="self-center">{mounted && (l2.token?.formatted || 0)}</div>
                  <div className="self-center">{mounted && (l2.token?.symbol || '---')}</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div>Voting Power</div>
                <div className="flex align-center p-4 gap-1">
                  <Image
                    height="32"
                    width="32"
                    src={config.l2.tokenLogo}
                    alt={`${config.name}'s Governor token logo`}
                  />
                  <div className="self-center">{mounted && l2VotingWeightFormatted}</div>
                  <div className="self-center">{mounted && (l2.token?.symbol || '---')}</div>
                </div>
              </div>
            </div>
            <div className="flex w-full py-4 justify-between">
              <div className="flex flex-col">
                <div>Delegated To</div>
                <div className="flex align-center p-4 gap-1">
                  <div className="self-center">
                    {mounted && delegatee !== ZERO_ADDRESS ? delegatee : 'No one'}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-lg self-center">
              <div className="text-sm">
                <p>
                  {mounted && l2.token?.symbol} determines {config.name} voting power on{' '}
                  {config.l2.chain.name}.
                </p>
                <p className="mt-2">
                  <span className="font-bold">Note:</span> They must be delegated before a proposal
                  has been proposed in order to be considered for that proposal.
                </p>
              </div>
              <form className="py-3" onSubmit={onSubmit}>
                <label className="block text-sm font-medium leading-6 text-gray-900">
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
                      onChange: (e) => {
                        setDelegateAddress(e.target.value);
                      },
                      validate: async (value) => {
                        const validAddress = isAddress(value);
                        if (validAddress) {
                          return true;
                        }
                        return 'Invalid address';
                      },
                    })}
                  />
                  {mounted && errors?.delegateAddress && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                    </div>
                  )}
                </div>
                {mounted && errors?.delegateAddress && (
                  <p className="mt-2 text-sm text-red-600" id="email-error">
                    Not a valid address.
                  </p>
                )}
                {mounted && chain?.id !== config.l2.chain.id ? (
                  <button
                    type="button"
                    className="mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    onClick={() => walletClient?.switchChain({ id: config.l2.chain.id })}
                    disabled={walletIsLoading}
                  >
                    Switch network to {config.l2.chain.name}
                  </button>
                ) : (
                  <button
                    className="flex flex-row mt-5 items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={!((l2.token?.value || BigInt(0)) <= BigInt(0)) || isLoading}
                  >
                    Delegate
                    {isLoading && (
                      <span className="ml-2">
                        <Spinner />
                      </span>
                    )}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delegate;
