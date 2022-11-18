const commentField = document.querySelector('.text__description');
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
//Вывод ошибки при ошибке загрузки фотографий пользователей
const ALERT_SHOW_TIME = 5000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontsize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#B98A08';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};
function resetComment() {
  commentField.value = '';
}


export { getRandomIntInclusive, textLength, showAlert, resetComment };
