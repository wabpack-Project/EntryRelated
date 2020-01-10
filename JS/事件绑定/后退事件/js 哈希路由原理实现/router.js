window.onload = function(){
	(function(){
		var Router=function(){
			this.routes={};
			this.curUrl='/';
		};
		// 对路由的hash值进行监听，如果发生改变，则调用reloadPage()函数
		Router.prototype.init= function(){
			// 这里的两个this 是不一样的，需要注意
			window.addEventListener('hashchange',this.reloadPage.bind(this) );
		};
		// 调用reloadPage函数，实际上时执行routes[]()函数
		Router.prototype.reloadPage = function(){
			this.curUrl = location.hash.substring(1)||'/';
			this.routes[this.curUrl]();
		};
		// 路由配置的规则
		Router.prototype.map = function(key,callback){
			this.routes[key] = callback;
		}
		window.Router = Router;
	})();

	var ORouter = new Router();
	ORouter.init();

	location.hash = "/03";

	// 以下为路由配置的设置，形象的当做一个路由与调用函数的映射表也可以
	ORouter.map('/',function(){
		var Osect = document.querySelector('section');
		Osect.innerHTML = "欢迎来到火星，这是一次非常的旅行，祝您路途愉快！";
	});
	ORouter.map('/01',function(){
		var Osect = document.querySelector('section');
		Osect.innerHTML = "huanying2015 huanying2015 huanying2015 huanying2015 huanying2015 huanying2015 huanying2015 huanying2015 huanying2015 huanying2015 huanying2015 huanying2015 huanying2015 ";
	});
	ORouter.map('/02',function(){
		var Osect = document.querySelector('section');
		Osect.innerHTML = "hehehehehheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeheheehehehhehehehhehehehehheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeheheehehehhehehehhehehehehheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeheheehehehheheheh";
	});
	ORouter.map('/03',function(){
		var Osect = document.querySelector('section');
		Osect.innerHTML = "nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  nihao  ";
	});
	ORouter.map('/04',function(){
		var Osect = document.querySelector('section');
		Osect.innerHTML = "i am fine i am fine i am fine i am fine i am fine i am fine i am fine i am fine i am fine i am fine i am fine i am fine i am fine i am fine i am fine i am fine i am fine ";
	});
	ORouter.map('/05',function(){
		var Osect = document.querySelector('section');
		Osect.innerHTML = "good night ood night ood night ood night ood night ood night ood night ood night ood night ood night ood night ood night ood night ood night ood night ood night ood night ood night  ";
	});
}