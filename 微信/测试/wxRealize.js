// 微信功能实现
;(function(undefined) {
  // 对象合并
	function extend(o,n,override) {
		for(var key in n){
			if(n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)){
				o[key]=n[key];
			}
		}
		return o;
	}
  // 构造函数
  function wxRealize(opt, shareData) {
    // 默认参数
    var def = {
			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId: "wxa1d83c73d2cc1a7b", // 必填，公众号的唯一标识
			timestamp: "", // 必填，生成签名的时间戳
			nonceStr: "", // 必填，生成签名的随机串
			signature: "",// 必填，签名
			jsApiList: ["checkJsApi", "scanQRCode", "hideOptionMenu", "stopRecord", "startRecord", "translateVoice", "updateAppMessageShareData", "updateTimelineShareData", "onMenuShareTimeline",
				"onMenuShareAppMessage"] // 必填，需要使用的JS接口列表
    }
    // 配置参数
		this.def = extend(def, opt, true);
    // 初始化
    this.init(shareData);
  }
  // 构造函数方法
	wxRealize.prototype = {
    init: function (data) {
      var _this = this;
      console.log(this.def);
			wx.config(this.def);
			wx.error(this.error);
			// this.wxShareData(data);
      // 页面加载时就调用相关接口
			wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
				_this.readyHand(data);
			});
			// 用户触发时才调用的接口
			// _this.directHand();
		},
		error: function(res){
			// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
			console.log("error!--错误原因分析");
			console.log(res.errMsg);
		},
		directHand : function(){

    },
    readyHand : function(data) {
      // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
			wx.onMenuShareAppMessage({
				title   : data.title, // 分享标题
				desc    : data.desc, // 分享描述
				link    : data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl  : data.imgUrl, // 分享图标
				success : data.success
			}, function(res) {
				console.log("test==========",res)
				//这里是回调函数
			}, function(err){
				console.log('err:', err)
			});
			// 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
			wx.onMenuShareTimeline({
				title   : data.title, // 分享标题
				link    : data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl  : data.imgUrl, // 分享图标
				success : data.success
			});
    },
    wxShareData: function(data) {

    }
  }
	// 最后将插件对象暴露给全局对象
	var _global = (function(){ return this || (0, eval)('this'); }());
	// 判断是否存在加载器
	if (typeof module !== "undefined" && module.exports) {
		module.exports = plugin;
	} else if (typeof define === "function" && define.amd) {
		define(function(){return plugin;});
	} else {
		!('Lc' in _global) && (_global.Lc = wxRealize);
	}
	// 实例化操作
	Lc.onload = function (opt, shareData) {
    var _wxRealize = new wxRealize(opt, shareData);
		// _wxRealize.init(shareData);
	}
}());
