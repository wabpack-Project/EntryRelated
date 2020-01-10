var Book = function (id, name, price) {
  // 私有属性
  var num = 1;
  // 私有方法
  function checkId() {
	
  };
  // 特权方法
  this.getName = function () {
	
  };
  this.setName = function (name) {
	this.name = name;
  };

  // 对象共有属性
  this.id = id;

  // 对象共有方法
  this.copy = function () {

  };

  // 构造器
  this.setName(name);

}

var book = new Book(11, "javaScript设计模式", 50);
console.log(book.num);
console.log(book.isJSBook);
console.log(book.id);
console.log(book.isChinese);