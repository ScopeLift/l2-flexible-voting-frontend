import clsx from 'clsx';
import { truncate } from '@/util';
import PillAction from '@/components/PillAction';
import Spinner from '@/components/Spinner';
import { formatUnits } from 'viem';
import { Proposal } from '@/hooks/useProposals';
import { useConfig } from '@/hooks/useConfig';
import { useEasyWrite } from '@/hooks/useEasyWrite';
import { parseAbi } from 'viem';
import { useFees } from '@/hooks/useFees';
import { useL1ProposalMetadataBridged } from '@/hooks/useL1ProposalMetadataBridged';
import { useWalletClient } from 'wagmi';
export default function ProposalRow({
  id,
  isBridged,
  description,
  startBlock,
  votes,
  tallyLink,
  votingPower,
}: Proposal) {
  const { l1, l2 } = useConfig();
  const { fees } = useFees();
  const { data: walletClient } = useWalletClient();
  const { data: bridged, isLoading: proposalMetadataBridgeIsLoading } =
    useL1ProposalMetadataBridged({ proposalId: id });
  const {
    write: bridgeProposal,
    isLoading: bridgeProposalIsLoading,
    error: bridgeProposalError,
  } = useEasyWrite({
    address: l1.metadataBridge,
    chainId: l1.chain.id,
    abi: parseAbi([
      'function bridgeProposalMetadata(uint256 proposalId) public payable returns (uint256 sequence)',
    ]),
    functionName: 'bridgeProposalMetadata',
    args: [id],
    value: fees?.l1 || BigInt(0),
  });
  const bridgeButton =
    bridged !== null && !proposalMetadataBridgeIsLoading ? (
      <div className="rounded bg-gray-500 px-2 py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Waiting for relayer 🕓
      </div>
    ) : (
      <button
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={async () => {
          await walletClient!.switchChain({ id: l1.chain.id });
          bridgeProposal();
        }}
        disabled={!bridgeProposal || bridgeProposalIsLoading}
      >
        <span className="flex items-center gap-2">
          Bridge Proposal!
          {bridgeProposalIsLoading && <Spinner />}
        </span>
      </button>
    );

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
      <div className="text-xs grow">
        {/* Hacky style rule in next line gives all table cells padding */}
        <table className="w-full [&>*>tr>td]:p-1">
          <thead>
            <tr>
              <th className="w-10"></th>
              <th className="w-40">Voting power</th>
              <th className="w-40">Votes for</th>
              <th className="w-40">Votes against</th>
              <th className="w-40"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="p-1">
              <td>L1</td>
              <td>{formatUnits(votingPower.l1, l1.tokenDecimals)}</td>
              <td>
                <span className="text-green-500">
                  {formatUnits(votes.l1.forVotes, l1.tokenDecimals)}
                </span>
              </td>
              <td>
                {' '}
                <span className="text-red-500">
                  {formatUnits(votes.l1.againstVotes, l1.tokenDecimals)}
                </span>
              </td>
              <td>
                <a href={tallyLink.l1} target="_blank">
                  <PillAction icon="external-link">Vote on Tally</PillAction>
                </a>
              </td>
            </tr>

            {/* L2 */}
            <tr className={clsx(isBridged ? '' : 'bg-gray-100 text-gray-300')}>
              <td>L2</td>
              <td>
                {votingPower.l2 !== undefined ? (
                  <span>{formatUnits(votingPower.l2, l2.tokenDecimals)}</span>
                ) : (
                  '--'
                )}
              </td>
              <td>
                {votes.l2 ? (
                  <span className="text-green-500">
                    {formatUnits(votes.l2.forVotes, l2.tokenDecimals)}
                  </span>
                ) : (
                  '--'
                )}
              </td>
              <td>
                {votes.l2 ? (
                  <span className="text-red-500">
                    {formatUnits(votes.l2.againstVotes, l2.tokenDecimals)}
                  </span>
                ) : (
                  '--'
                )}
              </td>
              <td>
                {tallyLink.l2 ? (
                  <a href={tallyLink.l2} target="_blank">
                    <PillAction icon="external-link">Vote on Tally</PillAction>
                  </a>
                ) : (
                  <div className="inline-block">{bridgeButton}</div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
  );
}
