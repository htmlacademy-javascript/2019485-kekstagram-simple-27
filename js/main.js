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


const PICTURE_NUMBER = 25;
const PICTURE_INFO = function (index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: 'Отправлено через Кекстаграм',
    likes: getRandomIntInclusive(15, 200),
    comments: getRandomIntInclusive(0, 200),
  };
};

const CREATE_PICTURE = Array.from({ length: PICTURE_NUMBER }, (_, infoIndex) => PICTURE_INFO(infoIndex + 1));

CREATE_PICTURE();

