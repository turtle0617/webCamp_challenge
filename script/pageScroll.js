(function() {

  $(function () {
    $.scrollify({
      section: ".scrollify",
      setHeights: false,
      // scrollbars: false,
      overflowScroll: true,
      target: ".parallax"
    });

    $(".down_arrow").click(function(e) {
      e.preventDefault();
      $.scrollify.move("#bannerPage");
      // $.scrollify.disable();
    });
  });
}());