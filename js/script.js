$(document).ready(function() {
  $('.header-slider').on('init', function(event, slick){
    $('.slider-nav').append('<div class="slider-count"><p><span id="current">1</span> of <span id="total">'+slick.slideCount+'</span></p></div>');
  });
  $('.header-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $(".arrow-next"),
    prevArrow: $(".arrow-prev"),
    autoplay: true,
    autoplaySpeed: 5000,
  });
  $('.header-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slider-count #current').html(currentSlide+1);
  });

  $('select').niceSelect();

  $(".search-box__icon").click(function() {
    $(".search-box__content").addClass("search-box__content_show");
  });
  $(".close-search").click(function() {
    $(".search-box__content").removeClass("search-box__content_show");
  });

  $(".toggler-icon").click(function() {
    $(this).toggleClass("toggler-icon_close");
    $(".mask").toggleClass("mask_show");
    $(".nav-bar").toggleClass("nav-bar_show");
  })
});
