import { useAccount, useContractReads } from 'wagmi';
import { parseAbiItem } from 'viem';
import { useConfig } from '@/hooks/useConfig';
import { useProposalsQuery, useL2ProposalsQuery } from '@/graphql/generated/graphql';
import { AGGREGATOR_SUBGRAPH_URL, GOVERNOR_SUBGRAPH_URL } from '@/util/constants';

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

// This hook retrieves all L1 governor proposal data and L1 voting power for `address`, bounded by fetchSize and offset.
export const useL1Proposals = () => {
  const { l1 } = useConfig();
  const { address } = useAccount();

  // get all L1 proposal data
  const {
    data: queryData,
    isLoading,
    error,
  } = useProposalsQuery({ endpoint: GOVERNOR_SUBGRAPH_URL }, { governor: l1.governor });

  // get `address` voting power for each L1 proposal
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

  // gets all vote counts for all L1 proposals
  const {
    data: proposalVoteData,
    isLoading: proposalVoteIsLoading,
    error: proposalVoteError,
  } = useContractReads({
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
  });

  // get the current state of each L1 proposal
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

  // iterate through each proposal, returning composite of prior queries
  const data = queryData?.proposals?.map((proposal, i) => {
    const vote = proposalVoteData?.[i]?.result as [string, string, string];
    return {
      status: proposalState?.[i].result as number,
      votes: {
        againstVotes: BigInt(vote?.[0]) || BigInt(0),
        forVotes: BigInt(vote?.[1]) || BigInt(0),
        abstainVotes: BigInt(vote?.[2]) || BigInt(0),
      },
      tallyLink: `${l1.tallyGovernorDomain}/proposal/${proposal.proposalId}`,
      ...proposal,
      votingPower: (votingPower?.[i]?.result as bigint) || BigInt(0),
    };
  });
  return {
    data,
    isLoading: isLoading || proposalVoteIsLoading || proposalStateIsLoading,
    error: error || proposalVoteError || proposalStateError,
  };
};

// This hook retrieves all L2 aggregator proposal data and L2 voting power for `address`, bounded by fetchSize and offset.
export const useL2Proposals = (
  l1Proposals: { proposalId: string; startBlock: string }[] | undefined
) => {
  const { l2, l1 } = useConfig();
  const { address } = useAccount();

  console.log(l1Proposals?.map((proposal) => proposal.proposalId));
  console.log(l1Proposals?.map((proposal) => typeof proposal.proposalId));
  // get all L2 proposals from L2 aggregator
  const {
    data: queryData,
    isLoading,
    error,
  } = useL2ProposalsQuery(
    { endpoint: AGGREGATOR_SUBGRAPH_URL },
    {
      governor: l2.voteAggregator,
      proposalIds: l1Proposals?.map((proposal) => proposal.proposalId) || [],
    }
  );

  // gets all vote counts for all proposals
  const {
    data: proposalVoteData,
    isLoading: proposalVoteIsLoading,
    error: proposalVoteError,
  } = useContractReads({
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
  });

  const { data: votingPower } = useContractReads({
    contracts: queryData?.proposals?.map((proposal) => {
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

  const data = queryData?.proposals?.map((proposal, i) => {
    const vote = proposalVoteData?.[i]?.result as [bigint, bigint, bigint] | undefined;
    return {
      tallyLink: `${l2.tallyGovernorDomain}/proposal/${proposal.proposalId}`,
      ...proposal,
      votes: {
        againstVotes: (vote?.[0] as bigint) || BigInt(0),
        forVotes: vote?.[1] || BigInt(0),
        abstainVotes: vote?.[2] || BigInt(0),
      },
      votingPower: (votingPower?.[i]?.result as bigint) || BigInt(0),
    };
  });
  return {
    data,
    isLoading: isLoading || proposalVoteIsLoading,
    error: error || proposalVoteError,
  };
};

//
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

  // Marry L1 and L2 Proposal data together
  const data: Proposal[] | undefined = l1Proposals
    ?.map((proposal) => {
      // For each l1 proposal, find the corresponding l2 proposal...
      const l2Proposal = l2Proposals?.find(
        (l2Proposal) => l2Proposal.proposalId === proposal.proposalId
      );
      // and the current state of the proposal on l2
      const l2ProposalState = l2ProposalsState?.find(
        (l2ProposalState) => BigInt(proposal.proposalId) === BigInt(l2ProposalState.proposalId)
      )?.state;
      // Tweak the l1 and l2 statuses
      const l1ProposalStatus = proposal.isCancelled ? 'cancelled' : statusLabel(proposal?.status);
      const l2ProposalStatus =
        !l2Proposal?.isCancelled && l2ProposalsState?.length && l2ProposalState
          ? statusLabel(l2ProposalState as number)
          : 'closed';
      // return a giant merged object
      return {
        id: proposal.proposalId,
        description: proposal.description,
        isBridged: Boolean(l2Proposal),
        createdBlock: BigInt(proposal.blockNumber),
        createdTimestamp: BigInt(proposal.blockTimestamp),
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
          l2Bridged: l2Proposal?.bridgedVote
            ? {
                againstVotes: BigInt(l2Proposal.bridgedVote.voteAgainst),
                forVotes: BigInt(l2Proposal.bridgedVote.voteFor),
                abstainVotes: BigInt(l2Proposal.bridgedVote.voteAbstain),
              }
            : undefined,
          l2NotBridged: l2Proposal
            ? {
                forVotes:
                  BigInt(l2Proposal.votes.forVotes) - BigInt(l2Proposal.bridgedVote?.voteFor || 0),
                againstVotes:
                  BigInt(l2Proposal.votes.againstVotes) -
                  BigInt(l2Proposal.bridgedVote?.voteAgainst || 0),
                abstainVotes:
                  BigInt(l2Proposal.votes.abstainVotes) -
                  BigInt(l2Proposal.bridgedVote?.voteAbstain || 0),
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
