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

	$(".article-title").click(function(){
		if($(this).children("i").hasClass("icon-close")){
			$(this).children("i").removeClass("icon-close").addClass("icon-open");
		}else{
			$(this).children("i").removeClass("icon-open").addClass("icon-close");
		}
		$(this).next("div").slideToggle(500);
	});
});
