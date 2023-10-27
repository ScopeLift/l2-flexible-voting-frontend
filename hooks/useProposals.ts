import { PublicClient, usePublicClient } from 'wagmi';
import { parseAbiItem } from 'viem';
import { useConfig } from '@/hooks/useConfig';
import useSWR from 'swr';

export type Proposal = {
  id: string;
  description: string;
  isBridged: boolean;
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
    const canceledLogs = await publicClient.getLogs({
      address,
      event: parseAbiItem('event ProposalCanceled(uint256 proposalId)'),
      fromBlock: deployBlock,
    });
    console.log(canceledLogs);
    const canceledProposals = new Map();
    for (const canceledProposal of canceledLogs) {
      canceledProposals.set(canceledProposal.args, true);
    }
    console.log(createdLogs);
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
        const [againstVotes, forVotes, abstainVotes] = await getProposalVotes(BigInt(proposalId));

        return {
          proposalId,
          startBlock: args[6]?.toString() || '0',
          endBlock: args[7]?.toString() || '0',
          description: args[8]?.toString() || '',
          isCancelled: Boolean(canceledProposals.get(args[0])),
          votingPower: 0,
          votes: { againstVotes, forVotes, abstainVotes },
        };
      })
    );
  };

export const useL2Proposals = () => {
  const { l2 } = useConfig();
  const publicClient = usePublicClient({ chainId: l2.chain.id });
  const fetcher = createFetcher({
    publicClient,
    deployBlock: BigInt(l2.deployBlock),
    address: l2.voteAggregator,
  });
  const { data: proposalData, error, isLoading } = useSWR('fetchL2Proposals', fetcher);
  const data = proposalData?.map((proposal) => {
    return {
      tallyLink: `${l2.tallyGovernorDomain}/proposal/${proposal.proposalId}`,
      ...proposal,
    };
  });
  return {
    data,
    isLoading,
    error,
  };
};

export const useL1Proposals = () => {
  const { l1 } = useConfig();
  const publicClient = usePublicClient({ chainId: l1.chain.id });
  const fetcher = createFetcher({
    publicClient,
    deployBlock: BigInt(l1.deployBlock),
    address: l1.governor,
  });
  const { data: proposalData, error, isLoading } = useSWR('fetchL1Proposals', fetcher);
  const data = proposalData?.map((proposal) => {
    return {
      tallyLink: `${l1.tallyGovernorDomain}/proposal/${proposal.proposalId}`,
      ...proposal,
    };
  });
  return {
    data,
    isLoading,
    error,
  };
};

export const useProposals = () => {
  const { data: l1Proposals, isLoading: isL1Loading } = useL1Proposals();
  const { data: l2Proposals, isLoading: isL2Loading } = useL2Proposals();

  console.log(l1Proposals);
  console.log(l2Proposals);

  const data: Proposal[] | undefined = l1Proposals
    ?.map((proposal) => {
      const l2Proposal = l2Proposals?.find(
        (l2Proposal) => l2Proposal.proposalId === proposal.proposalId
      );
      return {
        id: proposal.proposalId,
        description: proposal.description,
        isBridged: Boolean(l2Proposal),
        status: {
          l1: proposal.isCancelled ? 'cancelled' : 'open',
          l2: l2Proposal?.isCancelled ? 'cancelled' : 'open',
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
        },
      };
    })
    .reverse();
  return { data, isLoading: isL1Loading || isL2Loading };
};
