// 立即执行函数写法
var module2 = (function(){

	var _count = 0;

	var m1 = function(){
		//...
		console.log("立即执行函数写法+m1");
	};

	var m2 = function(){
		//...
		console.log("立即执行函数写法+m1");
	};

	return {
		m1 : m1,
		m2 : m2
	};

})();