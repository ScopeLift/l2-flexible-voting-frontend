import { isHex } from 'viem';
import * as chains from 'viem/chains';

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

export const getChain = (chainId: number) => {
  for (const chain of Object.values(chains)) {
    if (chain.id === chainId) {
      return chain;
    }
  }
  throw new Error(`no chain found at chainId ${chainId}`);
};

export const getEtherscanUrl = (txHashOrAddress: string, chainId: number) => {
  const group = isHex(txHashOrAddress) ? (txHashOrAddress.length === 42 ? 'address' : 'tx') : 'ens';
  const chain = getChain(chainId);
  const networkPrefix =
    'blockExplorers' in chain ? chain.blockExplorers.default.url : 'https://etherscan.io';
  if (group === 'ens') {
    return `${networkPrefix}/enslookup-search?search=${txHashOrAddress}`;
  } else {
    return `${networkPrefix}/${group}/${txHashOrAddress}`;
  }
};
