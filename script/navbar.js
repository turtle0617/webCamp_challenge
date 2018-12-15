(function(){
  const campItemLinks = Array.from(document.querySelectorAll('.camp_item a'));
  const campItemTopLinks = Array.from(document.querySelectorAll('.camp_item_top a'));
  const campItemBottomLinks = Array.from(document.querySelectorAll(".camp_item_bottom a"));

  function hoverInEffect(e) {
    if (this.parentElement.classList[0] === "camp_item_top") {
      let index = campItemTopLinks.indexOf(this);
      this.children[0].style.filter = "invert(40%)";
      campItemBottomLinks[index].style.opacity = 1;
      campItemBottomLinks[index].children[0].style.filter = "invert(40%)";
    }

    if (this.parentElement.classList[0] === "camp_item_bottom") {
      this.style.opacity = 1;
      let index = campItemBottomLinks.indexOf(this);
      campItemTopLinks[index].children[0].style.filter = "invert(40%)";
    }
  }

  function hoverOutEffect(e) {
    if (this.parentElement.classList[0] === "camp_item_top") {
      let index = campItemTopLinks.indexOf(this);
      this.children[0].style.filter = "invert(0)";
      campItemBottomLinks[index].style.opacity = 0;
    }

    if (this.parentElement.classList[0] === "camp_item_bottom") {
      this.style.opacity = 0;
      let index = campItemBottomLinks.indexOf(this);
      campItemTopLinks[index].children[0].style.filter = "invert(0)";
    }
  }

  campItemLinks.forEach(cur => cur.addEventListener('mouseover', hoverInEffect));
  campItemLinks.forEach(cur => cur.addEventListener("mouseleave", hoverOutEffect));
}());