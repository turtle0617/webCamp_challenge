//漢堡點擊
const hambuger = document.getElementById("hambuger");
hambuger.addEventListener("click",function(){
  this.classList.toggle("active")
});

$(function() {

//filter選單點擊，照片挑選
  var selectedClass = "";
  $(".filter_element_name").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
    $("#works").fadeTo(100, 0.1);
    $("#works div").not("."+selectedClass).fadeOut().removeClass('scale-animation');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-animation');
      $("#works").fadeTo(300, 1);
    }, 300); 
    $(".works_title h3").text($(this).text());
    $(".works_title h4").hide();

  });

//fliter按鈕點擊，照片回復all
  $(".filter_button").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
    $("#works").fadeTo(100, 0.1);
    $("#works div").not("."+selectedClass).fadeOut().removeClass('scale-animation');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-animation');
      $("#works").fadeTo(300, 1);
    }, 300); 
    $(".works_title h3").text('WORKS');	
    $(".works_title h4").show();

  });	  

});

//點擊箭頭，滑到works的頂部

$(function(){
  // var selectedClass = "";
  $(".arrow_box").click(function(){
    $("#kerway_works_page").scrollTop(0);
  });
});


//頁面滑到底部，filter bar消失

// $(window).scroll(function(){
//      //最後一頁scrollTop=body-window，50是預留空間
//      last=$("body").height()-$(window).height()-50
//      if($(window).scrollTop()>=last){
//      $(".down").hide()
//      }
// })



