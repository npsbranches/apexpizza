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

$(window).scroll(function () {
    var windowTop = $(document).scrollTop();
    var header = $('.header');
    var body = $('body');
    if (windowTop > 70) {
        header.addClass('sticky');
        body.addClass('sticky');
    } else {
        header.removeClass('sticky');
        body.css('margin-top', '125');
        body.removeClass('sticky');
    }
})
$(window).scroll(function () {
    var windowTop = $(document).scrollTop();
    var logo = $('.header-sticky-logo')
    if (windowTop > 50) {
        logo.addClass('display');
    } else {
        logo.removeClass('display');
    }
})

$(".header-menu ul").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;

    $('body,html').animate({
        scrollTop: top
    }, 1500);
});


$('.amount-remove').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

$input.val(value);

});

$('.amount-add').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
      value = value + 1;
    } else {
        value =100;
    }

    $input.val(value);
});

$('.header-cart-toggler').click(function(){
    $(this).toggleClass('rotate');
    $('.header-cart-products').toggleClass('visible');
    $('.header-cart').toggleClass('width');
})