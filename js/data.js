import { getRandomIntInclusive } from './util.js';

const PICTURE_NUMBER = 25;
const pictureInfo = function (index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: 'Отправлено через Кекстаграм',
    likes: getRandomIntInclusive(15, 200),
    comments: getRandomIntInclusive(0, 200),
  };
};

const CREATE_PICTURE = () => Array.from({ length: PICTURE_NUMBER }, (_, infoIndex) => pictureInfo(infoIndex + 1));

export { CREATE_PICTURE };
