$(document).ready(function() {
  $('.slide-wrapper').slick({
    slideToShow: 1,
    slideToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow:
      "<i class='fa fa-chevron-left custom-slick-arrow slick-prev'></i>",
    nextArrow:
      "<i class='fa fa-chevron-right custom-slick-arrow slick-next'></i>"
  });
});
