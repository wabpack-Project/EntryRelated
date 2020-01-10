({
	appDir: '../src',
	baseUrl: 'js',
	dir: '../dist',
	modules: [
		{
			name: 'script/main',
		}
	],
	fileExclusionRegExp: /^(r|build)\.js$/,
	optimizeCss: 'standard',
	removeCombined: true,
	generateSourceMaps: true,
	paths: {
		jquery: 'lib/jquery',  // 压缩
		// jquery: 'empty:',			// 过滤不压缩
		model: 'script/model',
		utils: 'script/utils',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	}
});