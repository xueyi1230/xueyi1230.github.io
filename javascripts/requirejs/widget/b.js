define(['jquery', 'a'],function($, a){

	var myFunctionB = function(){
        $("#result").append("<br>b 已成功加载");			
		};

    var text = a.myFunctionA('<br>a 中的函数已成功调用');   
	var myFunctionBA = function(){
	    $("#result").append(text);			
		};

    return {
		myFunctionB : myFunctionB(),
		myFunctionBA : myFunctionBA
	};
});