import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryTop = document.querySelector('.gallery');

const galleryAll = galleryItems.map((item) => {
   console.log(item.description)
    // `<div class="gallery__item">
    //  <a class="gallery__link" href="${item.original}">
    //  <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
    //  </a>
    //  </div>`
});

console.log(galleryAll);

galleryTop.insertAdjacentHTML('afterbegin', galleryAll);

console.log(galleryTop);
