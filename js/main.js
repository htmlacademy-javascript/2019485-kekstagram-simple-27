import './picture-creation.js';
import './picture-form.js';
import './scale-control.js';
import './picture-effect.js';
import './status-message.js';
import { getData } from './api.js';


fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((pictures) => {
    getData(pictures);
  });


