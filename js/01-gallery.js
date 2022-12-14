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

galleryTop.insertAdjacentHTML('afterbegin', galleryAll);

const instance = basicLightbox.create(
    `<a class="gallery__link" href="${item.original}"></a>`
)

galleryTop.addEventListener('click', onClickGallery);
function onClickGallery(event){
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    instance.show();

    console.log("Это картинка")
}



