import { goerli, optimismGoerli } from 'wagmi/chains';

export const chains = [goerli, optimismGoerli];

export enum DaoId {
  PoolTogether = 1,
  Gitcoin = 2,
}

export const config = {
  [DaoId.PoolTogether]: {
    name: 'PoolTogether',
    id: DaoId.PoolTogether,
    showDebug: true,
    daoLogo: '/pooltogetherLogo.svg',
    l1: {
      chain: goerli,
      chainLogo: '/eth.svg',
      wormholeChainId: 2,
      deployBlock: 10018232n,
      tokenAddress: '0x4e884991629b61FDaE72F1d3cea05FCAB1eabD8B' as `0x${string}`,
      tokenDecimals: 18,
      tokenLogo: '/pooltogetherLogo.svg',
      erc20Bridge: '0xCBF2B7E2B9667001eF3A490A8B539c30cC12069a' as `0x${string}`,
      governor: '0x71063A9F739d4b31Bc7763fF7b5A7FccB0B7d5C5' as `0x${string}`,
      metadataBridge: '0x5F2d38Dd928887978600D9Ec7C2734E1764583FD' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/l2-flexible-voting-l1-comp-example-7',
    },
    l2: {
      chain: optimismGoerli,
      chainLogo: '/optimism.svg',
      wormholeChainId: 24,
      deployBlock: 17089678n,
      tokenAddress: '0x8f536d795467F3f175CA60fa72c915D81A7DCCE0' as `0x${string}`,
      tokenDecimals: 18,
      tokenLogo: '/pooltogetherLogo.svg',
      voteAggregator: '0x1a3e5624769c3dc9106347a239523e4a08d85c38' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/l2-flexible-voting-l2-comp-example-7',
    },
  },
  [DaoId.Gitcoin]: {
    name: 'Gitcoin',
    id: DaoId.Gitcoin,
    showDebug: true,
    daoLogo: '/gitcoinLogo.svg',
    l1: {
      chain: goerli,
      chainLogo: '/eth.svg',
      wormholeChainId: 2,
      deployBlock: 10018221n,
      tokenAddress: '0xa932dB6cde9e199fbB51605f9A1018f17c5bC83F' as `0x${string}`,
      tokenDecimals: 18,
      tokenLogo: '/gitcoinLogo.svg',
      erc20Bridge: '0x57D8Eca9c214f4A8DC2942436677CA43DF3DF766' as `0x${string}`,
      governor: '0x6A692454F33BfC6A6865A77d0dB947a84eF56C8b' as `0x${string}`,
      metadataBridge: '0xAFfFD04c7efC4813D88eb87A80a05BF257Fad5E8' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/l2-flexible-voting-l1-comp-example-8',
    },
    l2: {
      chain: optimismGoerli,
      chainLogo: '/optimism.svg',
      wormholeChainId: 24,
      deployBlock: 17089678n,
      tokenAddress: '0x81FEFc05c301aBBac2950999d62F83dC092602af' as `0x${string}`,
      tokenDecimals: 18,
      tokenLogo: '/gitcoinLogo.svg',
      voteAggregator: '0x2F1b74BA040001C18f6eE50F4bc999db984389E7' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/l2-flexible-voting-l2-comp-example-8',
    },
  },
};
