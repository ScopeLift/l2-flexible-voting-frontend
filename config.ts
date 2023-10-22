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
      tokenAddress: '0xc7df884825f10bcA8043BBb88b8477D4Cd33Fba0' as `0x${string}`,
      erc20Bridge: '0x8D5B3952A5F7Bd51714271Ec92379855595D9DE5' as `0x${string}`,
			governor: '0xBDEc5BBD2a1c9Ef75e77b61738258D6dD7d846C0' as `0x${string}`,
			metadataBridge: '0x42D6dDb7EE20D48A0bD678B333D516052b1747D2' as `0x${string}`,
    },
    l2: {
      chain: optimismGoerli,
      wormholeChainId: 24,
      tokenAddress: '0x28c3C9A98c91f1D33FA65E8591b2c9024F26FbD1' as `0x${string}`,
			voteAggregator: '0xbE51ED9444CECD4cef070E13F6fe03E38dE49Bb2' as `0x${string}`,
      logoUri:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
  },

};
