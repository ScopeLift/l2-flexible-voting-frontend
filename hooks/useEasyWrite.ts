import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  UsePrepareContractWriteConfig,
} from 'wagmi';
import { useNotifications } from '@/contexts/NotificationsContext';
import { useEffect } from 'react';
import usePrevious from '@/hooks/usePrevious';

export const useEasyWrite = (
  params: UsePrepareContractWriteConfig & { isCrossChain?: boolean }
) => {
  const { notify } = useNotifications();
  const { config, error: prepareError } = usePrepareContractWrite(params);
  const {
    data: writeData,
    error: writeError,
    isLoading: writeIsLoading,
    write: contractWrite,
  } = useContractWrite(config);
  const {
    error: waitError,
    data: transactionData,
    isLoading: isTransactionDataLoading,
  } = useWaitForTransaction({
    hash: writeData?.hash,
    enabled: writeData?.hash !== undefined,
    chainId: config.request?.chainId,
  });
  const error = prepareError || writeError;
  const isLoading = isTransactionDataLoading || writeIsLoading;
  const prev = usePrevious({
    hash: writeData?.hash,
    status: transactionData?.status,
    isTransactionDataLoading,
    waitError,
  });

  useEffect(() => {
    // The different statuses that we intend to show are:
    //   - has a hash, but tx status is loading => 'pending'
    //   - has a hash, and tx status is success => 'success'
    //   - has a hash, and tx status is reverted => 'reverted'
    //   - has no hash, and there was some other error => 'error'
    const hash = writeData?.hash;
    console.log(
      `hash: ${hash}
      transactionData?.status: ${transactionData?.status}
      prev.status: ${prev.status}
      isTransactionDataLoading: ${isTransactionDataLoading}
      prev.isTransactionDataLoading: ${prev.isTransactionDataLoading}
      `
    );
    if (!config.request?.chainId || !params.functionName) {
      console.error('useEasyWrite must have a chainId or functionName');
      return;
    }
    // succeed
    if (hash && transactionData?.status === 'success' && prev.status !== 'success') {
      console.log('notify success');
      if (params.isCrossChain) {
        notify({
          hash,
          functionName: params.functionName,
          txStatus: 'success',
          chainId: config.request.chainId,
          isCrossChain: true,
        });
        return;
      }
      notify({
        hash,
        functionName: params.functionName,
        txStatus: 'success',
        chainId: config.request.chainId,
      });
      // revert
    } else if (hash && waitError && prev.waitError?.message !== waitError.message) {
      console.log('notify fail');
      notify({
        hash,
        functionName: params.functionName,
        txStatus: 'reverted',
        chainId: config.request.chainId,
      });
      // pending
    } else if (hash && isTransactionDataLoading && !prev.isTransactionDataLoading) {
      console.log('notify pending');
      notify({
        hash,
        functionName: params.functionName,
        txStatus: 'pending',
        chainId: config.request.chainId,
      });
    }
  }, [
    notify,
    writeData?.hash,
    prev.status,
    isTransactionDataLoading,
    transactionData,
    prev.isTransactionDataLoading,
    waitError,
    prev.waitError,
    params.functionName,
    config.request,
    params.isCrossChain,
  ]);

  return {
    data: writeData,
    hash: writeData?.hash,
    chainId: config.request?.chainId,
    isLoading,
    isTransactionDataLoading,
    error,
    write: contractWrite,
  };
};
