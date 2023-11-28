import { goerli, optimismGoerli, mainnet } from 'wagmi/chains';

export const chains = [goerli, optimismGoerli, mainnet];

export enum DaoId {
  PoolTogether = 'pool-together',
  Gitcoin = 'gitcoin',
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
      tokenAddress: '0x3bc0439198851B9896862D09a2562CF5F83E94D4' as `0x${string}`,
      tokenLogo: '/pooltogetherLogo.svg',
      erc20Bridge: '0x1B66c6EBec3E33e6fBe9b2559d1B591E5C364690' as `0x${string}`,
      governor: '0xDB4e3F34bb3eba8FD3FcFAbC89E58CF4005AF367' as `0x${string}`,
      metadataBridge: '0x1e27F602A252201694FE33e86716fc305C2E5d1e' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/pooltogether-test',
    },
    l2: {
      chain: optimismGoerli,
      chainLogo: '/optimism.svg',
      wormholeChainId: 24,
      deployBlock: 17089678n,
      tokenAddress: '0xf0A2270262CF869a4efD741AbB994095C18FFB50' as `0x${string}`,
      tokenLogo: '/pooltogetherLogo.svg',
      voteAggregator: '0xc3a6866DF38DbACD217ac44E2383164400978A29' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/pooltogether-l2-test',
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
      tokenAddress: '0xC351f3d4B2B16C1BbE6ae2d445e5D0969b5963F8' as `0x${string}`,
      tokenLogo: '/gitcoinLogo.svg',
      erc20Bridge: '0xba8eF445Cf1c49Ed0af23d121068e28EF21a4e0A' as `0x${string}`,
      governor: '0xbEF87C8665F2F7C413b9781EFC5b7f1852B68D2e' as `0x${string}`,
      metadataBridge: '0x82a384E292C4A8CaF691E83b6D65ce1492267048' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/gitcoin-test',
    },
    l2: {
      chain: optimismGoerli,
      chainLogo: '/optimism.svg',
      wormholeChainId: 24,
      deployBlock: 17089678n,
      tokenAddress: '0x78d148B627636392CA2AAf5094f3B2DeB7E0826F' as `0x${string}`,
      tokenLogo: '/gitcoinLogo.svg',
      voteAggregator: '0x4b56814a4A5b38De8406F3E04F5b39628658cD1B' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/gitcoin-l2-test',
    },
  },
};
