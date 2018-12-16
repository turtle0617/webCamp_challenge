let isActive = false;
(function() {
  const home = document.querySelector('#home');
  const banner = document.querySelector('#banner');
  const hambuger = document.getElementById("hambuger");
  const navbar = document.querySelector('.navbar');
  const contactBtn = document.querySelector('.contact_btn');
  const contactPage = document.querySelector('.contacts');
  const works = document.querySelector("#kerway_works_page");
  const couturePage = document.querySelector(".couture_slides");

  hambuger.addEventListener("click", function () {
    isActive = !isActive;
    if (isActive && Array.from(navbar.classList).indexOf('active') === -1) {
      navbar.classList.add('active');
    } 
    if (!isActive) {
      navbar.classList.remove("active");
      contactPage.classList.remove("contacts-active");
      home.style.transform = "translateX(0)";
      banner.style.transform = "translateX(0)";
      if (works) works.style.transform = "translateX(0)";
      if (couturePage) couturePage.style.transform = "translateX(100%)";
      contactBtn.style.zIndex = "100";
    }

    this.classList.toggle("active");
  });
}());