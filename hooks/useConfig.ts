import { useRouter } from 'next/router';
import { config, DaoId } from '@/config';

export const useConfig = () => {
  const { query } = useRouter();
  if (Array.isArray(query.id)) {
    throw new Error('Too many ids have been specified');
  }
  if (!query.id || !(query.id in config)) {
    return config[DaoId.PoolTogether];
  }
  return config[query.id as DaoId];
};
