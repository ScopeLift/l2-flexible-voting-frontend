import useSWR from 'swr';
import { useAccount, usePublicClient } from 'wagmi';
import { parseAbiItem } from 'viem';
import { useConfig } from '@/hooks/useConfig';

type Props = {
  proposalId: string;
};

export const useL1ProposalMetadataBridged = ({ proposalId }: Props) => {
  const { l1 } = useConfig();
  const publicClient = usePublicClient({ chainId: l1.chain.id });
  const fetcher = async () => {
    // Make these concurrent
    const logs = await publicClient.getLogs({
      address: l1.metadataBridge,
      event: parseAbiItem(
        'event ProposalMetadataBridged(uint16 indexed targetChain, address indexed targetGovernor, uint256 indexed proposalId, uint256 voteStart, uint256 voteEnd, bool isCanceled)'
      ),
      args: {
        proposalId: BigInt(proposalId),
      },
      fromBlock: l1.deployBlock,
      strict: true,
    });
    console.log('Logs of proposal bridged');
    console.log(BigInt(proposalId).toString(16));
    console.log(logs);
    return logs.length > 0 ? logs[0] : null;
  };
  const { data, error, isLoading } = useSWR(
    `fetchL1ProposalMetadataBridged-${proposalId}`,
    fetcher
  );
  return {
    data,
    isLoading,
    error,
  };
};
