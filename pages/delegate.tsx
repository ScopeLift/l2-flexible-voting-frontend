import clsx from 'clsx';
import {useState} from "react"
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useAccount, useWalletClient } from 'wagmi';
import { isAddress } from 'viem'
import { useForm } from "react-hook-form"

import ConnectWallet from '@/components/ConnectWallet';
import { useBalances } from '@/hooks/useBalances';
import { useConfig } from '@/hooks/useConfig';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useL2VotingWeight } from '@/hooks/useL2VotingWeight';
import { useL2DelegateVote } from '@/hooks/useL2DelegateVote';
import { useL2Delegate } from '@/hooks/useL2Delegate';
import { ZERO_ADDRESS } from '@/util/constants';


type FormData = {
  delegateAddress: string
}

const Delegate: NextPage = () => {
  const config = useConfig();
  const mounted = useHasMounted();
  const { l2, error } = useBalances();
  const { isConnected, address } = useAccount();
	const { data: walletClient, } = useWalletClient()


	const [delegateAddress, setDelegateAddress] = useState(address)
	const {data: delegatee} = useL2Delegate({})
  const { data: l2VotingWeight } = useL2VotingWeight({
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
    formState: { errors },
  } = useForm<FormData>()
	const onSubmit = handleSubmit(async (data) => {
		await walletClient?.switchChain({ id: config.l2.chain.id }) 
		console.log(data)
		write?.()
	});

  if (error) {
    console.error(`Fetch balances has failed: ${error}`);
  }

  if (delegateError) {
    console.error(`Delegating failed ${delegateError}`);
  }

  return (
    <>
      <Head>
        <title>Cross Chain Voting: Delegate</title>
      </Head>
      <div className="flex justify-center align-center self-center h-full w-1/3">
        <ConnectWallet
          isConnected={mounted ? isConnected : false}
          className="h-2/3"
          action="look at delegate information"
        >
          <div className="flex flex-col m-4 w-full gap-5">
            <div className="flex flex-col self-center">
              <h1 className="py-5 block text-xl">Voting and Delegation</h1>
              <div className="flex w-full py-4 justify-between">
                <div className="flex flex-col">
                  <div>Token Balance</div>
                  <div className="flex align-center p-4 gap-1">
                    <Image
                      height="32"
                      width="32"
                      src={config.l2.logoUri}
                      alt={`${config.name}'s Governor token logo`}
                    />
                    <div className="self-center">
                      {l2.token?.value.toString() || BigInt(0).toString()}
                    </div>
                    <div className="self-center">{l2.token?.symbol}</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>Voting Power</div>
                  <div className="flex align-center p-4 gap-1">
                    <Image
                      height="32"
                      width="32"
                      src={config.l2.logoUri}
                      alt={`${config.name}'s Governor token logo`}
                    />
                    <div className="self-center">
                      {l2VotingWeight?.toString() || BigInt(0).toString()}
                    </div>
                    <div className="self-center">{l2.token?.symbol}</div>
                  </div>
                </div>
              </div>
              <div className="flex w-full py-4 justify-between">
                <div className="flex flex-col">
                  <div>Delegated To</div>
                  <div className="flex align-center p-4 gap-1">
                    <div className="self-center">
                      {delegatee !== ZERO_ADDRESS ? delegatee : "No one"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-w-lg self-center">
                <div>
                  Tokens determine voting power on {config.l2.chain.name} for {config.name}. They
                  must be delegated before a proposal has been proposed in order to be considered
                  for that propoosal.
                </div>
		            <form className="py-3" onSubmit={onSubmit}>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Delegate Address
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      className={`block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset  sm:text-sm sm:leading-6 ${clsx(errors?.delegateAddress && "text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500")}`}
                      placeholder={address}
                      aria-invalid="true"
                      aria-describedby="address-error"
		                  {...register("delegateAddress", {
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
		                { errors?.delegateAddress &&
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                      </div>
										}
                  </div>
		                { errors?.delegateAddress &&
                  <p className="mt-2 text-sm text-red-600" id="email-error">
                    Not a valid address.
                  </p>
										}
                  <button
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5 disabled:opacity-75 disabled:bg-indigo-600"
		                type="submit"
                    disabled={
                      ((l2.token?.value || BigInt(0)) <= BigInt(0) || isLoading)
                    }
                  >
                    Delegate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </ConnectWallet>
      </div>
    </>
  );
};

export default Delegate;
