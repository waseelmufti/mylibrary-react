import React, { useEffect } from 'react';

export interface NotificationProps {
  id: number,
  message: string;
  type: "success" | "danger" | "warning" | "info";
  onClose: (id: number) => void;
}

const Notification: React.FC<NotificationProps> = ({ id, message, type, onClose }) => {
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(id);
    }, 5000);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  const handleClose = () => {
    onClose(id);
  };

  if (!visible) {
    return null
  };

  return (
    <>
      <div className={`notification is-${type} is-pulled-right m-1`}>
        <button className="delete" onClick={handleClose}></button>
        {message}
      </div>
    </>
  );
}

export default Notification;
