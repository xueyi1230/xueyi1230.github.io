require.config({
	//baseUrl : 'script/',
	paths : {
		'jquery' : 'base/jquery',
		'baiduTemplate' : 'base/baiduTemplate'
	}
});

require(['jquery'],function($){
	$("h4").click(function(){
		$(this).next("ul").slideToggle(700);
	});
	$("#gotop").click(function(){
		$('body').animate({scrollTop:0},700);
	});

	console.log('早上好，中午好，晚上好，感谢您阅读我的简历：）');
});
