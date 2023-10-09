import { avalancheFuji, polygonMumbai } from "wagmi/chains";

export const chains = [avalancheFuji, polygonMumbai];

const config = {
  l1: {
    chain: avalancheFuji,
    wormholeChainId: 5,
    tokenAddress: "0xeA7448e198B00E0162Cd1238B5a4A561d9e69A3e" as `0x${string}`,
    erc20Bridge: "0x89A40dd9fe5a04735DDDafe555340327889ae0f0" as `0x${string}`,
  },
  l2: {
    chain: polygonMumbai,
    wormholeChainId: 6,
    tokenAddress: "0x32E99074C339d5659C6787EE1E627E4036827725" as `0x${string}`,
  },
};

export default config;
