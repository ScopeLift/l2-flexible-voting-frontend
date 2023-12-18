import { useBlockNumber, PublicClient, useAccount, useContractReads, usePublicClient } from 'wagmi';
import { parseAbiItem } from 'viem';
import { useConfig } from '@/hooks/useConfig';
import useSWR from 'swr';

import {useProposalsQuery} from "@/graphql/generated/graphql"
import {GOVERNOR_SUBGRAPH_URL} from "@/util/constants"

export type Proposal = {
  id: string;
  description: string;
  isBridged: boolean;
  createdTimestamp: bigint;
  createdBlock: bigint;
  status: { l1: string; l2?: string };
  tallyLink: { l1: string; l2?: string };
  startBlock: {
    l1: string;
    l2?: string;
  };
  endBlock: {
    l1: string;
    l2?: string;
  };
  votes: {
    l1: { againstVotes: bigint; forVotes: bigint; abstainVotes: bigint };
    l2?: { againstVotes: bigint; forVotes: bigint; abstainVotes: bigint };
    l2Bridged?: { againstVotes: bigint; forVotes: bigint; abstainVotes: bigint };
    l2NotBridged?: { againstVotes: bigint; forVotes: bigint; abstainVotes: bigint };
  };
  votingPower: {
    l1: bigint;
    l2?: bigint;
  };
};

const createFetcher =
  ({
    publicClient,
    deployBlock,
    address,
  }: {
    publicClient: PublicClient;
    deployBlock: bigint;
    address: `0x${string}`;
  }) =>
  async () => {
    // 1. Get events
    // 2. Get voting weight
    // 3. Calculate opened or closed
    // TODO: Make these concurrent

    const createdLogs = await publicClient.getLogs({
      address,
      event: parseAbiItem(
        'event ProposalCreated(uint256, address, address[], uint256[], string[],bytes[], uint256, uint256, string)'
      ),
      fromBlock: deployBlock,
    });
		// Remove this call
    const canceledLogs = await publicClient.getLogs({
      address,
      event: parseAbiItem('event ProposalCanceled(uint256 proposalId)'),
      fromBlock: deployBlock,
    });
    // TODO: ensure sorting is indeed time desc
		// Get the latest bridged vote
    const voteBridgedLogs = await publicClient.getLogs({
      address,
      event: parseAbiItem(
        'event VoteBridged(uint256 indexed proposalId, uint256 againstVotes, uint256 forVotes, uint256 abstainVotes)'
      ),
      strict: true,
      fromBlock: deployBlock,
    });
    const canceledProposals = new Map();
    for (const canceledProposal of canceledLogs) {
      canceledProposals.set(canceledProposal.args, true);
    }
    const getProposalVotes = async (proposalId: bigint) => {
      return publicClient.readContract({
        address,
        abi: [
          parseAbiItem(
            'function proposalVotes(uint256) view returns (uint256 againstVotes, uint256 forVotes, uint256 abstainVotes)'
          ),
        ],
        functionName: 'proposalVotes',
        args: [proposalId],
      });
    };

    return Promise.all(
      createdLogs.map(async (event) => {
        const args = event.args;
        const proposalId = args[0]?.toString() || '0';
        const bridgedVotes = voteBridgedLogs?.find(
          (event) => event.args.proposalId?.toString() === proposalId
        )?.args;
        const proposalVotePromise = getProposalVotes(BigInt(proposalId));
        const blockPromise = publicClient.getBlock({ blockNumber: event.blockNumber });
        const [[againstVotes, forVotes, abstainVotes], eventBlock] = await Promise.all([
          proposalVotePromise,
          blockPromise,
        ]);
        return {
          proposalId,
          startBlock: args[6]?.toString() || '0',
          endBlock: args[7]?.toString() || '0',
          description: args[8]?.toString() || '',
          isCancelled: Boolean(canceledProposals.get(args[0])),
          createdBlock: event.blockNumber,
          createdTimestamp: eventBlock.timestamp,
          votingPower: 0,
          votes: { againstVotes, forVotes, abstainVotes },
          bridgedVotes,
        };
      })
    );
  };

export const useL1Proposals = () => {
  const { l1 } = useConfig();
  // const publicClient = usePublicClient({ chainId: l1.chain.id });
  const { address } = useAccount();

  // const fetcher = createFetcher({
  //   publicClient,
  //   deployBlock: BigInt(l1.deployBlock),
  //   address: l1.governor,
  // });
	// Page size should be dynamic
	const {data: queryData, isLoading,  error} = useProposalsQuery({endpoint: GOVERNOR_SUBGRAPH_URL}, {pageSize: 1000, governor: l1.governor, offset: 0})
	// Add voting data, but sort of working
	console.log(queryData)
	console.log(isLoading)
	
  // const { data: proposalData, error, isLoading } = useSWR(`fetchL1Proposals-${daoId}`, fetcher);
  const { data: votingPower } = useContractReads({
    contracts: queryData?.proposals.map((proposal) => {
      return {
        address: l1.tokenAddress,
        abi: [
          parseAbiItem(
            'function getPastVotes(address account, uint256 blockNumber) external view returns (uint256 votingPower)'
          ),
        ],
        functionName: 'getPastVotes',
        chainId: l1.chain.id,
        args: [address || '0x0000000000000000000000000000000000000000', proposal.startBlock],
      };
    }),
  });
    const {data: proposalVoteData, isLoading: proposalVoteIsLoading, error: proposalVoteError} = useContractReads({
    contracts: queryData?.proposals.map((proposal) => {
      return {
        address: l1.governor,
        abi: [
          parseAbiItem(
            'function proposalVotes(uint256) view returns (uint256 againstVotes, uint256 forVotes, uint256 abstainVotes)'
          ),
        ],
        functionName: 'proposalVotes',
        args: [proposal.proposalId],
        chainId: l1.chain.id,
      };
    }),
  })
	console.log(queryData?.proposals)

  const {
    data: proposalState,
    isLoading: proposalStateIsLoading,
    error: proposalStateError,
  } = useContractReads({
    contracts: queryData?.proposals?.map((proposal) => {
      return {
        address: l1.governor,
        abi: [parseAbiItem('function state(uint256 proposalId) external view returns (uint8)')],
        functionName: 'state',
        chainId: l1.chain.id,
        args: [proposal.proposalId || '0'],
      };
    }),
  });

  const data = queryData?.proposals?.map((proposal, i) => {
	  const vote = proposalVoteData?.[i]?.result as [bigint, bigint, bigint] | undefined
    return {
      status: proposalState?.[i].result as number,
      votes: { againstVotes: vote?.[0] as bigint || BigInt(0), forVotes: vote?.[1] || BigInt(0), abstainVotes: vote?.[2] || BigInt(0)},
      tallyLink: `${l1.tallyGovernorDomain}/proposal/${proposal.proposalId}`,
			...proposal,
      votingPower: (votingPower?.[i]?.result as bigint) || BigInt(0),
    };
  });
	console.log(data)
  return {
    data,
    isLoading: isLoading || proposalStateIsLoading,
    error: error || proposalStateError,
  };
};

export const useL2Proposals = (
  l1Proposals: { proposalId: string; startBlock: string }[] | undefined
) => {
  const { l2, name: daoId } = useConfig();
  const publicClient = usePublicClient({ chainId: l2.chain.id });
  const { address } = useAccount();
  const fetcher = createFetcher({
    publicClient,
    deployBlock: BigInt(l2.deployBlock),
    address: l2.voteAggregator,
  });
  const { data: proposalData, error, isLoading } = useSWR(`fetchL2Proposals-${daoId}`, fetcher);
  const { data: votingPower } = useContractReads({
    contracts: proposalData?.map((proposal) => {
      return {
        address: l2.tokenAddress,
        abi: [
          parseAbiItem(
            'function getPastVotes(address account, uint256 blockNumber) external view returns (uint256 votingPower)'
          ),
        ],
        chainId: l2.chain.id,
        functionName: 'getPastVotes',
        args: [
          address || '0x0000000000000000000000000000000000000000',
          l1Proposals?.find((l1Proposal) => l1Proposal.proposalId === proposal.proposalId)
            ?.startBlock || 0,
        ],
      };
    }),
  });

  const data = proposalData?.map((proposal, i) => {
    return {
      tallyLink: `${l2.tallyGovernorDomain}/proposal/${proposal.proposalId}`,
      ...proposal,
      votingPower: (votingPower?.[i]?.result as bigint) || BigInt(0),
    };
  });
  return {
    data,
    isLoading,
    error,
  };
};

const useL2ProposalsState = (l2Proposals?: { proposalId: string; startBlock: string }[]) => {
  const { l2 } = useConfig();
  const {
    data: proposalState,
    isLoading,
    error,
  } = useContractReads({
    watch: true,
    contracts: l2Proposals?.map((proposal) => {
      return {
        address: l2.voteAggregator,
        abi: [parseAbiItem('function state(uint256 proposalId) external view returns (uint8)')],
        functionName: 'state',
        chainId: l2.chain.id,
        args: [proposal.proposalId || '0'],
      };
    }),
  });

  return {
    data: l2Proposals?.map((proposal, i) => {
      return {
        proposalId: proposal.proposalId,
        state: proposalState?.[i].result === 6 ? 'closed' : proposalState?.[i].result, // 6 represents the Expired proposal state
      };
    }),
    isLoading,
    error,
  };
};

const statusLabel = (contractStatus?: number) => {
  if (contractStatus === 0) {
    return 'pending';
  } else if (contractStatus === 1) {
    return 'active';
  } else if (contractStatus === 2) {
    return 'cancelled';
  } else if (contractStatus === 3) {
    return 'defeated';
  } else if (contractStatus === 4) {
    return 'succeeded';
  } else if (contractStatus === 5) {
    return 'queued';
  } else if (contractStatus === 6) {
    return 'expired';
  } else if (contractStatus === 7) {
    return 'executed';
  } else {
    return 'closed';
  }
};

export const useProposals = () => {
  const { data: l1Proposals, isLoading: isL1Loading } = useL1Proposals();
  const { data: l2Proposals, isLoading: isL2Loading } = useL2Proposals(l1Proposals);
  const { data: l2ProposalsState, isLoading: isL2StateLoading } = useL2ProposalsState(l1Proposals);

  const data: Proposal[] | undefined = l1Proposals
    ?.map((proposal) => {
      const l2Proposal = l2Proposals?.find(
        (l2Proposal) => l2Proposal.proposalId === proposal.proposalId
      );
      const l2ProposalState = l2ProposalsState?.find(
        (l2ProposalState) => proposal.proposalId === l2ProposalState.proposalId
      )?.state;
      const l1ProposalStatus = proposal.canceled ? 'cancelled' : statusLabel(proposal?.status);
      const l2ProposalStatus =
        !l2Proposal?.isCancelled && l2ProposalsState?.length && l2ProposalState
          ? statusLabel(l2ProposalState as number)
          : 'closed';
      return {
        id: proposal.proposalId,
        description: proposal.description,
        isBridged: Boolean(l2Proposal),
        createdBlock: proposal.blockNumber,
        createdTimestamp: proposal.blockTimestamp,
        status: {
          l1: l1ProposalStatus,
          l2: l2ProposalStatus,
        },
        startBlock: {
          l1: proposal.startBlock,
          l2: l2Proposal?.startBlock,
        },
        endBlock: {
          l1: proposal.endBlock,
          l2: l2Proposal?.endBlock,
        },
        tallyLink: {
          l1: proposal.tallyLink,
          l2: l2Proposal?.tallyLink,
        },
        votes: {
          l1: proposal.votes,
          l2: l2Proposal?.votes,
          l2Bridged: l2Proposal?.bridgedVotes,
          l2NotBridged: l2Proposal
            ? {
                forVotes:
                  l2Proposal.votes.forVotes - (l2Proposal.bridgedVotes?.forVotes || BigInt(0)),
                againstVotes:
                  l2Proposal.votes.againstVotes -
                  (l2Proposal.bridgedVotes?.againstVotes || BigInt(0)),
                abstainVotes:
                  l2Proposal.votes.abstainVotes -
                  (l2Proposal.bridgedVotes?.abstainVotes || BigInt(0)),
              }
            : undefined,
        },
        votingPower: {
          l1: proposal.votingPower,
          l2: l2Proposal?.votingPower,
        },
      };
    })
    .reverse();
  return { data, isLoading: isL1Loading || isL2Loading || isL2StateLoading };
};
