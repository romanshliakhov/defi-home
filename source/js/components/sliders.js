import Swiper from '../vendor/swiper.js';

// Default slider
for (const container of  document.querySelectorAll('.container') ) {
  let heroSlider = new Swiper(container.querySelector('.product__hero-slider'), {
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    adaptiveHeight: true,
    navigation: {
      nextEl: container.querySelector(".product__slider-btn--next"),
      prevEl: container.querySelector(".product__slider-btn--prev"),
      clickable: true,
    }
  });
}


