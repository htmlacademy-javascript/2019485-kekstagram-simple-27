import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './status-message.js';
import { scaleImage } from './scale-control.js';
import { resetEffects } from './picture-effect.js';
import { resetComment } from './util.js';
const form = document.querySelector('.img-upload__form');
const formInput = document.querySelector('#upload-file');
const openFormModalElement = document.querySelector('.img-upload__overlay');
const closeFormModalElement = document.querySelector('#upload-cancel');
const mainPage = document.querySelector('body');
const submitButton = document.querySelector('.img-upload__submit');


//Открытие формы при загрузке файла
formInput.addEventListener('change', () => {
  openFormModalElement.classList.remove('hidden');
  mainPage.classList.add('modal-open');
  scaleImage();
  resetEffects();
});

//Закрытие формы
function closeUserModal() {
  openFormModalElement.classList.add('hidden');
}

closeFormModalElement.addEventListener('click', () => {
  openFormModalElement.classList.add('hidden');
  mainPage.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    openFormModalElement.classList.add('hidden');
  }
});

//Блокировка кнопки отправки
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

//Валидация комментария в форме
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__description--text',
});

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          showSuccessMessage();
          unblockSubmitButton();
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

setUserFormSubmit(closeUserModal);

export { resetComment };
