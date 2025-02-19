/*https://www.bilibili.com/video/BV1Np4y1C7xN?p=10*/

var createSingle = (function () {
return {a: 1};
})();

var c = createSingle;
var b = createSingle;

console.log(c === b);

// 网友提出的上面方法，若把createSingle的括号移动到最后，则不等于

function single(){
	return {a:1}
}
// var a1 = single()
// var a2 = single()
// a1 !=  a2

var createSingle = (function(_unique=single()){
    return function(){
		return _unique
	}
})()

var b = createSingle()
var c = createSingle()

b===c //true 若createSingle后面不用() 则false 

// 必须嵌套两个function, 才能保证后续生成对象的一致



