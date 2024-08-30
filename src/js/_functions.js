// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck())

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.how__slider', {
  slidesPerView: '1',
  centeredSlides: 'true',

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });
