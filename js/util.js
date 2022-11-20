const commentField = document.querySelector('.text__description');
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

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

const resetComment = () => {
  commentField.value = '';
};


export { showAlert, resetComment, isEscEvent };
