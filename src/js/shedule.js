import { DB } from './db';

const TIME_SEPARATOR = '-';

export const renderTalks = () => {
  const { talks } = DB;

  const talkTemplate = document.getElementById('talk-template');
  const talksContainer = document.querySelector('.shedule__talks');
  const fragment = new DocumentFragment();

  talks.forEach(({ time, title, description }) => {
    const talkNode = talkTemplate.cloneNode(true);
    const { content } = talkNode;

    content.querySelector('.talk__time-start').textContent = time.start;
    content.querySelector('.talk__time-end').textContent = time.end;
    content.querySelector('.talk__time-separator').textContent = TIME_SEPARATOR;
    content.querySelector('.talk__title').textContent = title;
    content.querySelector('.talk__description').textContent = description;

    fragment.append(content);
  });

  talksContainer.append(fragment);
};

export const initTalksIntersectionObserver = () => {
  const options = {
    threshold: 0.30,
  };

  const callback = (entries, observer) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;

      target.classList.add('visible');
      observer.unobserve(target);
    });
  };

  const observer = new IntersectionObserver(callback, options);

  const talks = document.querySelectorAll('.talk');
  talks.forEach((talk) => observer.observe(talk));
};
