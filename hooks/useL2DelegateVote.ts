import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import { parseAbi } from 'viem';
import { useConfig } from '@/hooks/useConfig';

type Props = {
  delegateAddress: `0x${string}`;
};

export const useL2DelegateVote = ({ delegateAddress }: Props) => {
  const { l2 } = useConfig();
  const { config, error: prepareError } = usePrepareContractWrite({
    address: l2.tokenAddress,
    abi: parseAbi(['function delegate(address) public']),
    functionName: 'delegate',
    args: [delegateAddress],
    chainId: l2.chain.id,
  });
  const { data, isLoading, isSuccess, error: writeError, write } = useContractWrite(config);

  return {
    data,
    isLoading,
    isSuccess,
    write,
    error: writeError || prepareError,
  };
};
