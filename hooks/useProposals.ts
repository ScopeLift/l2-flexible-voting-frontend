import { PublicClient, useAccount, useContractReads, usePublicClient } from 'wagmi';
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

export const useL1Proposals = () => {
  const { l1 } = useConfig();
  const publicClient = usePublicClient({ chainId: l1.chain.id });
  const { address } = useAccount();
  const fetcher = createFetcher({
    publicClient,
    deployBlock: BigInt(l1.deployBlock),
    address: l1.governor,
  });
  const { data: proposalData, error, isLoading } = useSWR('fetchL1Proposals', fetcher);
  const { data: votingPower } = useContractReads({
    contracts: proposalData?.map((proposal) => {
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
  const data = proposalData?.map((proposal, i) => {
    return {
      tallyLink: `${l1.tallyGovernorDomain}/proposal/${proposal.proposalId}`,
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

export const useL2Proposals = (
  l1Proposals: { proposalId: string; startBlock: string }[] | undefined
) => {
  const { l2 } = useConfig();
  const publicClient = usePublicClient({ chainId: l2.chain.id });
  const { address } = useAccount();
  const fetcher = createFetcher({
    publicClient,
    deployBlock: BigInt(l2.deployBlock),
    address: l2.voteAggregator,
  });
  const { data: proposalData, error, isLoading } = useSWR('fetchL2Proposals', fetcher);
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

export const useProposals = () => {
  const { data: l1Proposals, isLoading: isL1Loading } = useL1Proposals();
  const { data: l2Proposals, isLoading: isL2Loading } = useL2Proposals(l1Proposals);

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
        votingPower: {
          l1: proposal.votingPower,
          l2: l2Proposal?.votingPower,
        },
      };
    })
    .reverse();
  return { data, isLoading: isL1Loading || isL2Loading };
};
