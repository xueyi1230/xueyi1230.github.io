define(['jquery'],function($){

	var goTop = function(){
		setTimeout(function(){
			$("#gotop").show().click(function(){
				$('body').animate({scrollTop:0},700);
			});
		},500)
	};
	return {
		goTop: goTop()
	};

});