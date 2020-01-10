({
	appDir: '../',
	baseUrl: './js',
	dir: '../dist/',
	modules: [
		{
			name: 'main'
		}
	],
	fileExclusionRegExp: /^(r|build)\.js$/,
	optimizeCss: 'standard',
	removeCombined: true,
	// paths: {
	// 	jquery: 'lib/jquery-1.11.1',
	// 	underscore: 'lib/underscore',
	// 	backbone: 'lib/backbone'
	// },
	// shim: {
	// 	underscore: {
	// 		exports: '_'
	// 	},
	// 	backbone: {
	// 		deps: [
	// 			'underscore',
	// 			'jquery'
	// 		],
	// 		exports: 'Backbone'
	// 	}
	// }
});