// 获取ID为test的元素text并返回
define(['jquery'], function($) {
	var add = function() {
		return $("#test").text();

	};
	return {
		add: add
	};
});