import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { useNotifications } from "@/contexts/NotificationsContext";

export const useEasyWrite = (
  params: Parameters<typeof usePrepareContractWrite>[0]
) => {
  const { notify } = useNotifications();
  const {
    config,
    error: prepareError,
    isLoading: prepareIsLoading,
  } = usePrepareContractWrite(params);
  const {
    data,
    error: writeError,
    isLoading: writeIsLoading,
    write: contractWrite,
    status,
  } = useContractWrite(config);
  const error = prepareError || writeError;
  const isLoading = prepareIsLoading || writeIsLoading;

  const write = () => {
    contractWrite!();
    data?.hash && notify({ hash: data.hash });
  };
  return { data, isLoading, error, write };
};
