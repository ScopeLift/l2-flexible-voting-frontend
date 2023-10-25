import { usePublicClient } from 'wagmi';
import { parseAbiItem } from 'viem';
import { useConfig } from '@/hooks/useConfig';
import useSWR from 'swr';
import { L2_TALLY_GOVERNOR_DOMAIN } from '@/util/constants';

// 1. Get events
// 2. Get voting weight
// 3. Calculate opened or closed
export const useL2Proposals = () => {
  const { l2 } = useConfig();
  const publicClient = usePublicClient({ chainId: l2.chain.id });
  const fetcher = async () => {
    const deployBlock = 16154713n;
    // Make these concurrent
    const createdLogs = await publicClient.getLogs({
      address: l2.voteAggregator,
      event: parseAbiItem(
        'event ProposalCreated(uint256, address, address[], uint256[], string[],bytes[], uint256, uint256, string)'
      ),
      fromBlock: deployBlock,
    });
    const canceledLogs = await publicClient.getLogs({
      address: l2.voteAggregator,
      event: parseAbiItem('event ProposalCanceled(uint256 proposalId)'),
      fromBlock: deployBlock,
    });
    console.log(canceledLogs);
    const canceledProposals = new Map();
    for (const canceledProposal of canceledLogs) {
      canceledProposals.set(canceledProposal.args, true);
    }
    console.log(createdLogs);

    return createdLogs.map((event) => {
      const args = event.args;
      return {
        proposalId: args[0]?.toString() || '0',
        startBlock: args[6]?.toString() || '0',
        endBlock: args[7]?.toString() || '0',
        description: args[8]?.toString() || '',
        isCancelled: Boolean(canceledProposals.get(args[0])),
        tallyLink: `${L2_TALLY_GOVERNOR_DOMAIN}/proposal/${args[0]}`,
        votingPower: 0,
      };
    });
  };
  const { data, error, isLoading } = useSWR('fetchProposals', fetcher);

  return {
    data,
    isLoading,
    error,
  };
};
