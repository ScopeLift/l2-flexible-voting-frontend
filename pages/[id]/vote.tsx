import type { NextPage } from 'next';
import Head from 'next/head';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from '@heroicons/react/20/solid';
import { useState } from 'react';
import { Proposal, useProposals } from '@/hooks/useProposals';
import ProposalRow from '@/components/ProposalRow';

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const proposalsPerPage = 5;
  const pageCount = Math.ceil(data.length / proposalsPerPage);
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const firstPage = () => {
    setCurrentPage(1);
  };
  const lastPage = () => {
    setCurrentPage(pageCount);
  };
  const visibleProposals = data.filter(
    (proposal, i) => i >= (currentPage - 1) * proposalsPerPage && i < currentPage * proposalsPerPage
  );

  return (
    <div className="p-2">
      <div className="h-2" />
      <ul role="list" className="divide-y divide-gray-100">
        {visibleProposals.map((proposal) => (
          <ProposalRow key={proposal.id} {...proposal} />
        ))}
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
                  className="border rounded p-1 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  onClick={firstPage}
                  disabled={currentPage === 1}
                >
                  <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  className="border rounded p-1 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  className="border rounded p-1 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  onClick={nextPage}
                  disabled={currentPage === pageCount}
                >
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  className="border rounded p-1 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
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
