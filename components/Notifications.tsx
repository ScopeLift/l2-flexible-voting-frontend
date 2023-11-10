import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useNotifications } from '@/contexts/NotificationsContext';
import PillAction from '@/components/PillAction';
import CrossChainInfoModal from '@/components/CrossChainInfoModal';
import { truncateHash, getChain, getBlockExplorerUrl } from '@/util';

export default function Notifications() {
  const { notifications, dismiss } = useNotifications();
  const [isCrossChainInfoModalOpen, setIsCrossChainInfoModalOpen] = useState(false);
  const [activeTxHash, setActiveTxHash] = useState('');
  const notificationsWithBlockExplorerLinks = notifications.map((notification) => {
    return {
      ...notification,
      blockExplorerHref: getBlockExplorerUrl(notification.hash, notification.chainId),
    };
  });
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <CrossChainInfoModal
          isOpen={isCrossChainInfoModalOpen}
          onClose={() => setIsCrossChainInfoModalOpen(false)}
          txHash={activeTxHash}
        />
        <div className="flex w-full mt-10 flex-col items-center space-y-4 sm:items-end">
          {notificationsWithBlockExplorerLinks.map(
            ({ id, hash, functionName, chainId, txStatus, blockExplorerHref, isCrossChain }) => {
              return (
                <Transition
                  key={id}
                  show={true}
                  as={Fragment}
                  enter="transform ease-out duration-300 transition"
                  enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                  enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          {txStatus === 'success' ? (
                            <CheckCircleIcon
                              className="h-6 w-6 text-green-400"
                              aria-hidden="true"
                            />
                          ) : txStatus === 'reverted' ? (
                            <ExclamationCircleIcon
                              className="h-6 w-6 text-red-400"
                              aria-hidden="true"
                            />
                          ) : (
                            <InformationCircleIcon className="h-6 w-6 text-gray-400" />
                          )}
                        </div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                          <div className="text-sm font-medium text-gray-900">
                            {txStatus === 'reverted'
                              ? 'Transaction error'
                              : txStatus === 'success'
                              ? 'Transaction succeeded'
                              : 'Transaction pending'}
                            <span className="inline-block ml-2 text-indigo-500 text-xs">
                              {functionName}
                            </span>
                            <span className="inline-block ml-2 text-indigo-500 text-xs">
                              {isCrossChain && (
                                <>
                                  <p>Cross chain request will resolve in ~20 mins</p>
                                  <div
                                    className="cursor-pointer font-bold"
                                    onClick={() => {
                                      setActiveTxHash(hash);
                                      setIsCrossChainInfoModalOpen(true);
                                    }}
                                  >
                                    (Show more)
                                  </div>
                                </>
                              )}
                            </span>
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            <span className="font-bold">{getChain(chainId).name}: </span>
                            <span>{truncateHash(hash!, 8)}</span>
                          </div>
                          {/* Action pills */}
                          <div className="mt-3">
                            <PillAction
                              icon="copy-to-clipboard"
                              onClick={() => navigator.clipboard.writeText(hash!)}
                            >
                              Copy tx hash
                            </PillAction>
                            {blockExplorerHref && (
                              <a
                                href={blockExplorerHref}
                                target="_blank"
                                className="inline-block ml-1"
                              >
                                <PillAction icon="external-link">View on explorer</PillAction>
                              </a>
                            )}
                          </div>
                          {/* End action pills */}
                        </div>
                        <div className="ml-4 flex flex-shrink-0">
                          <button
                            type="button"
                            className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => {
                              dismiss(id);
                            }}
                          >
                            <span className="sr-only">Close</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
