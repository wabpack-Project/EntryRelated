// 输入全局变量
var module6 = (function ($jq) {
	var _count = 0;

	console.log($jq);
	console.log($);
	console.log($("body"));
	console.log($jq("body"));

	var m9 = function(){
		//...
		console.log("输入全局变量+m9");
	};

	var m10 = function(){
		//...
		console.log("输入全局变量+m10");
	};

	return {
		m9 : m9,
		m10 : m10
	};

})(jQuery);