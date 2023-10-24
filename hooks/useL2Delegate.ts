import { useAccount, useContractRead } from 'wagmi';

import WormholeL2ERC20 from '@/abi/WormholeL2ERC20.sol/WormholeL2ERC20';
import { useConfig } from '@/hooks/useConfig';
import { ZERO_ADDRESS } from '@/util/constants';

type Props = {
  delegatorAddress?: `0x${string}`;
};

export const useL2Delegate = ({ delegatorAddress }: Props) => {
  let { address } = useAccount();
  if (delegatorAddress !== undefined) {
    address = delegatorAddress;
  }
  if (address === undefined) {
    address = ZERO_ADDRESS;
  }
  const { l2 } = useConfig();
  const { data, error, isLoading } = useContractRead({
    address: l2.tokenAddress,
    abi: WormholeL2ERC20.abi,
    functionName: 'delegates',
    args: [address],
    chainId: l2.chain.id,
  });
  return { data, error, isLoading };
};
