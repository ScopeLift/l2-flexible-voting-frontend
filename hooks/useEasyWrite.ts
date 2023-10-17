import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import { useNotifications } from '@/contexts/NotificationsContext';
import { useEffect } from 'react';

export const useEasyWrite = (params: Parameters<typeof usePrepareContractWrite>[0]) => {
  const { notify } = useNotifications();
  const {
    config,
    error: prepareError,
    isLoading: prepareIsLoading,
  } = usePrepareContractWrite(params);
  const {
    data: writeData,
    error: writeError,
    isLoading: writeIsLoading,
    write: contractWrite,
    status,
  } = useContractWrite(config);
  const error = prepareError || writeError;
  const isLoading = prepareIsLoading || writeIsLoading;

  useEffect(() => {
    if (writeData?.hash) notify({ hash: writeData?.hash, status });
  }, [notify, writeData?.hash, status]);

  const write = () => {
    contractWrite!();
  };
  return { data: writeData, isLoading, error, write };
};
