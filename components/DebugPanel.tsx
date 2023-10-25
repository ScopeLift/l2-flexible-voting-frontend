import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useDebugPanel } from '@/contexts/DebugPanel';
import { useConfig } from '@/hooks/useConfig';
import { useAccount } from 'wagmi';
import { useBalances } from '@/hooks/useBalances';
import { parseAbi, parseUnits } from 'viem';
import { useEasyWrite } from '@/hooks/useEasyWrite';
import { useNotifications } from '@/contexts/NotificationsContext';

export default function DebugPanel() {
  const { isOpen, setIsOpen } = useDebugPanel();
  const { notify } = useNotifications();
  const { address } = useAccount();
  const { l1: l1Config, l2: l2Config } = useConfig();
  const { l1, l2 } = useBalances();
  const { write: writeL1Mint } = useEasyWrite({
    address: l1Config.tokenAddress,
    abi: parseAbi(['function mint(address to, uint256 amount) public']),
    functionName: 'mint',
    chainId: l1Config.chain.id,
    args: [address!, parseUnits('1000', l1.token?.decimals || 18)],
  });

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-500"
                enterFrom="translate-x-[-430px]"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-[-430px]"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-white">
                          Debug Panel
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-indigo-300">
                          Mint tokens, set balances, and more.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-1 px-4 py-6 sm:px-6">
                      <h3>L1: {l1Config.chain.name}</h3>
                      <button
                        type="button"
                        className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        onClick={() => writeL1Mint!()}
                        disabled={!writeL1Mint}
                      >
                        Mint 1000 {l1.token?.symbol} on L1
                      </button>
                      <h3 className="mt-5">L2: {l2Config.chain.name}</h3>
                      <button onClick={() => notify('hi')}>hey</button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
