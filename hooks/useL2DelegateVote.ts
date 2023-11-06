import { parseAbi } from 'viem';
import { useConfig } from '@/hooks/useConfig';
import { useEasyWrite } from '@/hooks/useEasyWrite';

type Props = {
  delegateAddress: `0x${string}`;
};

export const useL2DelegateVote = ({ delegateAddress }: Props) => {
  const { l2 } = useConfig();

  const { data, error, isLoading, write } = useEasyWrite({
    address: l2.tokenAddress,
    abi: parseAbi(['function delegate(address) public']),
    functionName: 'delegate',
    args: [delegateAddress],
    chainId: l2.chain.id,
  });

  return {
    data,
    isLoading,
    write,
    error,
  };
};
