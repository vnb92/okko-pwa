export const notificationPermissionRequest = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === 'denied') {
      // eslint-disable-next-line no-alert
      alert('push-уведомления не работают, так как запрещены настройками');
    }
  });
};

export const showNotification = ({ minutes, message }) => {
  new Notification(`Доклад через ${minutes} мин.`, {
    body: message,
    requireInteraction: true,
    vibrate: [200, 100, 200],
  });
};
