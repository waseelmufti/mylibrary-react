import React, { createContext, useContext, useState } from 'react'
import { NotificationProps } from '../views/components/dashboard/Notification';

interface NotificationContextType {
    notifications: NotificationProps[];
    addNotification: (message: string | any, type: "success" | "danger" | "warning" | "info") => void;
    removeNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextType>({
    notifications: [],
    addNotification: () => {},
    removeNotification: () => {},
});

const NotificationProvider: React.FC<any> = ({children}) => {
    const [notifications, setNotifications] = useState<NotificationProps[]>([]);
    let nextNotificationId = 1;

    const addNotification = (message: string | any, type: "success" | "danger" | "warning" | "info") => {
        setNotifications(prevNotifications => ([
            ...prevNotifications,
            {
                id: nextNotificationId++,
                message,
                type,
                onClose: removeNotification,
            }
        ]));
    }

    const removeNotification = (id: number) => {
        setNotifications(prevNotifications => (
            prevNotifications.filter(notification => notification.id !== id)
        ));
    };

    return (
        <NotificationContext.Provider value={{
            notifications,
            addNotification,
            removeNotification,
        }}>
            {children}
        </NotificationContext.Provider>
    );
    
};

export const useNotification = () => useContext(NotificationContext);

export default NotificationProvider;
