import { useAccount, useContractRead } from 'wagmi';
import { useConfig } from '@/hooks/useConfig';
import { ZERO_ADDRESS } from '@/util/constants';
import { parseAbi } from 'viem';

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
    abi: parseAbi(['function getVotes(address account) external view returns (uint256)']),
    functionName: 'getVotes',
    args: [address],
    chainId: l2.chain.id,
  });
  return { data, error, isLoading };
};
