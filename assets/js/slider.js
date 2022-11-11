var sliderSelector = '.slider1';

options = {
  init: false,
  speed: 800,
  slidesPerView: 5, 
  slidesPerColumn: 2,
  slidesPerGroup: 5,
  spaceBetween: 0,
  grabCursor: true,
  // slidesPerColumnFill: 'column',
  autoplay: {
    delay: 150000 },
  // autoplay: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev' },

  breakpoints: {
    1023: {
      slidesPerView: 3,
      spaceBetween: 0 } },

  // Events
  on: {
    init: function () {
      this.autoplay.stop();
    },
    imagesReady: function () {
      this.autoplay.start();
      this.el.classList.remove('loading');
    } } };


var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();


function operationTabClick() {
  var sliderSelector2 = '.slider2'
  options = {
    init: false,
    speed: 800,
    observer: true,
    observeParents: true,
    slidesPerView: 5, 
    slidesPerColumn: 2,
    slidesPerGroup: 5,
    spaceBetween: 0,
    grabCursor: true,
    // slidesPerColumnFill: 'column',
    autoplay: {
      delay: 150000 },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev' },
  
    breakpoints: {
      1023: {
        slidesPerView: 3,
        spaceBetween: 0 } },
  
    // Events
    on: {
      init: function () {
        this.autoplay.stop();
      },
      imagesReady: function () {
        this.autoplay.start();
        this.el.classList.remove('loading');
      } } };

  var mySwiper2 = new Swiper(sliderSelector2, options);
  mySwiper2.init();
}

function adminTabClick() {
  var sliderSelector3 = '.slider3'
  options = {
    init: false,
    speed: 800,
    observer: true,
    observeParents: true,
    slidesPerView: 5, 
    slidesPerColumn: 2,
    slidesPerGroup: 5,
    spaceBetween: 0,
    grabCursor: true,
    // slidesPerColumnFill: 'column',
    autoplay: {
      delay: 150000 },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev' },
  
    breakpoints: {
      1023: {
        slidesPerView: 3,
        spaceBetween: 0 } },
  
    // Events
    on: {
      init: function () {
        this.autoplay.stop();
      },
      imagesReady: function () {
        this.autoplay.start();
        this.el.classList.remove('loading');
      } } };

  var mySwiper3 = new Swiper(sliderSelector3, options);
  mySwiper3.init();
}

