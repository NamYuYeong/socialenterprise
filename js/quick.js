$(document).ready(function() {
 /* quick menu */
 $(".quick").animate( { "top": $(document).scrollTop(0) + 0 +"px" }, 500 ); // 빼도 된다.
 $(window).scroll(function(){
  $(".quick").stop();
  $(".quick").animate( { "top": $(document).scrollTop() + 0 + "px" }, 1000 );
     
 });
});