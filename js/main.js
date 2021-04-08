const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  
  });

  const recommend = new Swiper('.recommend-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.recommend-button-next',
      prevEl: '.recommend-button-prev',
    },
  
  });

  const food = new Swiper('.food-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
  
    // Navigation arrows
    navigation: {
      nextEl: '.food-button-next',
      prevEl: '.food-button-prev',
    },
  
  });