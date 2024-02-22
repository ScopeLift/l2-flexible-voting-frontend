import { sepolia, optimismSepolia, mainnet } from 'wagmi/chains';

export const chains = [sepolia, optimismSepolia, mainnet];

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
      chain: sepolia,
      chainLogo: '/eth.svg',
      wormholeChainId: 10002,
      deployBlock: 5336521n,
      tokenAddress: '0x742c206127Da6Eab076C720Bc5F03A4D2E7FCDD6' as `0x${string}`,
      tokenLogo: '/pooltogetherLogo.svg',
      erc20Bridge: '0xB9A557BAAB14542ef549d3B0Be3C60842a79D40F' as `0x${string}`,
      governor: '0x13F7dCcBFa3E17c9063eCFF7299BfbCB738E6AF8' as `0x${string}`,
      metadataBridge: '0xfAF65Dd6DE96cf56425D023d1e3b8143fe8693ea' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/pooltogether-test',
    },
    l2: {
      chain: optimismSepolia,
      chainLogo: '/optimism.svg',
      wormholeChainId: 10005,
      deployBlock: 8373201n,
      tokenAddress: '0x44fa8E6588e7a9ad869837d09621Cc663539D753' as `0x${string}`,
      tokenLogo: '/pooltogetherLogo.svg',
      voteAggregator: '0x56d441A772f9F6C0d5B3e137aAAC030aE04Cb2a3' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/pooltogether-l2-test',
    },
  },
  [DaoId.Gitcoin]: {
    name: 'Gitcoin',
    id: DaoId.Gitcoin,
    showDebug: true,
    daoLogo: '/gitcoinLogo.svg',
    l1: {
      chain: sepolia,
      chainLogo: '/eth.svg',
      wormholeChainId: 10002,
      deployBlock: 5336521n,
      tokenAddress: '0x4B9a1CD6566Df9FF3d0555B4a159Ca0a252D0Fce' as `0x${string}`,
      tokenLogo: '/gitcoinLogo.svg',
      erc20Bridge: '0x202868591857A7AD3B01C8a586C0cBf6B802d97A' as `0x${string}`,
      governor: '0x6254c468849548Cf79898347AA4db0c046F10a86' as `0x${string}`,
      metadataBridge: '0x59F57536ecD85BB724dfE6C9Dc55d96b44Fdb958' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/gitcoin-test',
    },
    l2: {
      chain: optimismSepolia,
      chainLogo: '/optimism.svg',
      wormholeChainId: 10005,
      deployBlock: 8373201n,
      tokenAddress: '0x8ea1Cec74fA7CDdfE8056198ef1A3718aDae2895' as `0x${string}`,
      tokenLogo: '/gitcoinLogo.svg',
      voteAggregator: '0xe3264ff0A8c44ab58eaCD63F2F57c1EeB9E13762' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/gitcoin-l2-test',
    },
  },
};
