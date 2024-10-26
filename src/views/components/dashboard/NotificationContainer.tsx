import React from 'react'
import { useNotification } from '../../../stores/NotificationContext';
import Notification from './Notification';

const NotificationContainer : React.FC = () => {
    const {notifications} = useNotification();
    
  return (
    <>
      {notifications && <div className='section notifications-container is-clearfix is-relative' style={{"zIndex": "999"}}>
        {notifications.map(notification => (
            <Notification key={notification.id} {...notification} />
        ))}
      </div>}
    </>
  )
};

export default NotificationContainer;
