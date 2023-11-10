import { Fragment, useState } from 'react';
import { useTransaction } from 'wagmi';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Spinner from '@/components/Spinner';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  txHash?: string;
};
const BridgeTransactionModal = ({ isOpen, onClose, txHash }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <Dialog.Title
                  as="h3"
                  className="flex items-center text-base font-semibold leading-6 text-gray-900"
                >
                  <InformationCircleIcon className="mr-1 h-5" /> Cross Chain Info
                </Dialog.Title>
                <div className="flex flex-col items-center">
                  <p className="text-sm py-2 mt-4 w-3/4">
                    We are currently waiting for the relayer to relay your transactions. Your tokens
                    will arrive <strong>~20</strong> minutes after the transaction is confirmed.
                  </p>
                  <p className="text-sm py-2 mt-4 w-3/4">
                    After the relaying is successful, details will appear on {' '}
                    <a
                      className="cursor-pointer font-bold text-gray-700 decoration-1 underline"
                      target="_blank"
                      href={`https://wormholescan.io/#/tx/${txHash}`}
                    >
                      Wormholescan
                    </a>
                    .
                  </p>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BridgeTransactionModal;
