import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
    init(url) {
        const webSocket = new WebSocket(url);
        webSocket.onmessage = this._onMessageHandler;
    },

    _onMessageHandler(message) {
        const movie = JSON.parse(message.data);
        NotificationHelper.sendNotification({
            title: `${movie.title} is on cinema!`,
            options: {
                body: movie.overview,
                image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`,
                // vibrate: [200, 100, 200, 100, 200, 100, 200],
                // tag: 'vibration-sample'
            },
        });
    },
};

export default WebSocketInitiator;