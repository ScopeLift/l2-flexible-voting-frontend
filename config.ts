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
      tokenAddress: '0xa9a93AbD0B94f1525f703Af52286a6Ed74aB5C2e' as `0x${string}`,
      erc20Bridge: '0x1A6714A6076a35bBda7cc8F629346c717347c5C3' as `0x${string}`,
    },
    l2: {
      chain: optimismGoerli,
      wormholeChainId: 24,
      tokenAddress: '0x78d97A5dEBd08f70883449cFaE85f6779a5663b9' as `0x${string}`,
      logoUri:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
  },
};
