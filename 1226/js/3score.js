let inputNumber = prompt("숫자를 입력해주세요");

if (inputNumber !== null) {
(inputNumber%3 ==0) ? alert('3의 배수입니다.') : alert('3의 배수가 아닙니다.')
} else {
  alert('입력이 취소되었습니다.')
}