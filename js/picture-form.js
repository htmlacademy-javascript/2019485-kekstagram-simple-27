import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './status-message.js';
import { scaleImage } from './scale-control.js';
import { resetEffects } from './picture-effect.js';
import { resetComment, isEscEvent } from './util.js';
const form = document.querySelector('.img-upload__form');
const formInput = document.querySelector('#upload-file');
const openFormModal = document.querySelector('.img-upload__overlay');
const closeFormModal = document.querySelector('#upload-cancel');
const mainPage = document.querySelector('body');
const submitButton = document.querySelector('.img-upload__submit');


const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__description--text',
});

const onEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    openFormModal.classList.add('hidden');
    formInput.value = '';
  }
};

function removeEscKeydown() {
  document.removeEventListener('keydown', onEscKeydown);
}

function addEscKeydown() {
  document.addEventListener('keydown', onEscKeydown);
}

//Открытие формы при загрузке файла
formInput.addEventListener('change', () => {
  openFormModal.classList.remove('hidden');
  mainPage.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
  scaleImage();
  resetEffects();
  pristine.reset();
});

//Закрытие формы
function closeUserModal() {
  openFormModal.classList.add('hidden');
  formInput.value = '';
}

closeFormModal.addEventListener('click', () => {
  openFormModal.classList.add('hidden');
  mainPage.classList.remove('modal-open');
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
const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    removeEscKeydown();

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

export { resetComment, addEscKeydown };
