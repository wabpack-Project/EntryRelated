var Book = (function () {
  // 静态私有变量
  var bookNum = 0, _name;
  // 静态私有方法
  function checkBook(name) {
	_name = name;
    console.log(name);
  }
  // 创建类
  function book(newId, newName, newPrice) {

    // 私有变量
    var name, price;

    // 私有方法
    function checkID(id) {

	}

    // 特权方法
    this.getName = function () {
      console.log(_name);
	};
    this.getPrice = function () {

	};
    this.setName = function () {
      // console.log(newName);
      checkBook(newName);
	};
    this.setPrice = function () {

	};
    this.addBookNum = function (bookNum) {
	  bookNum++;

	  if (bookNum > 10){
		throw new Error("我们仅出版100本书。");
	  }
	  console.log(bookNum);
	};

    // 共有属性
    this.id = newId;

    // 共有方法
    this.copy = function () {

	};

    // bookNum++;
    // // console.log(bookNum);
    // if (bookNum > 10){
    //   throw new Error("我们仅出版100本书。");
    // }

	/**
	 * 构造器可以把参数直接传到特权方法内
     * 想要把参数传递给特权方法需要，给特权方法设置参数才能传递
	 */

    // 构造器
    this.setName(name);
    this.setPrice(price);

    this.addBookNum(bookNum);



  }
  // 构造原型
  book.prototype = {
    // 静态共有属性
    isJSBook : false,
    // 静态公有方法
    display : function () {
      
	}
  }
  return book;


})();

var _book = new Book(11, "javaScript设计模式", 50);
console.log("bookNum", _book.bookNum);
console.log(_book.num);
console.log(_book.isJSBook);
console.log(_book.id);
console.log(_book.isChinese);
console.log(_book.bookNum);

console.log(0);
_book.getName();
console.log(1);
_book.addBookNum(10);