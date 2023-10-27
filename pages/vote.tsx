import type { NextPage } from 'next';
import Head from 'next/head';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from '@heroicons/react/20/solid';
import { Proposal, useProposals } from '@/hooks/useProposals';
import { truncate } from '@/util';
import PillAction from '@/components/PillAction';

// proposal information
//
// 1. Name of the proposal
// 2. Start date
// 3. L2 voting end date
// 4. users voting power
// 5. has the proposal been cancelled (the l2 state of the proposal more generally)
// 6 link to the tally page for a user to vote
const Vote: NextPage = () => {
  const { data, isLoading: isProposalLoading } = useProposals();
  return (
    <>
      <Head>
        <title>Cross Chain Voting: Stats</title>
      </Head>
      <div className="flex flex-col content-center h-full w-5/6 self-center mt-10">
        <h1>Proposals</h1>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            {!isProposalLoading ? (
              <Table
                {...{
                  data: data || [],
                }}
              />
            ) : (
              'Loading... '
            )}
          </div>
        </div>
      </div>
    </>
  );
};

function Table({ data }: { data: Proposal[] }) {
  const currentPage = 1;
  const pageCount = 1;
  const nextPage = () => {};
  const prevPage = () => {};
  const firstPage = () => {};
  const lastPage = () => {};

  return (
    <div className="p-2">
      <div className="h-2" />
      <ul role="list" className="divide-y divide-gray-100">
        {data.map(({ id, description, startBlock, votes, tallyLink }) => {
          return (
            <li key={id} className="relative flex justify-between py-5">
              <div className="flex gap-x-4 pr-6 w-1/3">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{description}</p>
                  <p className="mt-1 flex text-xs leading-5 text-gray-500" title={id}>
                    Proposal ID {truncate(id)}
                  </p>
                  <p className="mt-1 flex text-xs leading-5 text-gray-500">
                    Created at L1 block {startBlock.l1}
                  </p>
                  <PillAction
                    icon="copy-to-clipboard"
                    onClick={() => {
                      navigator.clipboard.writeText(id);
                    }}
                  >
                    Copy Proposal ID
                  </PillAction>
                </div>
              </div>
              <div className="flex text-xs items-center justify-between gap-x-4 grow">
                <div className="flex flex-col w-20">
                  <p className="leading-6 text-gray-900">Voting power</p>
                  <div className="flex flex-col">
                    <div>L1:</div>
                    <div>L2:</div>
                  </div>
                </div>
                <div className="flex flex-col w-20">
                  <p className="leading-6 text-gray-900">Votes for</p>
                  <div className="flex flex-col">
                    <div className="overflow-ellipsis">L1: {votes.l1.forVotes.toString()}</div>
                    <div>L2: {votes.l2?.forVotes.toString() || '--'}</div>
                  </div>
                </div>
                <div className="flex flex-col w-20">
                  <p className="leading-6 text-gray-900">Votes against</p>
                  <div className="flex flex-col">
                    <div>L1: {votes.l1.againstVotes.toString()}</div>
                    <div>L2: {votes.l2?.againstVotes.toString() || '--'}</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="leading-6 text-gray-900"></p>
                  <div className="flex flex-col">
                    <div>
                      L1:{' '}
                      <a href={tallyLink.l1} target="_blank">
                        Vote on Tally
                      </a>
                    </div>
                    <div>
                      L2:{' '}
                      {tallyLink.l2 ? (
                        <a href={tallyLink.l2} target="_blank">
                          Vote on Tally
                        </a>
                      ) : (
                        '--'
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="h-2" />
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing page <span className="font-medium">{currentPage} </span> of {pageCount}
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <div className="flex items-center gap-2">
                <button
                  className="border rounded p-1 cursor-pointer"
                  onClick={firstPage}
                  disabled={currentPage === 1}
                >
                  <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  className="border rounded p-1 cursor-pointer"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  className="border rounded p-1 cursor-pointer"
                  onClick={nextPage}
                  disabled={currentPage === pageCount}
                >
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  className="border rounded p-1 cursor-pointer"
                  onClick={lastPage}
                  disabled={currentPage === pageCount}
                >
                  <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;
