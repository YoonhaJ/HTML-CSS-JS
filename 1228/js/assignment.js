/*function maxdiv() {
  divList1 = [];
  divList2 = [];
  var x = parseInt(prompt("첫 번째 숫자를 입력하세요."));
  var y = parseInt(prompt("두 번째 숫자를 입력하세요."));
  
  for (let i=1; i<=x; i++) {
    if (x % i == 0) {
      divList1.push(i)
    }
  } 
  for (let j=1; j<=y; j++) {
    if (y % j == 0) {
      divList2.push(j)
    }
  } 
  
  // console.log(divList1)
  // console.log(divList2)

  var same = divList1.filter(it => divList2.includes(it));
  // console.log(same)

  let result = same[same.length-1]
  console.log(result)
} */


/*
function maxdiv() {
  var x = parseInt(prompt("첫 번째 숫자를 입력하세요."));
  var y = parseInt(prompt("두 번째 숫자를 입력하세요."));
  var findDiv = 0;
  if (x >= y) {
    for (let i = 1; i<=x; i++) {
      if (x%i == 0 && y%i == 0) {
        findDiv = i;
      }
    }
  } else {
    for (let j = 1; j <=y; j++) {
      if (x%j ==0 && y % j == 0) {
        findDiv = j;
      }
    }
  }
  document.write("두 수의 최대공약수는 "+findDiv+"입니다.");
}
*/

// ************************************************************************************

// 1. 최대공약수
function func_2 () {
function getGCD(n,m) {
  let max = n > m ? n : m //삼중조건문 (조건식?True:False)
  let GCD = 0;

  for (let i = 1 ; i<= max ; i++) {
    if (n%i == 0 && m%i == 0) {
      GCD = i;
    }
  } 
  return GCD
}
let num1 = parseInt(prompt("첫 번째 숫자를 입력하세요."))
let num2 = parseInt(prompt("두 번째 숫자를 입력하세요."))
let result = getGCD(num1, num2)
document.write("두 수의 최대공약수는 "+result+"입니다.")
}


// 2. 양수 음수
function func_1() {
function isPositive(n) {
  
  if (n > 0) {
    alert('양수입니다.')
  } else if (n < 0) {alert('음수입니다.')}
    else if (n == 0) {alert('0입니다.')}
}

let number = parseInt(prompt("숫자를 입력하세요."))
if (!isNaN(number)) {    //숫자일 경우에만 실행 = number != NaN
  isPositive(number);
}

}




