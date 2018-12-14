(function() {
  const hambuger = document.getElementById("hambuger");
  hambuger.addEventListener("click", function () {
    this.classList.toggle("active")
  });
}());