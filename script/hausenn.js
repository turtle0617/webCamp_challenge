$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  mobileFirst:true,
  responsive: [
   {
     breakpoint: 479,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       infinite: true,
       arrows: false,
     }
   }]
});

$('.slider-nav').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerMode: true,
  dots: false,
  arrows: true,
  prevArrow: '<button class="arrow_prev"></button>',
  nextArrow: '<button class="arrow_next"></button>',
  focusOnSelect: true,
  responsive: [
   {
     breakpoint: 479,
     settings: {
       arrows: false,
       slidesToShow: 3,
       slidesToScroll: 1,
       infinite: true,
       dots: false,
     }
   }]
});
$('.slider-for').click(() => {
  $('.slider-for').slick('slickPrev');
})

var headers = ["H1", "H2", "H3"];

$(".accordion").click(function(e) {
  var target = e.target,
    name = target.nodeName.toUpperCase();

  if ($.inArray(name, headers) > -1) {
    var subItem = $(target).next();

    //slideUp all elements (except target) at current depth or greater
    var depth = $(subItem).parents().length;
    var allAtDepth = $(".accordion p, .accordion div").filter(function() {
      if ($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true;
      }
    });
    $(allAtDepth).slideUp("fast");

    //slideToggle target content and adjust bottom border if necessary
    subItem.slideToggle("fast", function() {
      $(".accordion :visible:last").css("border-radius", "0 0 10px 10px");
    });
    $(target).css({
      "border-bottom-right-radius": "0",
      "border-bottom-left-radius": "0"
    });
  }
});
