import { ReactNode, createContext, useContext, useState } from 'react';
import Notifications from '@/components/Notifications';

export type TxNotification = {
  id: string;
  hash: `0x${string}`;
  functionName: string;
  txStatus: 'pending' | 'success' | 'reverted';
  chainId: number;
  isCrossChain?: boolean;
};

type NotificationsContextType = {
  notifications: TxNotification[];
  notify: Function;
  dismiss: Function;
};

const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [],
  notify: (notification: TxNotification) => {},
  dismiss: (id: string) => {},
});

export const NotificationsProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<TxNotification[]>([]);
  const notify = (notification: TxNotification) => {
    setNotifications([notification, ...notifications]);
  };
  const dismiss = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };
  return (
    <NotificationsContext.Provider value={{ notifications, notify, dismiss }}>
      {children}
      <Notifications />
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationsContext);
