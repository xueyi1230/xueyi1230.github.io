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


});
