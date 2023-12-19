import { useBlockNumber, PublicClient, useAccount, useContractReads, usePublicClient } from 'wagmi';
import { parseAbiItem } from 'viem';
import { useConfig } from '@/hooks/useConfig';
import useSWR from 'swr';

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

export const useL1Proposals = ({ fetchSize, offset }: { fetchSize: number; offset: number }) => {
  const { l1 } = useConfig();
  const { address } = useAccount();

  // Page size should be dynamic
  const {
    data: queryData,
    isLoading,
    error,
  } = useProposalsQuery(
    { endpoint: GOVERNOR_SUBGRAPH_URL },
    { pageSize: fetchSize, governor: l1.governor, offset: offset }
  );

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
    const vote = proposalVoteData?.[i]?.result as [bigint, bigint, bigint] | undefined;
    return {
      status: proposalState?.[i].result as number,
      votes: {
        againstVotes: (vote?.[0] as bigint) || BigInt(0),
        forVotes: vote?.[1] || BigInt(0),
        abstainVotes: vote?.[2] || BigInt(0),
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

export const useL2Proposals = (
  l1Proposals: { proposalId: string; startBlock: string }[] | undefined
) => {
  const { l2, l1 } = useConfig();
  const { address } = useAccount();
  const {
    data: queryData,
    isLoading,
    error,
  } = useL2ProposalsQuery(
    { endpoint: AGGREGATOR_SUBGRAPH_URL },
    {
      pageSize: l1Proposals?.length || 0,
      governor: l2.voteAggregator,
      offset: 0,
      proposalIds: l1Proposals?.map((proposal) => proposal.proposalId) || [],
    }
  );

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

export const useProposals = ({ fetchSize, offset }: { fetchSize: number; offset: number }) => {
  const { data: l1Proposals, isLoading: isL1Loading } = useL1Proposals({ fetchSize, offset });
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
        !l2Proposal?.canceled && l2ProposalsState?.length && l2ProposalState
          ? statusLabel(l2ProposalState as number)
          : 'closed';
      return {
        id: proposal.proposalId,
        description: proposal.description,
        isBridged: Boolean(l2Proposal),
        createdBlock: proposal.blockNumber as bigint,
        createdTimestamp: proposal.blockTimestamp as bigint,
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
                againstVotes: l2Proposal.bridgedVote.voteAgainst,
                forVotes: l2Proposal.bridgedVote.voteFor,
                abstainVotes: l2Proposal.bridgedVote.voteAbstain,
              }
            : undefined,
          l2NotBridged: l2Proposal
            ? {
                forVotes:
                  l2Proposal.votes.forVotes - (l2Proposal.bridgedVote?.voteFor || BigInt(0)),
                againstVotes:
                  l2Proposal.votes.againstVotes -
                  (l2Proposal.bridgedVote?.voteAgainst || BigInt(0)),
                abstainVotes:
                  l2Proposal.votes.abstainVotes -
                  (l2Proposal.bridgedVote?.voteAbstain || BigInt(0)),
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
