$('.hero-slider').slick({
    slidesToShow: 1,
    nextArrow: '<i class="hero-slider-next fa fa-angle-right"></i>',
    prevArrow: '<i class="hero-slider-prev fa fa-angle-left"></i>',
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
});

$('.sets-slider').slick({
    doots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<i class="sets-slider-next fa fa-angle-right"></i>',
    prevArrow: '<i class="sets-slider-prev fa fa-angle-left"></i>',
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }]
  })
  