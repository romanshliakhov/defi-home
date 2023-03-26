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

  let feedbacksSlider = new Swiper(container.querySelector('.product__feedbacks-slider'), {
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    adaptiveHeight: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let shopBannerSlider = new Swiper(container.querySelector('.shop__slider'), {
    slidesPerView: 1,
    loop: true,
    // freeMode: true,
    adaptiveHeight: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let shopCategoriesSlider = new Swiper(container.querySelector('.shop__categories'), {
    slidesPerView: 'auto',
    spaceBetween: 6,
    loop: true,
    // freeMode: true,
    adaptiveHeight: true,
    pagination: {
      // el: ".swiper-pagination",
      // type: "progressbar",
      // clickable: true,

      el: ".swiper-scrollbar",
      draggable: true,
      // clickable: true,
    },
  });

}


