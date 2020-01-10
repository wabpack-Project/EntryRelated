// 获取ID为test的元素text并返回
define('model',['jquery'], function($) {
	var add = function() {
		return $("#test").text();

	};
	return {
		add: add
	};
});
// 定义trim方法
define('utils',[],function() {
	var utils = {
		trim: function(e) {
			return e.replace(/(^\s*)|(\s*$)/g, "");
		},
		ltrim: function(e) {
			return e.replace(/(^\s*)/g, "");
		},
		rtrim: function(e) {
			return e.replace(/(\s*$)/g, "");
		}
	};
	return utils;
});
require.config({
	baseUrl: 'js',
	paths: {
		"jquery": "http://libs.baidu.com/jquery/2.0.3/jquery",
		"model": "script/model",
		"utils": "script/utils"
	}
});

require(['model', 'utils'], function(model, utils) {
	console.log(model.add());
	console.log(utils.trim(model.add()));
});

define("script/main", function(){});

