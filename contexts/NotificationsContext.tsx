import { ReactNode, createContext, useContext, useState } from 'react';
import Notifications from '@/components/Notifications';

export type TxNotification = {
  hash: `0x${string}`;
  functionName: string;
  txStatus: 'pending' | 'success' | 'reverted';
  chainId: number;
  description?: string;
  isCrossChain?: boolean;
};

type TxNotificationWithId = TxNotification & { id: string };

type NotificationsContextType = {
  notifications: TxNotificationWithId[];
  notify: (arg0: TxNotification) => void;
  dismiss: (arg0: string) => void;
};

const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [],
  notify: (notification: TxNotification) => {},
  dismiss: (id: string) => {},
});

export const NotificationsProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<TxNotificationWithId[]>([]);
  const notify = (notification: TxNotification) => {
    setNotifications([
      {
        ...notification,
        id: `${notification.hash}-${notification.txStatus}-${notification.chainId}`,
      },
      ...notifications,
    ]);
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
