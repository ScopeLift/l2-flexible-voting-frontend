import { goerli, optimismGoerli } from 'wagmi/chains';

export const chains = [goerli, optimismGoerli];

export enum DaoId {
  Example = 1,
  ExampleComp = 2,
}

export const config = {
  [DaoId.Example]: {
    name: 'Example Governor',
    showDebug: true,
    l1: {
      chain: goerli,
      wormholeChainId: 2,
      tokenAddress: '0x10d1B06c702F24B8d1fF6d2Bec57Ae4fC62b7A86' as `0x${string}`,
      erc20Bridge: '0xD217A95FdEaD17eE0C80361E1eb2601131F3Da9A' as `0x${string}`,
			governor: '0xF93BaC2e1a0f355Cd4fC4C9175eA56FF32532546' as `0x${string}`,
			metadataBridge: '0x480fC82eD089193486ad2Ac860393A3Eb11c93A9' as `0x${string}`,
    },
    l2: {
      chain: optimismGoerli,
      wormholeChainId: 24,
      tokenAddress: '0xaF2E86479a6181A30F411c35eF946Ff22b15b2dc' as `0x${string}`,
			voteAggregator: '0x74f00907CFC6E44Fb72535cdD1eC52a37EacAbE4' as `0x${string}`,
      logoUri:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
  },
 [DaoId.ExampleComp]: {
    name: 'Example Governor Comp',
    showDebug: true,
    l1: {
      chain: goerli,
      wormholeChainId: 2,
      tokenAddress: '0x449FdC2D5038E0447801025e8Eb47DD8b68a7B90' as `0x${string}`,
      erc20Bridge: '0x46A5D1C7c2eF4d276562DB6f504b25bD88CfeeD2' as `0x${string}`,
			governor: '0xA4c74075770582ad5873E3d9e288f7877BD90c85' as `0x${string}`,
			metadataBridge: '0x49F8948E4455Eb1d8D3964a9DC17f831C12B0893' as `0x${string}`,
    },
    l2: {
      chain: optimismGoerli,
      wormholeChainId: 24,
      tokenAddress: '0x08841d6c288EE8b2f25b58469492CF65701d0414' as `0x${string}`,
			voteAggregator: '0x5C9B57f9886604899760D7C0eC812666b7d007dd' as `0x${string}`,
      logoUri:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
  },

};
