import { normalize } from 'viem/ens';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

export const getEnsAddress = async (name: string) => {
  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });
  try {
    const ensAddress = await client.getEnsAddress({
      name: normalize(name),
    });
    return ensAddress;
  } catch (e) {
    const err = e as Error;
    console.error(err.message);
  }
  return null;
};
