   $(function(){
            $('.sliders').bxSlider({
                auto: true,// 자동재생(true/false)
                mode: 'horizontal', // 전환옵션 (방향 fade)
                speed: 500,
                pause: 2000 //재생간격(권장값 5~10초)
                
            });
       $('.sliders2').bxSlider({
                auto: true,// 자동재생(true/false)
                mode: 'horizontal', // 전환옵션 (방향 fade)
                speed: 500,
                pause: 2000 //재생간격(권장값 5~10초)
                
            });
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