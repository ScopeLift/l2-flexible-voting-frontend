import { goerli, optimismGoerli } from 'wagmi/chains';

export const chains = [goerli, optimismGoerli];

export enum DaoId {
  Example = 1,
  ExampleComp = 2,
}

export const config = {
  [DaoId.Example]: {
    name: 'Example',
    id: DaoId.Example,
    showDebug: true,
    daoLogo: '/pooltogetherLogo.svg',
    l1: {
      chain: goerli,
      wormholeChainId: 2,
      deployBlock: 9885079n,
      tokenAddress: '0xEc682511c302386F29AAE0ed5F20e6770FF2c985' as `0x${string}`,
      tokenDecimals: 18,
      erc20Bridge: '0x1a3e5624769c3dc9106347a239523e4a08d85c38' as `0x${string}`,
      governor: '0x0a5571f9E5779d0534938ed2060631dAC4F07b32' as `0x${string}`,
      metadataBridge: '0x27e445be20889f0e6ddd30372842e6c183d3648b' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/l2-flexible-voting-l1-example-6',
    },
    l2: {
      chain: optimismGoerli,
      wormholeChainId: 24,
      deployBlock: 16154713n,
      tokenAddress: '0x12272085eEfBd3585617Bd5Ae7A2C2942444ADFa' as `0x${string}`,
      tokenDecimals: 18,
      voteAggregator: '0xe1c385E394bCCc5F6D9E6a9E22F0B5668724c726' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/l2-flexible-voting-l2-example-6',
      logoUri:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
  },
  [DaoId.ExampleComp]: {
    name: 'Example Comp',
    showDebug: true,
    id: DaoId.ExampleComp,
    daoLogo: '/gitcoinLogo.svg',
    l1: {
      chain: goerli,
      wormholeChainId: 2,
      deployBlock: 9895307n,
      tokenAddress: '0x449FdC2D5038E0447801025e8Eb47DD8b68a7B90' as `0x${string}`,
      tokenDecimals: 18,
      erc20Bridge: '0x46A5D1C7c2eF4d276562DB6f504b25bD88CfeeD2' as `0x${string}`,
      governor: '0xA4c74075770582ad5873E3d9e288f7877BD90c85' as `0x${string}`,
      metadataBridge: '0x49F8948E4455Eb1d8D3964a9DC17f831C12B0893' as `0x${string}`,
      tallyGovernorDomain: 'https://www.tally.xyz/gov/l2-flexible-voting-l1-comp-example-6',
      logoUri: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'  
    },
    l2: {
      chain: optimismGoerli,
      wormholeChainId: 24,
      deployBlock: 16325609,
      tokenAddress: '0x08841d6c288EE8b2f25b58469492CF65701d0414' as `0x${string}`,
      tokenDecimals: 18,
      voteAggregator: '0x5C9B57f9886604899760D7C0eC812666b7d007dd' as `0x${string}`,
      tallyGovernorDomain: 'https://tally.xyz/gov/l2-flexible-voting-l2-comp-example-6',
      logoUri:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
  },
};
