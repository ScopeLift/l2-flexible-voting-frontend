import {config, DaoId} from "@/config";

export const useConfig = () => {
  return config[DaoId.Example];
};
