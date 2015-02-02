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
		url :"index.json",
		async : false,
		success : function(data){
			var test = baidu.template('tpl',data);
			document.getElementById('result').innerHTML = test;
		}
	});

});
