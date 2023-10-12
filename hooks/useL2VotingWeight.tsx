import { useAccount, useContractRead } from 'wagmi';

import WormholeL2ERC20 from '@/abi/WormholeL2ERC20.sol/WormholeL2ERC20';
import { useConfig } from '@/hooks/useConfig';
import { ZERO_ADDRESS } from '@/util/constants';

type Props = {
  voterAddress?: `0x${string}`;
};

export const useL2VotingWeight = ({ voterAddress }: Props) => {
  let { address } = useAccount();
  if (voterAddress !== undefined) {
    address = voterAddress;
  }
  if (address === undefined) {
    address = ZERO_ADDRESS;
  }
  const { l2 } = useConfig();
  const { data, error, isLoading } = useContractRead({
    address: l2.tokenAddress,
    abi: WormholeL2ERC20.abi,
    functionName: 'getVotes',
    args: [address],
    chainId: l2.chain.id,
  });
  return { data, error, isLoading };
};
