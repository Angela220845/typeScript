// string、 number、 Array<number>、 number[]、 any[]、 enum、 object、 类型断言： as 关键字、 解构赋值、展开运算、
// any 定义时不确定变量类型
// void 函数没有返回值时
let oldName: string = "ty",
  age: Number = 33,
  dataList: Array<number> = [1, 2, 3];
let age1: [number, string] = [2, "r"];
enum color {
  red = 1,
  green = 5,
  blue
}
let c = color.green;

let age111: any = 2;

age111 = "asa";

let list: any[] = [1, true, "test"];
function lojkk(): void {
  console.log("hhhhhhh");
}
let bbb: object = null;
bbb = {
  name: "1"
};
oldName = null;
// 类型断言
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength1: number = (someValue as string).length; //jsx允许

// 解构赋值
let input = [1, 2];
let [first, b] = input;
// 1、数组
let [second, ...set] = [1, 2, 4, 5];
// 对象
let o = {
  a: "foo",
  buuu: "ass"
};
let { a, buuu } = o;
({ a, buuu } = {
  a: "ty",
  buuu: "23"
});

// 函数声明 （解构）????
type c = { a: string; b?: number };
function f({ a = "", b = 1 } = {}): void {}

// 展开运算
// 1、数组
let arr1 = [1];
let arr2 = [4, 5];
let arr3 = ["aa", ...arr1, ...arr2];
// 2、对象
let defaults = { obj1: "yyy", price: 12 };
let swar = { ...defaults, food: "2222" };

// 接口（类型检查器） 调用函数时传参 检查参数是否符合要求，带问号表示为可选参数

// 例子1：函数调用
// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });

// console.log(mySquare);

// 例子2 对象定义
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// 例子3 数组 ReadonlyArray<number>
let tets1: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  // ...
  return { color: "aa", area: 1 };
}

let hisSquare = createSquare({ color: "red", width: 100 });
console.log(hisSquare);

// 字符串索引签名
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // 字符串索引签名
}

// 例子4 函数 参数列表  ??
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// i
let mySearch1: SearchFunc;
mySearch1 = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
// ii
let mySearch2: SearchFunc;
mySearch2 = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}