import { useRouter } from 'next/router';
import { config, DaoId } from '@/config';

export const useConfig = () => {
  const { query } = useRouter();
  if (Array.isArray(query.id)) {
    throw new Error('Too many ids have been specified');
  }
  if (Number(query?.id) === DaoId.Example) {
    return config[DaoId.Example];
  } else if (Number(query?.id) === DaoId.ExampleComp) {
    return config[DaoId.ExampleComp];
  }
  return config[DaoId.Example];
};
