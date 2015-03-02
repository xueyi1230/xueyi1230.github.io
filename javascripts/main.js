require.config({
	//baseUrl : 'script/',
	paths : {
		'jquery' : 'base/jquery',
		'baiduTemplate' : 'base/baiduTemplate'
	}
});

require(['jquery','baiduTemplate'],function($){
	console.log('早上好，中午好，晚上好，欢迎光临xueyi的博客：）');

	$.ajax({
		url :"pages/index.json",
		async : false,
		success : function(data){
			var index = baidu.template('tpl',data);
			$("#main_content").html(index).children().show(1000);
			setTimeout(function(){
				$("#gotop").show().click(function(){
					$('body').animate({scrollTop:0},700);
				});
			},500);
		}
	});



});
