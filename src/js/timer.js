import { DB } from './db';
import { showNotification } from './notifications';

const MS_INTO_MINUTE = 60000;
const UPDATE_TIMER_INTERVAL_MS = 1 * MS_INTO_MINUTE;
const MIN_MINUTES_FOR_NOTIFICATION = 5;

const timeNode = document.querySelector('.timer__time');
const titleNode = document.querySelector('.timer__title');

export const startTimer = () => {
    updateTimer();
    setInterval(updateTimer, UPDATE_TIMER_INTERVAL_MS);
}

let isShowNotification = false;
function updateTimer() {
    const currentTimeMs = Date.now();

    let isFindNearestTalk = false;
    DB.talks.forEach(talk => {
        /**
         * По массиву бегаем, но не делаем вычислений, если уже нашли ближаший доклад.
         * Можно было бы через for..breake оптимизировать, но сейчас это лишнее:)
         */
        if (isFindNearestTalk) return;

        const startTalkTimeMs = startTalkTimeToMs(talk.time.start);
        const remainingTimeMs = startTalkTimeMs - currentTimeMs;
        const remainingMinutes = Math.ceil(remainingTimeMs / MS_INTO_MINUTE);
        
        if (remainingMinutes > MIN_MINUTES_FOR_NOTIFICATION) {
            isShowNotification = false;
        };

        if (remainingMinutes <= 0) {
            isFindNearestTalk = false;
            titleNode.textContent = 'доклад закончен'
            timeNode.textContent = '';
            return;
        };

        titleNode.textContent = 'доклад через'
        timeNode.textContent = `${remainingMinutes} мин.`;
        
        isFindNearestTalk = true;
        
        if (remainingMinutes <= MIN_MINUTES_FOR_NOTIFICATION && !isShowNotification) {
            showNotification({
                minutes: remainingMinutes,
                message: talk.title,
            });

            isShowNotification = true;
        }
    });
}

function startTalkTimeToMs(startTalkTime) {
    const [hours, minutes] = startTalkTime.split(':');
    const today = new Date();

    today.setHours(hours, minutes, 0);
        
    return today.getTime();
}
