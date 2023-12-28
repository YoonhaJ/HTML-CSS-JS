function subMulti (x, y) {
  if (x === y) {
    return x * y
  } else {return x + y}
}

var v1 = parseInt(prompt('첫 번째 숫자를 입력하세요'));
var v2 = parseInt(prompt('두 번째 숫자를 입력하세요'));
let result = subMulti(v1,v2);
console.log(result)