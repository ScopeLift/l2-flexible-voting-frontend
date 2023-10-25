import { useAccount, useContractRead } from 'wagmi';

import { useConfig } from '@/hooks/useConfig';
import { ZERO_ADDRESS } from '@/util/constants';
import { parseAbi } from 'viem';

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
    abi: parseAbi(['function delegates(address) public view returns (address)']),
    functionName: 'delegates',
    args: [address],
    chainId: l2.chain.id,
  });
  return { data, error, isLoading };
};
