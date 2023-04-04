const namesDescriptors=["Парковка","Архитектура","Охрана","Территория"];
const swiperdesc = new Swiper('.swiper-description', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    pagination: {
        el: ".pagination",
        clickable: true,
        bulletClass: 'desc-pagination',
        bulletActiveClass: 'desc-pagination_active',
        renderBullet: function (index, className) {
           return '<div class="item '+className+'"><button type="button" class="pagination__btn "><span class="pagination__title">'+namesDescriptors[index]+'</span></button></div>'
        },
      },
  });

  const swiperAbout = new Swiper(".aboutSwiper", {
    grid:{
        fill: 'row',
        rows: 1
    },
    wrapperClass:"about__cards",
    slideClass: "about__columns",
    slidesPerView: 4,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
      425: {
        slidesPerView: 1,
        grid:{
          fill: 'row',
          rows:1
        },
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1140: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    spaceBetween: 20,

    pagination: {
      el: ".about-pagination",
      bulletClass: "about-pagination__element",
      bulletActiveClass:"about-pagination__element-active",
      clickable: true,
      renderBullet: function (index, className) {
        return '<button type="button" class="'+className+'"><span class="about-pagination__active-point"></span></button>'
     },
    },
  });

  const infrastructureSlider = new Swiper(".inf-swiper", {
    direction: 'vertical',
    initialSlide: 0,
    slidesPerView: 5,
    allowTouchMove: false,
    autoHeight: true,
    grid:{
        fill: 'column',
        rows: 1
    },
    controller:{
        by: 'slide'
    },
    clickable: true,
    wrapperClass:"layers",
    slideClass:"item",
    simulateTouch: false,
    navigation: {
        nextEl: '.inf-next',
        prevEl: '.inf-prev',
      },
      breakpoints: {
        300: {
          slidesPerView: 5,
        },}
  })