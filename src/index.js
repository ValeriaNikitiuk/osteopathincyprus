import('./js/lang');
import('./js/loader');

const galleryButton = document.querySelector('.gallery-open');
const galleryContainer = document.querySelector('#gallery');
const modalClose = document.querySelector('.modal-close');




galleryButton.addEventListener('click', () => {
galleryContainer.style.display = 'block';
});

galleryContainer.addEventListener('click', (event) => {
if (event.target === galleryContainer) {
galleryContainer.style.display = 'none';
}
});

modalClose.addEventListener('click', () => {
galleryContainer.style.display = 'none';
});

// header links

const currentPath = window.location.pathname;

document.querySelectorAll('.item-link').forEach((link) => {
if (link.getAttribute('href') === currentPath) {
link.classList.add('active');
}
});





