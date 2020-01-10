// 放大模式可以不用赋值给变量，初始变量值自动改变
(function (mod){

	mod.m5 = function () {
		//...
		console.log("放大模式可以不用赋值+m5");
	};

	mod.m6 = function () {
		//...
		console.log("放大模式可以不用赋值+m6");
	};

	return mod;

})(module2);
/*
var module1 = ( function (mod){

	//...

	return mod;

})(window.module1 || {});
*/