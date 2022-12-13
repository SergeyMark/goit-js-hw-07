import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
// console.log(gallery);

const divItem = document.createElement('div');
divItem.classList.add('gallery__item');
// console.log(divItem);

const aItem = document.createElement('a');
aItem.classList.add('gallery__link');
aItem.setAttribute('href', 'large-image.jpg');
// console.log(aItem);

const pictureItem = document.createElement('img');
pictureItem.classList.add('gallery__image');
pictureItem.src = '';
pictureItem.setAttribute('data-source', 'large-image.jpg');
pictureItem.setAttribute('alt', 'Image description');
// console.log(pictureItem);


aItem.append(pictureItem);
divItem.append(aItem);
gallery.append(divItem);
console.log(gallery);

for (const galleryItem of galleryItems) {
    pictureItem.src = galleryItem.preview;
    pictureItem.alt = galleryItem.description;
    pictureItem.dataset.source = galleryItem.original;
    aItem.href = galleryItem.original;
}