const homePage = (function(){
  const home = document.querySelector('#home');
  const bg = document.querySelector(".bg");
  const homeAssets = document.querySelector('.home_assets');
  const walk = 25;

  function moveBackground(e) {
    let { offsetWidth: width, offsetHeight: height } = bg;
    let { offsetX: x, offsetY: y } = e;

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
    bg.style.transform = `matrix(1.05, 0, 0, 1.05, ${xWalk}, ${yWalk})`
  }

  home.addEventListener("mousemove", moveBackground);

}());