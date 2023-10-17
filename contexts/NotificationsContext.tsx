import { ReactNode, createContext, useContext, useState } from 'react';
import Notifications from '@/components/Notifications';

export type Notification = {
  description: string;
  id: string;
  hash?: string;
  network?: string;
  type: 'tx' | 'alert';
  txStatus?: 'success' | 'error' | 'loading';
};

type NotificationsContextType = {
  notifications: Notification[];
  notify: Function;
  dismiss: Function;
};

const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [],
  notify: () => {},
  dismiss: (id: string) => {},
});

export const NotificationsProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const notify = (notification: Notification) => {
    setNotifications([...notifications, notification]);
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
