import * as chains from 'viem/chains';
import { GetWalletClientResult } from '@wagmi/core';
import { Chain, SwitchChainError } from 'viem';

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const truncate = (str: string, n?: number) => {
  if (!n) n = 4;
  return `${str.slice(0, n)}...${str.slice(-n)}`;
};

export const truncateHash = (hash: string, n?: number) => {
  if (!n) n = 4;
  return `${hash.slice(0, n + 2)}...${hash.slice(-n)}`;
};

export const nFormatter = (num: number) => {
  return Intl.NumberFormat('en', { notation: 'compact', maximumSignificantDigits: 2 }).format(num);
};

export const getChain = (chainId: number) => {
  for (const chain of Object.values(chains)) {
    if (chain.id === chainId) {
      return chain as chains.Chain;
    }
  }
  throw new Error(`no chain found at chainId ${chainId}`);
};

export const getBlockExplorerUrl = (txHash: `0x${string}`, chainId: number) => {
  const chain = getChain(chainId);
  const networkPrefix = chain.blockExplorers?.default.url;
  if (!networkPrefix) return undefined;
  return `${networkPrefix}/tx/${txHash}`;
};

export const switchChain = async (walletClient: GetWalletClientResult, chain: Chain) => {
  try {
    await walletClient?.switchChain({ id: chain.id });
  } catch (e) {
    if (e instanceof SwitchChainError) {
      console.error('Wallet does not have target chain, adding now... ', { e });
      try {
        await walletClient?.addChain({ chain: chain });
      } catch (e) {
        console.error(e);
      }
    }
  }
};
