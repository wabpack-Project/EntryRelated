// 第一种导出的方式：
/*
let bar = "stringBar";
let foo = "stringFoo";
let fn0 = function() {
	console.log("fn0");
};
let fn1 = function() {
	console.log("fn1");
};
export { bar, foo, fn0, fn1};
*/

// 第二种导出的方式：
/*
let fn0 = function() {
	console.log("fn0");
};
let obj0 = {}
export { fn0 as foo, obj0 as bar};
*/

// 第三种导出的方式
// export let foo = ()=> {console.log("fnFoo") ;return "foo"},bar = "stringBar";

// 第四种导出的方式：

/*

export default "string";

* */


