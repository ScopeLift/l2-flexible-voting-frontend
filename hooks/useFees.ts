import { useConfig } from "@/hooks/useConfig";
import { useContractRead } from "wagmi";
import WormholeSender from "@/abi/WormholeSender.sol/WormholeSender.json";

export const useFees = () => {
  const config = useConfig();
  const {
    data: l1Fees,
    error: l1Error,
    isLoading: l1IsLoading,
  } = useContractRead({
    address: config.l1.erc20Bridge,
    abi: WormholeSender.abi,
    functionName: "quoteDeliveryCost",
    args: [config.l2.wormholeChainId],
    chainId: config.l1.chain.id,
  });

  const {
    data: l2Fees,
    error: l2Error,
    isLoading: l2IsLoading,
  } = useContractRead({
    address: config.l2.tokenAddress,
    abi: WormholeSender.abi,
    functionName: "quoteDeliveryCost",
    args: [config.l1.wormholeChainId],
    chainId: config.l2.chain.id,
  });

  return {
    fees: {
      l1: l1Fees as bigint,
      l2: l2Fees as bigint,
    },
    isLoading: l1IsLoading || l2IsLoading,
    error: l1Error || l2Error,
  };
};
