$(document).ready(function() {
 /* quick menu */
 $(".quick").animate( { "top": $(document).scrollTop() + 0 +"px" }, 500 ); // 빼도 된다.
 $(window).scroll(function(){
  $(".quick").stop();
  $(".quick").animate( { "top": $(document).scrollTop() + 0 + "px" }, 1000 );
     
 });
    
});
$(function(){
	// 2단계 메뉴 닫기
	$('.depth2').hide();
	
	// 메뉴 열고 닫기(hover)
	$('.depth1 > li').hover(
		function(){
			$('.depth2')
				.stop()
				.slideDown(200);
		},
		function(){
			$('.depth2')
				.stop()
				.slideUp(200);
		}
	);
});