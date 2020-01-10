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
