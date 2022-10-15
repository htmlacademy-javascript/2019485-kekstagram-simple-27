//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0 || min === max || min > max) {
    return NaN;
  }
  else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
getRandomIntInclusive(5, 30);

//Функция для проверки максимальной длины строки.
function textLength(string, maxLength) {
  return string.length <= maxLength;
}
textLength('HtmlAcademy', 20);

const likesAmount = {
  min: 15,
  max: 200,
};
const commentsAmount = {
  min: 0,
  max: 200,
};
const pictureNumber = 25;
const pictureInfo = function (index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: 'Отправлено через Кекстаграм',
    likes: getRandomIntInclusive(likesAmount.min, likesAmount.max),
    comments: getRandomIntInclusive(commentsAmount.min, commentsAmount.max),
  };
};

const createPicture = Array.from({ length: pictureNumber }, (_, infoIndex) => pictureInfo(infoIndex + 1));

createPicture();

