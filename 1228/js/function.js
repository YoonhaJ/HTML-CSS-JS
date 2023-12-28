//매개변수에 기본값 설정
function multiple(a,b=1,c=0) {
  return a*b+c;
}
console.log(multiple(12));

//매개변수보다 많은 인수 처리(나머지 매개변수) -> 나머지 버림
function add(a,b) {
  return a + b;
}
//매개변수 개수 모를 때 입력된 데이터 모두 처리
function sub(a, ...num) {
  for (let i=0; i <num.length; i++) {
     a += num [i];
  }
  return a; // a = 1, num = [2,3,4,5]
}

console.log(add(10,2,3,4))
console.log(sub(1,2,3,4,5))


//즉시 실행 함수
// (function() {
//   var userName = prompt('이름을 입력하세요.');
//   console.log(userName+"님 안녕하세요.")
// }());

function hi_1() {
(function() {
  var userName = prompt('이름을 입력하세요')
  var myLog = console.log
  myLog("안녕하세요 "+userName+"님!")
}());
}

//화살표 함수
function hi_2() {
((name, email) => {
  console.log("사용자 이름은 "+name+"이고 \n이메일은 "+email+"입니다.")
})("전윤하", "dbsgk010624@naver.com")
}