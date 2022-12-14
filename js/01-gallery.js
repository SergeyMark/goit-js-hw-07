import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryTop = document.querySelector('.gallery');

const galleryAll = galleryItems.map((item) => 
   `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
        </a>
    </div>`
).join("");

// console.log(galleryAll);

galleryTop.insertAdjacentHTML('afterbegin', galleryAll);

// console.log(galleryTop);

// const instance = basicLightbox.create()

galleryTop.addEventListener('click', onClickGallery);
function onClickGallery(event){
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const srcPic = event.target.dataset.source;
    const altPic = event.target.alt;

    const instance = basicLightbox.create(
        `<img class="gallery__image" src="${srcPic}" alt="${altPic}">`
    )
    instance.show();
    
    
}



