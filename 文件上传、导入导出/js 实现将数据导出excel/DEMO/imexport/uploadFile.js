/* 读取部分的操作start */
/*FileReader共有4种读取方法：
1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
2.readAsBinaryString(file)：将文件读取为二进制字符串
3.readAsDataURL(file)：将文件读取为Data URL
4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'*/

var wb;//读取完成的数据
var rABS = false; //是否将文件读取为二进制字符串

//导入
function importfun(obj,callback) {
	if(!obj.files) {
		return;
	}
	var f = obj.files[0];

	var reader = new FileReader();
	reader.onload = function(e) {
		var data = e.target.result;

		if(rABS) {
			wb = XLSX.read(btoa(fixdata(data)), {//手动转化
				type: 'base64'
			});
		} else {
			wb = XLSX.read(data, {
				type: 'binary'
			});
		}
		callback(f);
	};
	if(rABS) {
		reader.readAsArrayBuffer(f);
	} else {
		reader.readAsBinaryString(f);
	}
}

/* 读取部分的操作end */

var imExPortPlugin = {
	"import":function (obj) {
		importfun(obj.dom,function (res) {
			console.log(res);


			$.ajaxConfig.url = $.ajaxConfig.reqUrl("ajax_upload_batch_input");
			// http://h.lk.cn/ajax_upload_batch_input
			$.ajaxConfig.cache = false; 					//上传文件无需缓存
			$.ajaxConfig.processData = false; 		//用于对data参数进行序列化处理 这里必须false
			$.ajaxConfig.contentType = false; 		//必须

			var formFile = new FormData();
			// formFile.append("action", "UploadVMKImagePath");
			formFile.append("file", res); //加入文件对象

			// 请求参数
			$.ajaxConfig.data = formFile;
			// 请求数据
			$.ajaxConfig.reqDataApi($.ajaxConfig,function (res) {
				console.log(res);
				obj.success(res);
			});
		})
	},
}

