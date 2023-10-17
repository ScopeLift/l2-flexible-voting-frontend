import { ReactNode, createContext, useContext, useState } from "react";
import Notifications from "@/components/Notifications";

export type Notification = {
  description: string;
  id: string;
  type: "success" | "error" | "warning" | "info";
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

export const NotificationsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const notify = (notification: Notification) => {
    setNotifications([...notifications, notification]);
  };
  const dismiss = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };
  return (
    <NotificationsContext.Provider value={{ notifications, notify, dismiss }}>
      <Notifications />
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationsContext);
