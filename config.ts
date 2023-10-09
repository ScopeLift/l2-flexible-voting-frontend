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

// Values were pulled from https://github.com/ScopeLift/l2-flexible-voting/blob/a0dd222ddf059e322ca4441e0cefc6c21efe89e1/broadcast/multi/WormholeL2FlexibleVotingDeploy.s.sol-1695928650/run.json
const config: ConfigEntries = {
  l1: {
    chain:  avalancheFuji,
    wormholeChainId: 5,
    tokenAddress: "0xeA7448e198B00E0162Cd1238B5a4A561d9e69A3e",
    erc20Bridge: "0x89A40dd9fe5a04735DDDafe555340327889ae0f0",
  },
  l2: {
    chain:  polygonMumbai,
    wormholeChainId: 6,
    tokenAddress: "0x32E99074C339d5659C6787EE1E627E4036827725",
  },
};

export default config;
