var n = parseInt(prompt("숫자를 입력하세요"));
var message = "";

if(!isNaN(n) && n>=0) {
  var nFact = BigInt(1); //결과값
  var i = BigInt(1); //증가값
  do {
    nFact *= i;
    i ++;
  } while(i<=BigInt(n))
  message = n + "! = " + nFact;
} else {
  message = "값을 입력하지 않았습니다.";
}
document.write (message);

// BigInt는 일반적으로 매우 큰 정수 또는 
// 정밀한 정수 연산이 필요한 경우


// var n = parseInt(prompt("숫자를 입력하세요"));
// var message = "";

// if (!isNaN(n) && n >= 0) {
//   var nFact = BigInt(1);
//   for (var i = BigInt(1); i <= BigInt(n); i++) {
//     nFact *= i;
//   }
//   message = n + "! = " + nFact.toString();
// } else {
//   message = "올바른 값을 입력하세요.";
// }

// document.write(message);
