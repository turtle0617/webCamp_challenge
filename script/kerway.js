//HAMBURGER
const hambuger = document.getElementById("hambuger");
hambuger.addEventListener("click",function(){
  this.classList.toggle("active")
});

$(function() {
		var selectedClass = "";
		$(".filter_element_name").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#works").fadeTo(100, 0.1);
		$("#works div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-animation');
      $("#works").fadeTo(300, 1);
    }, 300); 
		
	});
});


