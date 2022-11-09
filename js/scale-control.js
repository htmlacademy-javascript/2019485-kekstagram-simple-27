const scaleControl = document.querySelector('.scale__control--value');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const currentImage = document.querySelector('.img-upload__preview');

const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

const scaleImage = (value = DEFAULT_SCALE) => {
  currentImage.style.transform = `scale(${value / 100})`;
  scaleControl.value = `${value}%`;
};

const onScaleSmallerClick = () => {
  const currentValue = parseInt(scaleControl.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onScaleBiggerClick = () => {
  const currentValue = parseInt(scaleControl.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

scaleImage();

scaleSmaller.addEventListener('click', onScaleSmallerClick);
scaleBigger.addEventListener('click', onScaleBiggerClick);

