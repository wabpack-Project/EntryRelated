### querySelector 报错
querySelector div[data-payment] 方式不会出错
document.querySelector("div[data-v="+ global.hash +"]") 错误概率很高
原因在于   字符串转译造成错误




