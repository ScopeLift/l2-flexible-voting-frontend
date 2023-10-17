import { usePrepareContractWrite, useContractWrite } from "wagmi";

export const useEasyWrite = (
  params: Parameters<typeof usePrepareContractWrite>[0]
) => {
  const {
    config,
    error: prepareError,
    isLoading: prepareIsLoading,
  } = usePrepareContractWrite(params);
  const {
    data,
    error: writeError,
    isLoading: writeIsLoading,
    write,
  } = useContractWrite(config);
  const error = prepareError || writeError;
  const isLoading = prepareIsLoading || writeIsLoading;
  return { data, isLoading, error, write };
};
