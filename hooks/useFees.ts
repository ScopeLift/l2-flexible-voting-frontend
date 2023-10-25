import { useConfig } from '@/hooks/useConfig';
import { parseAbi } from 'viem';
import { useContractRead } from 'wagmi';

const wormholeSenderAbi = parseAbi(['function quoteDeliveryCost(uint16) view returns (uint256)']);

export const useFees = () => {
  const config = useConfig();
  const {
    data: l1Fees,
    error: l1Error,
    isLoading: l1IsLoading,
  } = useContractRead({
    address: config.l1.erc20Bridge,
    abi: wormholeSenderAbi,
    functionName: 'quoteDeliveryCost',
    args: [config.l2.wormholeChainId],
    chainId: config.l1.chain.id,
  });

  const {
    data: l2Fees,
    error: l2Error,
    isLoading: l2IsLoading,
  } = useContractRead({
    address: config.l2.tokenAddress,
    abi: wormholeSenderAbi,
    functionName: 'quoteDeliveryCost',
    args: [config.l1.wormholeChainId],
    chainId: config.l2.chain.id,
  });

  return {
    fees: {
      l1: l1Fees,
      l2: l2Fees,
    },
    isLoading: l1IsLoading || l2IsLoading,
    error: l1Error || l2Error,
  };
};
