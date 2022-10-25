import { CREATE_PICTURE } from './data.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureListFragment = document.createDocumentFragment();

const GET_PICTURE = CREATE_PICTURE();

GET_PICTURE.forEach((post) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = post.url;
  picture.querySelector('.picture__likes').textContent = post.likes;
  picture.querySelector('.picture__comments').textContent = post.comments;
  pictureListFragment.appendChild(picture);
});

pictureList.appendChild(pictureListFragment);

