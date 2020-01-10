// 压缩单个js文件
/*
({
	name: "../js/test",
	out: "../dist/jquery-1.11.1-build.js",
});
*/

// 压缩一个模块及其相关依赖
({
	baseUrl: '../js',
	name: "main",
	out: "../dist/main-build.js",
	optimize: "none",
	paths: {
		// 引用项目内部路径
		// jquery: 'lib/jquery',
		// 应用外部路径
		// jquery: 'http://libs.baidu.com/jquery/2.0.3/jquery',
		// 排除出不需要合并的文件
		jquery: "empty:"
	}
})






