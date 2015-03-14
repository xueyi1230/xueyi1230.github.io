require.config({
	paths : {
		'jquery' : 'base/jquery',
		'goTop':'widget/goTop',
		'hello':'widget/hello'
	}
});

require(['jquery','goTop','hello'],function($){
});
