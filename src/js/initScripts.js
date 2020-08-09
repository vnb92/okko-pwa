import { renderTalks, initTalksIntersectionObserver } from './shedule';
import { startTimer } from './timer';
import { notificationPermissionRequest } from './notifications';

notificationPermissionRequest();
renderTalks();
initTalksIntersectionObserver();
startTimer();
