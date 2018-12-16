(function() {
  const home = document.querySelector("#home");
  const contact = document.querySelector(".contacts");
  const contactBtn = document.querySelector(".contact_btn");
  const banner = document.querySelector("#banner");
  const hambuger = document.querySelector("#hambuger");
  const works = document.querySelector("#kerway_works_page");
  const couture = document.querySelector('.couture_banner');
  const collections = document.querySelector(".collections_banner");
  const seasons = document.querySelector('.seasons_banner');
  const elements = [couture, collections, seasons];
  const couturePage = document.querySelector('.couture_slides');

  function collectionMove(e) {
    console.log('helllllo');
    couturePage.style.transform = "translateX(0)";
    home.style.transform = "translateX(-100%)";
    banner.style.transform = "translateX(-100%)";
    if (works) works.style.transform = "translateX(-100%)";

    // toggle hambuger status
    hambuger.classList.add('active');
    isActive = true;
  }


  // function test(e) {
  //   console.log(e.target);
  // }
  // window.addEventListener('click', test);
  elements.forEach(element => element.addEventListener('click', collectionMove));
}());