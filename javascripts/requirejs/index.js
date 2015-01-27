require.config({
	//baseUrl : 'script/',
	paths : {
		'jquery' : 'base/jquery',
		'a' : 'widget/a',   //无依懒性模块
		'b' : 'widget/b'  //普通模块
	}
});

require(['jquery','b'],function($,b){
	$("#result").append("<br>jquery 已成功加载");
	$("#go_a").click(b.myFunctionBA);	
});