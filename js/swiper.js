const swiperHero = new Swiper("#swip-hero", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  speed: 1000,
});

const breacpoints = {
  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
      slidesPerColumnFill: "column",
    },
    321: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: "column",
    },
    1: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "row",
    },
  },
  autoHeight: false,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const swiper1 = new Swiper("#swip-gallery-1", breacpoints);

const swiper2 = new Swiper("#swip-gallery-2", breacpoints);

const swiper3 = new Swiper("#swip-gallery-3", breacpoints);

const swiperEditions = new Swiper("#swip-editions", {
  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    1: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperProjects = new Swiper("#swip-projects", {
  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    321: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperEvents = new Swiper("#swip-events", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});
