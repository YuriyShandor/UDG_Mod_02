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

  $(".write-us__form-block").click(function() {
    $(".write-us__form-block").removeClass("write-us__input_span-up");
    $(this).addClass("write-us__input_span-up");
  })

  $('a[href^="#"]').on('click',function (e) {
	  e.preventDefault();

	  var target = this.hash;
	  var $target = $(target);

	  $('html, body').stop().animate({
	     'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	      window.location.hash = target;
	  });
	});
});
