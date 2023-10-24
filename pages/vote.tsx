import {useMemo} from "react"
import type { NextPage } from "next";
import Head from "next/head";
import {
  Column,
  Table as ReactTable,
  PaginationState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
	createColumnHelper,
  OnChangeFn,
  flexRender,
} from '@tanstack/react-table'
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/20/solid'
import {useL2Proposals} from '@/hooks/useL2Proposals'

// const data = [
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'Boo', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
//   { proposal: 'First proposal', startBlock: 9889767, endBlock: 9989767, votingPower: 1, isCancelled: false, tallyLink: "https://www.tally.xyz/gov/l2-flexible-voting-l2-example-4/proposal/89270641089180915787469790455189606853722485468293246956123979295426618605092"  },
// ]

type Proposal = {
	proposalId: string;
	startBlock: string;
	endBlock: string;
	votingPower: number;
	isCancelled: boolean;
	tallyLink: string;
}


// proposal information
//
// 1. Name of the proposal
// 2. Start date
// 3. L2 voting end date
// 4. users voting power
// 5. has the proposal been cancelled (the l2 state of the proposal more generally)
// 6 link to the tally page for a user to vote
const Vote: NextPage = () => {
	const columnHelper = createColumnHelper<Proposal>()
	const {data, isLoading: isProposalLoading} = useL2Proposals()
	console.log(data)
	console.log(isProposalLoading)
	console.log("Hi")
const columns = [
  columnHelper.accessor('proposalId', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.startBlock, {
    id: 'startBlock',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Start Block</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('endBlock', {
    header: () => 'End Block',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('votingPower', {
    header: () => <span>Voting Power</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('isCancelled', {
    header: 'Canceled',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('tallyLink', {
    header: 'Tally link',
    footer: info => info.column.id,
  }),
]
  return (
    <>
      <Head>
        <title>Cross Chain Voting: Stats</title>
      </Head>
      <div className="flex flex-col content-center h-full w-5/6 self-center mt-10">
		    <h1>Proposals</h1>
		   <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
       <Table
        {...{
          data: data || [],
          columns,
        }}
      />
        </div>
      </div>
      </div>
    </>
  );
};

function Table({
  data,
  columns,
}: {
  data: Proposal[]
  columns: ColumnDef<Proposal>[]
}) {
  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true,
  })

  return (
    <div className="p-2">
      <div className="h-2" />
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
     {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
            Showing <span className="font-medium">{table.getState().pagination.pageIndex + 1} </span> of{' '}{table.getPageCount()}
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <div className="flex items-center gap-2">
               <button
                 className="border rounded p-1 cursor-pointer"
                 onClick={() => table.setPageIndex(0)}
                 disabled={!table.getCanPreviousPage()}
               >
                 <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
               </button>
               <button
                 className="border rounded p-1 cursor-pointer"
                 onClick={() => table.previousPage()}
                 disabled={!table.getCanPreviousPage()}
               >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
               </button>
               <button
                 className="border rounded p-1 cursor-pointer"
                 onClick={() => table.nextPage()}
                 disabled={!table.getCanNextPage()}
               >
                 <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
               </button>
               <button
                 className="border rounded p-1 cursor-pointer"
                 onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                 disabled={!table.getCanNextPage()}
               >
                 <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
               </button>
             </div>
            <span className="flex items-center gap-4 px-2">
              <div>Go to:</div>
              <input
                type="number"
		            min="0"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
									console.log(page)
									if (page > table.getPageCount() - 1) {
										return
									}
                  table.setPageIndex(page)
                }}
                className="border p-1 rounded w-16"
              />
            </span>
            <span className="flex items-center gap-4 px-2">
              <div>Size:</div>
              <select
                  value={table.getState().pagination.pageSize}
                  onChange={e => {
                    table.setPageSize(Number(e.target.value))
                  }}
		              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                {[10, 20, 30, 40, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </span>
          </nav>
        </div>
      </div>
    </div>
    </div>
  )
}

// function Filter({
//   column,
//   table,
// }: {
//   column: Column<any, any>
//   table: ReactTable<any>
// }) {
//   const firstValue = table
//     .getPreFilteredRowModel()
//     .flatRows[0]?.getValue(column.id)
// 
//   const columnFilterValue = column.getFilterValue()
// 
//   return typeof firstValue === 'number' ? (
//     <div className="flex space-x-2">
//       <input
//         type="number"
//         value={(columnFilterValue as [number, number])?.[0] ?? ''}
//         onChange={e =>
//           column.setFilterValue((old: [number, number]) => [
//             e.target.value,
//             old?.[1],
//           ])
//         }
//         placeholder={`Min`}
//         className="w-24 border shadow rounded"
//       />
//       <input
//         type="number"
//         value={(columnFilterValue as [number, number])?.[1] ?? ''}
//         onChange={e =>
//           column.setFilterValue((old: [number, number]) => [
//             old?.[0],
//             e.target.value,
//           ])
//         }
//         placeholder={`Max`}
//         className="w-24 border shadow rounded"
//       />
//     </div>
//   ) : (
//     <input
//       type="text"
//       value={(columnFilterValue ?? '') as string}
//       onChange={e => column.setFilterValue(e.target.value)}
//       placeholder={`Search...`}
//       className="w-36 border shadow rounded"
//     />
//   )
// }


export default Vote;
