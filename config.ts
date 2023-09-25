import { avalancheFuji, polygonMumbai } from "wagmi/chains";

export const chains = [avalancheFuji, polygonMumbai];

type ConfigEntries = Record<
  string,
  {
    chain: any;
    wormholeChainId: number;
    tokenAddress: `0x${string}`;
    [key: string]: any;
  }
>;

const config: ConfigEntries = {
  l1: {
    chain: polygonMumbai,
    wormholeChainId: 5,
    tokenAddress: "0x40BC416D955696ea3e8ed1BD7ba83981a0e9c8D0",
    erc20Bridge: "0x3a8Af12BB731925A9a0b31C266787FAaa8076bA5",
  },
  l2: {
    chain: avalancheFuji,
    wormholeChainId: 6,
    tokenAddress: "0x3876489eEc6e5ACDC7c1F9718648F61FD342B64f",
  },
};

export default config;
