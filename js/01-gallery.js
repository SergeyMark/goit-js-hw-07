import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(galleryItems.original)

const gallery = document.querySelector('.gallery');
// console.log(gallery);

const divItem = document.createElement('div');
divItem.classList.add('gallery__item');
console.log(divItem);

const aItem = document.querySelector('a');
aItem.classList.add('gallery__link');
aItem.setAttribute('href', 'large-image.jpg');
console.log(aItem);

// const imgItem = document.querySelector('img');
// // imgItem.classList.add('gallery__image');
// // imgItem.src = '';
// imgItem.setAttribute('data-source', 'large-image.jpg');
// imgItem.setAttribute('alt', 'Image description');
// console.log(imgItem);


