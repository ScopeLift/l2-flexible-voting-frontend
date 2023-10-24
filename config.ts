import { goerli, optimismGoerli } from 'wagmi/chains';

export const chains = [goerli, optimismGoerli];

export enum DaoId {
  Example = 1,
}

export const config = {
  [DaoId.Example]: {
    name: 'Example Governor',
    showDebug: true,
    l1: {
      chain: goerli,
      wormholeChainId: 2,
      tokenAddress: '0x10d1B06c702F24B8d1fF6d2Bec57Ae4fC62b7A86 ' as `0x${string}`,
      erc20Bridge: '0xD217A95FdEaD17eE0C80361E1eb2601131F3Da9A' as `0x${string}`,
    },
    l2: {
      chain: optimismGoerli,
      wormholeChainId: 24,
      tokenAddress: '0xaF2E86479a6181A30F411c35eF946Ff22b15b2dc' as `0x${string}`,
      logoUri:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
  },
};
