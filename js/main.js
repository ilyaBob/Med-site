$(document).ready(function () {
  $('.services__box,.reviews__content-box').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    appendArrows: $(".services__arrow"),
    responsive: [
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  
  });

  // Стрелки для услуг
  $('.services__prev').on('click', function (e) {
    e.preventDefault()
    $('.services__box').slick('slickPrev')
  })

  $('.services__next').on('click', function (e) {
    e.preventDefault()
    $('.services__box').slick('slickNext')
  })

  // Стрелки для отзывов
  $('.reviews__prev').on('click', function (e) {
    e.preventDefault()
    $('.reviews__content-box').slick('slickPrev')
  })

  $('.reviews__next').on('click', function (e) {
    e.preventDefault()
    $('.reviews__content-box').slick('slickNext')
  })

  //Открытие закрытие меню

  $('.header__phone-menu, .overlay').on('click', function () {
    $('.header__menu').toggleClass('header__menu--open');
    $('.overlay').toggleClass('overlay-active');

  })

  // Плавное перемещение
  $(".header__list a, .footer__list a").on("click", function () {
    let href = $(this).attr("href");


    $("html, body").animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 370,
      easing: "linear"
    },
      $('.overlay').removeClass('overlay-active'),
      $('.header__menu').removeClass('header__menu--open'));

    return false;
  });
});