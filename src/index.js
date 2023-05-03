const galleryButton = document.querySelector('.gallery-open');
const galleryContainer = document.querySelector('#gallery');
const modalClose = document.querySelector('.modal-close');



galleryButton.addEventListener('click', function() {
  galleryContainer.style.display = 'block';
});

galleryContainer.addEventListener('click', function (event) {
    if (event.target === galleryContainer) {
      galleryContainer.style.display = 'none';
       if (event.target === galleryContainer) {
    return;
  }
}
});

modalClose.addEventListener('click', function() {
  galleryContainer.style.display = 'none';
   
});


// ссылки хедера


var links = document.querySelectorAll('.item-link');

for (var i = 0; i < links.length; i++) {
  if (links[i].getAttribute('href') === window.location.pathname) {
    links[i].classList.add('active');
  }
}

