import { ReactNode } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

type Props = {
  action: string;
  isConnected: boolean;
  children: ReactNode;
  className: string;
};

const ConnectWallet = ({ action, isConnected, children, className }: Props) => {
  const connectContainer = (
    <div className={`flex flex-col gap-2 h-full w-full justify-center align-center ${className}`}>
      <h1 className="self-center text-3xl">Connect wallet to {action}.</h1>
      <div className="self-center">
        <ConnectButton />
      </div>
    </div>
  );

  return <>{isConnected ? children : connectContainer}</>;
};
export default ConnectWallet;
