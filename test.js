var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
// string、 number、 Array<number>、 number[]、 any[]、 enum、 object、 类型断言： as 关键字、 解构赋值、展开运算、
// any 定义时不确定变量类型
// void 函数没有返回值时
var oldName = "ty", age = 33, dataList = [1, 2, 3];
var age1 = [2, "r"];
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 5] = "green";
    color[color["blue"] = 6] = "blue";
})(color || (color = {}));
var c = color.green;
var age111 = 2;
age111 = "asa";
var list = [1, true, "test"];
function lojkk() {
    console.log("hhhhhhh");
}
var bbb = null;
bbb = {
    name: "1"
};
oldName = null;
// 类型断言
var someValue = "this is a string";
var strLength = someValue.length;
var strLength1 = someValue.length; //jsx允许
// 解构赋值
var input = [1, 2];
var first = input[0], b = input[1];
// 1、数组
var _b = [1, 2, 4, 5], second = _b[0], set = _b.slice(1);
// 对象
var o = {
    a: "foo",
    buuu: "ass"
};
var a = o.a, buuu = o.buuu;
(_a = {
    a: "ty",
    buuu: "23"
}, a = _a.a, buuu = _a.buuu);
function f(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.a, a = _c === void 0 ? "" : _c, _d = _b.b, b = _d === void 0 ? 1 : _d;
}
// 展开运算
// 1、数组
var arr1 = [1];
var arr2 = [4, 5];
var arr3 = ["aa"].concat(arr1, arr2);
// 2、对象
var defaults = { obj1: "yyy", price: 12 };
var swar = __assign({}, defaults, { food: "2222" });
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
var p1 = { x: 10, y: 20 };
// 例子3 数组 ReadonlyArray<number>
var tets1 = [1, 2, 3, 4];
function createSquare(config) {
    // ...
    return { color: "aa", area: 1 };
}
var hisSquare = createSquare({ color: "red", width: 100 });
console.log(hisSquare);
// i
var mySearch1;
mySearch1 = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// ii
var mySearch2;
mySearch2 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
