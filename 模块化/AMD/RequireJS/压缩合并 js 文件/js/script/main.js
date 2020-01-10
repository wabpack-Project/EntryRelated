require.config({
	baseUrl: 'js',
	paths: {
		"jquery": "lib/jquery",
		// "jquery": "http://libs.baidu.com/jquery/2.0.3/jquery",
		"model": "model",
		"utils": "utils"
	}
});

require(['model', 'utils'], function(model, utils) {
	console.log(model.add());
	console.log(utils.trim(model.add()));
});
