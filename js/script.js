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
});
