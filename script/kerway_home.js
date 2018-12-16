const homePage = (function() {
  const home = document.querySelector('#home');
  const bg = document.querySelector(".bg");
  const homeAssets = document.querySelector('.home_assets');
  const hambuger = document.querySelector('#hambuger');
  const waterfallImage = [...$("#works").children()];
  const walk = 25;


  function moveBackground(e) {
    // 若選單打開則移除背景移動效果
    if (!!hambuger.classList[0]) return;
    let {
      offsetWidth: width,
      offsetHeight: height
    } = bg;
    let {
      offsetX: x,
      offsetY: y
    } = e;

    if (e.target !== homeAssets) {
      if (e.target.offsetLeft === 0 && e.target.offsetTop === 0) {
        x += e.target.parentElement.offsetLeft;
        y += e.target.parentElement.offsetTop;
      } else {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
      }
    }

    const xWalk = ((x / width * walk) - (walk / 2)).toFixed(1);
    const yWalk = ((y / height * walk) - (walk / 2)).toFixed(1);
    if (window.innerWidth <= 760) return;
    bg.style.transform = `matrix(1.05, 0, 0, 1.05, ${xWalk}, ${yWalk})`
  }

  window.addEventListener('mousemove', moveBackground);

  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };



  function imageCheckSlide() {
    const self = $(".parallax")[0];
    const children = [$('.main_banner')];
    children.forEach(child => {
      child = child[0];
      const sliderIn = (self.scrollTop + self.clientHeight) - child.clientHeight / 10;
      const imageBottom = child.offsetTop + child.clientHeight;
      const isHalfShown = sliderIn > child.offsetTop;
      const isNotScrolledPast = self.scrollTop < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        console.log()
        $(child).find("img").removeClass("fadeOut").addClass("fadeIn");
      } else {
        $(child).find("img").removeClass("fadeIn").addClass("fadeOut");
      }
    });
  }

  $(".parallax").scroll(debounce(imageCheckSlide));

  waterfallImage.forEach((img) => {
    $(img).click(function() {
      console.log($(this).children().attr("src"));
    })
  })

}());
