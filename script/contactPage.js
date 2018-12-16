(function(){
  const contact = document.querySelector(".contacts");
  const contactBtn = document.querySelector(".contact_btn");
  const banner = document.querySelector("#banner");
  const hambuger = document.querySelector('#hambuger');

  function contactPageSlide(e) {
    contact.classList.add('contacts-active');
    home.style.transform = "translateX(-100%)";
    // banner.style.transform = "translateX(-100%)";
    this.style.zIndex = '-1';

    // toggle hambuger status
    hambuger.classList.add('active');
    isActive = true;
  }

  contactBtn.addEventListener("click", contactPageSlide);
}());