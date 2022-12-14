import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryTop = document.querySelector('.gallery');

function createdGallery() {
 return galleryItems.map((item) => 
   `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
        </a>
    </div>`
    ).join("");
}

const createdGalleryFn = createdGallery();

galleryTop.insertAdjacentHTML('afterbegin', createdGalleryFn);

galleryTop.addEventListener('click', onClickGallery);
function onClickGallery(event){
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const srcPic = event.target.dataset.source;

    const instance = basicLightbox.create(
        `<img class="gallery__image" src="${srcPic}">`, 
        {            
            onShow: (instance) => {document.addEventListener('keydown', onEscapeKeyDown)},  
            onClose: (instance) => {document.removeEventListener('keydown', onEscapeKeyDown)}
        }
    )

    function onEscapeKeyDown(event){
        if(event.key !== 'Escape'){
            return;
        }
        instance.close();
    }

    instance.show();    
}



