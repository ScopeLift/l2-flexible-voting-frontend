import { useRouter } from 'next/router';
import { config, DaoId } from '@/config';

export const useConfig = () => {
  const {query } = useRouter();
	if (Array.isArray(query.id)) {
		throw new Error("Too many ids have been specified")
	}
	// TODO: how do we handle if this is empty
	if (Number(query?.id) === DaoId.Example) {
   return config[DaoId.Example];
	}	else if (Number(query?.id) === DaoId.ExampleComp) {
   return config[DaoId.ExampleComp];
	}
	// Maybe return an empty config
  return config[DaoId.Example];
};
