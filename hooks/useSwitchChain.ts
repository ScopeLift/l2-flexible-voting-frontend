import { GetWalletClientResult } from '@wagmi/core';
import { Chain, SwitchChainError } from 'viem';

export const useSwitchChain = async (walletClient: GetWalletClientResult, chain: Chain) => {
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
