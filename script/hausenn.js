
$('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({
   slidesToShow: 8,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   centerMode: true,
   dots: false,
   arrows: true,
   prevArrow:'<button class="arrow_prev"></button>', 
   nextArrow:'<button class="arrow_next"></button>',
   focusOnSelect: true,
 });
