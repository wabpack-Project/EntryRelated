// 定义trim方法
define(function() {
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