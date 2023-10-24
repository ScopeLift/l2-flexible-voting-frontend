import { usePublicClient } from 'wagmi'
import { parseAbiItem } from 'viem'
import L2VoteAggregator from '@/abi/L2VoteAggregator.sol/L2VoteAggregator';
import { useConfig } from '@/hooks/useConfig';
import useSWR from 'swr'

// 1. Get events
// 2. Get voting weight
// 3. Calculate opened or closed
export const useL2Proposals = () => {
  const { l2 } = useConfig();
	const publicClient = usePublicClient()
	const fetcher = async () => {
		const deployBlock = 16154713n
		// Make these concurrent
	   const createdLogs = await publicClient.getLogs({
	  	address: l2.voteAggregator,
	  	event: parseAbiItem("event ProposalCreated(uint256, address, address[], uint256[], string[],bytes[], uint256, uint256, string)"),
			fromBlock: deployBlock,

	  })
	 const canceledLogs = await publicClient.getLogs({
	  address: l2.voteAggregator,
	  event: parseAbiItem("event ProposalCanceled(uint256 proposalId)"),
	  fromBlock: deployBlock,
	  })
		console.log(canceledLogs)
		const canceledProposals = new Map()
		for (const canceledProposal of canceledLogs) {
			canceledProposals.set(canceledProposal.args, true)
		}
		console.log(createdLogs)

		return createdLogs.map((event) => {
			const args = event.args
			return {
				proposalId: args[0],
				proposer: args[1],
				startBlock: args[6],
				endBlock: args[7],
				description: args[8],
				isCancelled: canceledProposals.get(args[0]),
				tallyLink: `${L2_TALLY_GOVERNOR_DOMAIN}/proposal/${args[0]}`
			}
		})

	}
	const { data, error, isLoading } = useSWR('fetchProposals', fetcher)

  return {
    data,
    isLoading,
    error,
  };
};
