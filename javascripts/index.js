require.config({
	//baseUrl : 'script/',
	paths : {
		'jquery' : 'base/jquery',
		'baiduTemplate' : 'base/baiduTemplate',
		'goTop':'widget/goTop',
		'hello':'widget/hello'
	}
});

require(['jquery','baiduTemplate','goTop','hello'],function($){
	$.ajax({
		url :"pages/index.json",
		success : function(data){
			var index = baidu.template('tpl',data);
			$("#main_content").html(index).children().show(1000);
		}
	});

});
