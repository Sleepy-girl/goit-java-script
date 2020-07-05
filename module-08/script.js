import images from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const modal = document.querySelector('.lightbox');
const btnCloseModalRef = document.querySelector('button[data-action="close-lightbox"]');
const contentModalRef = document.querySelector('.lightbox__content');
const imgRef = document.querySelector('.lightbox__image');
const lightboxOverlayRef = document.querySelector('.lightbox__overlay');

function galleryItems() {
  images.reduce((markUp, image) => {
    markUp += `
    <li class="gallery__item">
    <a class="gallery__linkk" 
    href="${image.original}">
    <img class="gallery__image" 
    src="${image.preview}"
    data-source="${image.original}" 
    alt="${image.description}"></a></li>
    `;
    galleryRef.innerHTML = markUp;
    return markUp;
  },'')
};
galleryItems();
console.log(galleryItems);


function openModal(event) {
  event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    };
    // console.dir(event.target.nodeName);
  modal.classList.add('is-open');
  imgRef.src = event.target.dataset.source;
  console.log(imgRef);
  
  imgRef.alt = event.target.alt;
  modal.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModal);
  // document.addEventListener('keydown', flipImages);
};

function closeModal(event) {
  if (event.target === lightboxOverlayRef || 
    event.target.dataset.action === 'close-lightbox' || 
    event.key === 'Escape') {
      imgRef.src = '';
      modal.classList.remove('is-open');
      modal.removeEventListener('click', closeModal);
      document.removeEventListener('keydown', closeModal)
  }
};

// function backDropClick(event) {
//   if (event.target === event.currentTarget) {
//     closeModal();
//   }
// };

galleryRef.addEventListener('click', openModal);
// lightboxOverlayRef.addEventListener('click', backDropClick);