import('./js/lang');

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


// var carousel = document.querySelector('.carousel');
// var prevButton = carousel.querySelector('.carousel__button--prev');
// var nextButton = carousel.querySelector('.carousel__button--next');
// var viewport = carousel.querySelector('.carousel__viewport');
// var slides = carousel.querySelectorAll('.carousel__slide');

// var slideWidth = slides[0].offsetWidth;
// var slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);

// var viewportWidth = viewport.offsetWidth;
// var maxScroll = (slideWidth + slideMarginRight) * slides.length - viewportWidth;

// prevButton.addEventListener('click', function() {
//   viewport.scrollBy({
//     left: -slideWidth - slideMarginRight,
//     behavior: 'smooth'
//   });
// });

// nextButton.addEventListener('click', function() {
//   viewport.scrollBy({
//     left: slideWidth + slideMarginRight,
//     behavior: 'smooth'
//   });
// });


// // слайдер


// const indicators = document.querySelectorAll('.carousel__indicator');
// let activeIndex = 0;

// function setActiveIndicator(index) {
//   indicators[activeIndex].classList.remove('carousel__indicator--active');
//   indicators[index].classList.add('carousel__indicator--active');
//   activeIndex = index;
// }

// indicators.forEach((indicator, index) => {
//   indicator.addEventListener('click', () => {
//     setActiveIndicator(index);
//   });
// });

// document.querySelector('.carousel__button--prev').addEventListener('click', () => {
//   const newIndex = activeIndex === 0 ? indicators.length - 1 : activeIndex - 1;
//   setActiveIndicator(newIndex);
// });

// document.querySelector('.carousel__button--next').addEventListener('click', () => {
//   const newIndex = activeIndex === indicators.length - 1 ? 0 : activeIndex + 1;
//   setActiveIndicator(newIndex);
// });

// переключатель языка


