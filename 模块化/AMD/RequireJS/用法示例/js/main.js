// 配置引入模块、调用模块
require.config({
	paths: {
		// "jquery": "jquery",
		"jquery": "http://libs.baidu.com/jquery/2.0.3/jquery",
		"model": "model",
		"utils": "utils"
	}
});


require(['model', 'utils'], function(model, utils) {
	console.log(model.add());
	console.log(utils.trim(model.add()));
});