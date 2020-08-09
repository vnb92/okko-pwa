export const notificationPermissionRequest = () => {
    Notification.requestPermission().then((permission) => {
        if (permission === 'denied') {
            console.log('can send notifications');
        }
    });
}

export const showNotification = ({minutes, message}) => {
    new Notification(`Доклад через ${minutes} мин.`, {
        body: message,
        requireInteraction: true,
        vibrate: [200, 100, 200],
    });
}
