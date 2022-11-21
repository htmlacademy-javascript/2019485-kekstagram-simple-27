import { renderPictures } from './picture-creation.js';
import { showAlert } from './util.js';
const GET_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const POST_URL = 'https://27.javascript.pages.academy/kekstagram-simple';
const getData = () => {
  fetch(GET_URL)
    .then((response) => response.json())
    .then((pictures) => {
      renderPictures(pictures);
    })
    .catch(() => {
      showAlert('Не удалось загрузить фотографии пользователей.');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(POST_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
