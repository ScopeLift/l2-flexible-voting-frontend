import WormholeL2ERC20 from '@/abi/WormholeL2ERC20.sol/WormholeL2ERC20';
import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import { useConfig } from '@/hooks/useConfig';

type Props = {
  delegateAddress: `0x${string}`;
};

export const useL2DelegateVote = ({ delegateAddress }: Props) => {
  const { l2 } = useConfig();
  const { config, error: prepareError } = usePrepareContractWrite({
    address: l2.tokenAddress,
    abi: WormholeL2ERC20.abi,
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
