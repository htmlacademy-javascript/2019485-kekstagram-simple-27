import { scaleImage } from './scale-control.js';
import { resetEffects } from './picture-effect.js';
import { resetComment } from './picture-form.js';
import { isEscEvent } from './util.js';
import { addEscKeydown } from './picture-form.js';
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const mainPage = document.querySelector('body');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const onOverlayClick = (evt) => {
  const divElement = evt.target.closest('div');
  const buttonElement = evt.target.closest('button');
  if (!divElement || buttonElement) {
    hideMessage();
  }
};

const onMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const showSuccessMessage = () => {
  const successPopup = successMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  mainPage.appendChild(successPopup);
  mainPage.style.overflow = 'hidden';
  scaleImage();
  resetEffects();
  resetComment();
};

const showErrorMessage = () => {
  const errorPopup = errorMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  mainPage.appendChild(errorPopup);
  mainPage.style.overflow = 'hidden';
};

function hideMessage() {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  mainPage.style.overflow = 'auto';
  addEscKeydown();
}

export { showSuccessMessage, showErrorMessage };

