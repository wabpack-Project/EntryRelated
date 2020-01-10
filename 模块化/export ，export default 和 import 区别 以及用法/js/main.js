// 第一种导出的方式：
/*
import {bar, foo, fn0, fn1} from "./lib";
console.log(bar+"_"+foo);
fn0();
fn1();
*/

// 第二种导出的方式：
/*
import {foo, bar} from "./lib";
foo();
console.log(bar);
*/

// 第三种导出的方式
/*
import {foo, bar} from "./lib";
console.log(foo());
console.log(bar);
*/

// 第四种导出的方式：
import defaultString from "./lib";
console.log(defaultString);