import { useAccount, useContractRead } from 'wagmi';
import { useConfig } from '@/hooks/useConfig';
import { ZERO_ADDRESS } from '@/util/constants';
import { parseAbi } from 'viem';

type Props = Partial<{
  voterAddress?: `0x${string}`;
  target: 'l1' | 'l2';
}>;

export const useL1CurrentVotingWeight = ({ voterAddress }: Props) =>
  useCurrentVotingWeight({ voterAddress, target: 'l1' });

export const useL2CurrentVotingWeight = ({ voterAddress }: Props) =>
  useCurrentVotingWeight({ voterAddress, target: 'l2' });

export const useCurrentVotingWeight = ({ voterAddress, target }: Props) => {
  let { address } = useAccount();
  if (voterAddress !== undefined) {
    address = voterAddress;
  }
  if (address === undefined) {
    address = ZERO_ADDRESS;
  }
  const { l1, l2 } = useConfig();
  const { tokenAddress, chainId } = (function () {
    return target === 'l1'
      ? { tokenAddress: l1.tokenAddress, chainId: l1.chain.id }
      : { tokenAddress: l2.tokenAddress, chainId: l2.chain.id };
  })();
  const { data, error, isLoading } = useContractRead({
    address: tokenAddress,
    abi: parseAbi(['function getVotes(address account) external view returns (uint256)']),
    functionName: 'getVotes',
    args: [address],
    watch: true,
    chainId,
  });
  return { data, error, isLoading };
};
