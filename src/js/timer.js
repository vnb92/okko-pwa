import { DB } from './db';

const MS_INTO_MINUTE = 60000;
const UPDATE_TIMER_INTERVAL_MS = 1 * MS_INTO_MINUTE;

const timeNode = document.querySelector('.timer__time');
const startTalkTimes = DB.talks.map(talk => talk.time.start);

export const startTimer = () => {
    updateTimer();
    setInterval(updateTimer, UPDATE_TIMER_INTERVAL_MS);
}

function updateTimer() {
    const currentTimeMs = Date.now();

    let isFindNearestTalk = false;
    startTalkTimes.forEach(startTalkTime => {
        if (isFindNearestTalk) return;

        const startTalkTimeMs = startTalkTimeToMs(startTalkTime);
        const remainingTimeMs = startTalkTimeMs - currentTimeMs;

        if (remainingTimeMs <= 0) return;

        isFindNearestTalk = true;

        const remainingMinutes = Math.floor(remainingTimeMs / MS_INTO_MINUTE);

        timeNode.textContent = `${remainingMinutes} мин.`
    });
}

function startTalkTimeToMs(startTalkTime) {
    const [hours, minutes] = startTalkTime.split(':');
    const today = new Date();

    today.setHours(hours, minutes, 0);
        
    return today.getTime();
}
