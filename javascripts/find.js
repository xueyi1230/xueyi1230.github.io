require.config({
	//baseUrl : 'script/',
	paths : {
		'jquery' : 'base/jquery',
		'goTop':'widget/goTop',
	}
});

require(['jquery','goTop'],function($){

	//若ie则不显示问候消息
	if(!window.ActiveXObject){
		console.log('早上好，中午好，晚上好，感谢您阅读我的简历：）');
	}

	$("h4").click(function(){
		$(this).next("ul").slideToggle(700);
	});
});
