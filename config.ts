import { goerli, optimismGoerli } from "wagmi/chains";

export const chains = [goerli, optimismGoerli];

const config = {
  l1: {
    chain: goerli,
    wormholeChainId: 2,
    tokenAddress: "0x02CD4A674A29973911D5D291b14caB75b267062c" as `0x${string}`,
    erc20Bridge: "0x127b4cB434E2bFA5e67B8b7fAd15662972597eb3" as `0x${string}`,
  },
  l2: {
    chain: optimismGoerli,
    wormholeChainId: 24,
    tokenAddress: "0x74975D71A63D0d955160E38bf427dA7f3b030888" as `0x${string}`,
  },
  showDebug: true,
};

export default config;
