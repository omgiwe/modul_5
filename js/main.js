window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
  
        if (callback) {
          callback(swiper);
        }
      }

      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
    resizableSwiper(
      '(max-width: 767px)',
      '.slider-1',
      {
        loop: true,
        spaceBetween: 16,
        direction: 'horizontal',
        slidesPerView: "auto",
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    );
});
  

const button = document.querySelector('.brand-btn');
const content = document.querySelector('.slider-1__wrapper');
const iconMore = document.querySelector('.brand-btn__img');
const textButton = document.querySelector('.brand-btn__text');

button.addEventListener('click', () => {
  
  if (!content.classList.contains('slider-1__wrapper--open')) {
    content.classList.remove('slider-1__wrapper--close');
    content.classList.add('slider-1__wrapper--open');
  } else {
    content.classList.add('slider-1__wrapper--close');
    content.classList.remove('slider-1__wrapper--open');
  }

  iconMore.classList.toggle('brand-btn__img--rotate');

  if (!content.classList.contains("slider-1__wrapper--open")) {
    textButton.textContent = "Показать все";
  } else {
    textButton.textContent = "Скрыть";
  }

});
  
  
