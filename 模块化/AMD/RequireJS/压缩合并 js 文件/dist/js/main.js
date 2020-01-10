console.log("加载成功！！！");

// 主模块依赖jquery、underscore和backbone这三个模块
/*
require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){

	// some code here
	console.log("主模块依赖完成！");
	alert("主模块依赖完成！");

});
*/

// 模块的加载
/*
require.config({
	paths: {
		"jquery": "jquery.min",
		"underscore": "underscore.min",
		"backbone": "backbone.min"
	}
});
*/
// 一种是逐一指定路径。
/*
require.config({
	paths: {
		"jquery": "../lib/jquery.min",
　　	"underscore": "../lib/underscore.min",
　　	"backbone": "../lib/backbone.min"
	}
});

require(["underscore", "jquery", "backbone"], function (index, $) {
	// do something after loading index.js
	// hello();
	console.log("主模块依赖完成！");
});

*/

// 另一种则是直接改变基目录（baseUrl）。
/*
require.config({
	baseUrl: "lib",
	paths: {
		"jquery": "jquery.min",
		"underscore": "underscore.min",
		"backbone": "backbone.min"
	}
});

require(["underscore", "jquery", "backbone"], function (index, $) {
	// do something after loading index.js
	// hello();
	console.log("主模块依赖完成！");
});

*/

/*
require.config({
	baseUrl: "js/bin",
	paths: {
		"a": "a",
		"underscore": "underscore.min",
		"backbone": "backbone.min"
	}
});

require(["a"], function (index, $) {
	// do something after loading index.js
	// hello();
	a();
	console.log("主模块依赖完成！");
});

*/

// 如果某个模块在另一台主机上，也可以直接指定它的网址
/*
require.config({
	paths: {
		"jquery": "http://libs.baidu.com/jquery/2.0.3/jquery",
		"test"	: "test"
	}
});


require(["test", "jquery"], function (index, $) {
	// do something after loading index.js
	hello();
	console.log("主模块依赖完成！");
});
*/

// AMD模块的写法
/*
require(['math'], function (math){

	alert(math.add(1,1));

});
*/

// 加载非规范的模块（shim的使用方式）
// /*
require.config({

	shim: {

		'app': { //这个键名为要载入的目标文件的文件名，不能随便命名。
			exports: 'sayHello' //exports的值为my.js提供的 对外接口的名称
		}

	}

});


require(['app'], function(sayHello) {
	alert(sayHello1("hello!!!"))
});
// */

/*
require.config({
	shim: {
		app: {
			init: function() { //这里使用init将2个接口返回
				return {
					sayHi: sayHi,
					sayHello: sayHello
				}
			}
		}
	}
});

require(['app'], function(a) {
	a.sayHi('zhangsan');
	a.sayHello('lisi');
});
*/






