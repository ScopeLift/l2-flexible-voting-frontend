import { useContractReads } from 'wagmi';
import { useConfig } from '@/hooks/useConfig';
import { parseAbi } from 'viem';
import { useCallback } from 'react';

const abi = parseAbi([
  'function name() public view returns (string)',
  'function decimals() public view returns (uint8)',
  'function symbol() public view returns (string)',
]);

export const useTokenInfo = () => {
  const { l1, l2 } = useConfig();

  const l1TokenContract = {
    chainId: l1.chain.id,
    address: l1.tokenAddress,
    abi,
  };

  const l2TokenContract = {
    chainId: l2.chain.id,
    address: l2.tokenAddress,
    abi,
  };

  const contracts = [
    {
      ...l1TokenContract,
      functionName: 'name',
    },
    {
      ...l1TokenContract,
      functionName: 'decimals',
    },
    {
      ...l1TokenContract,
      functionName: 'symbol',
    },
    {
      ...l2TokenContract,
      functionName: 'name',
    },
    {
      ...l2TokenContract,
      functionName: 'decimals',
    },
    {
      ...l2TokenContract,
      functionName: 'symbol',
    },
  ];

  const { data, error, isLoading } = useContractReads({
    contracts,
    watch: false,
  });

  return {
    data: {
      l1: {
        name: (data?.[0].result || 'L1 token') as string,
        decimals: (data?.[1].result || 18) as number,
        symbol: (data?.[2].result || 'Token') as string,
      },
      l2: {
        name: (data?.[3].result || 'L2 Token') as string,
        decimals: (data?.[4].result || 18) as number,
        symbol: (data?.[5].result || 'Token') as string,
      },
    },
    error,
    isLoading,
  };
};
