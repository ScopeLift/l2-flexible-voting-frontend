import { useBalance, useAccount } from "wagmi";
import { useConfig } from "@/hooks/useConfig";

export const useBalances = () => {
  const { address } = useAccount();
  const { l1, l2 } = useConfig();
  const l1Eth = useBalance({
    address,
    chainId: l1.chain.id,
  });
  const l2Eth = useBalance({
    address,
    chainId: l2.chain.id,
  });
  const l1Token = useBalance({
    address,
    chainId: l1.chain.id,
    token: l1.tokenAddress,
  });
  const l2Token = useBalance({
    address,
    chainId: l2.chain.id,
    token: l2.tokenAddress,
  });

  return {
    l1: {
      eth: l1Eth.data,
      token: l1Token.data,
    },
    l2: {
      eth: l2Eth.data,
      token: l2Token.data,
    },
    isLoading:
      l1Eth.isLoading ||
      l2Eth.isLoading ||
      l1Token.isLoading ||
      l2Token.isLoading,
    error: l1Eth.error || l2Eth.error || l1Token.error || l2Token.error,
  };
};
