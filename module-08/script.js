import images from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.lightbox'),
  img: document.querySelector('.lightbox__image'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
  // btnCloseModal: document.querySelector('button[data-action="close-lightbox"]'),
  // contentModal: document.querySelector('.lightbox__content')
}

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
    refs.gallery.innerHTML = markUp;
    return markUp;
  },'')
};
galleryItems();

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  };

  // console.log(event.target.nodeName);
  refs.modal.classList.add('is-open');
  refs.img.src = event.target.dataset.source;
  // console.log(refs.image);
  refs.modal.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModal);
  
};

function closeModal(event) {
  if (event.target === refs.lightboxOverlay || 
    event.target.dataset.action === 'close-lightbox' || 
    event.code === 'Escape') {
      refs.img.src = '';
      refs.modal.classList.remove('is-open');
      refs.modal.removeEventListener('click', closeModal);
      document.removeEventListener('keydown', closeModal);
  }
};

refs.gallery.addEventListener('click', openModal);




// function backDropClick(event) {
//   if (event.target === event.currentTarget) {
//     closeModal();
//   }
// };
// lightboxOverlayRef.addEventListener('click', backDropClick);