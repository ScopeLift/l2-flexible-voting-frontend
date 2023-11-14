import { useRouter } from 'next/router';
import { config, DaoId } from '@/config';

export const useConfig = () => {
  const { query } = useRouter();
  if (Array.isArray(query.id)) {
    throw new Error('Too many ids have been specified');
  }
  if (Number(query?.id) === DaoId.PoolTogether) {
    return config[DaoId.PoolTogether];
  } else if (Number(query?.id) === DaoId.Gitcoin) {
    return config[DaoId.Gitcoin];
  }
  return config[DaoId.PoolTogether];
};
