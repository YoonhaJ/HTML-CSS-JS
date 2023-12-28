//매개변수 함수
function func_1() {
function calc(n) {
  let sum = 0;
  for(let i = 1; i<n+1; i++) {
    sum += i;
  }
  return sum
}

let result = calc(parseInt(prompt("어디까지 숫자를 더할까요")));
document.write(result)
}

// 익명함수
function func_2() {
  var sum = function(a,b) {
    return a+b;
  }
  document.write("함수 실행 결과 : "+sum(10,20))
}

//즉시 실행 함수
function func_3() {
  (function() {
    var userName = prompt('이름을 입력하세요')
    document.write("안녕하세요 "+userName+"님!")
  }());
}

//매개변수가 있는 즉시 실행 함수
function func_4() {
  (function(v1,v2) {
    sum = v1 + v2
  }(100, 200));
  document.write("함수 실행 결과 : "+sum)
}

//화살표 함수 (익명함수에 적용)
function func_5() {
  var h1 = user => user+"님 안녕하세요";
  document.write("함수 실행 결과 : "+h1("윤하")) //문자열값으로 줘야함
}


// 익명함수
function func_6() {
let add = function(a, b) {
  return a + b;
}

  let num1 = parseInt(prompt("첫 번째 값:"))
  let num2 = parseInt(prompt("두 번째 값:"))
  let result = add(num1,num2);
  console.log('add 함수 실행 결과 : '+result);

}

//색깔 변경
let colorChn = (num) => {
  var color = ['white', 'yellow','blue','purple']
  return color[num-1]
}
//id가 thebody에 해당되는 객체
let changeColor = () => {
  let num = parseInt(prompt('1부터 4까지 숫자를 입력하세요'))
  var bodyTag = document.getElementById("theBody");
  bodyTag.style.backgroundColor = colorChn(num);
}


