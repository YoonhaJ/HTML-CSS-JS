var number1 = prompt("첫 번째 숫자를 입력하세요")
var number2 = prompt("두 번째 숫자를 입력하세요")

if(number1 < 10 || number2 < 10) {
  alert('2개의 숫자 중 적어도 하나는 10 미만입니다.')
} else {
  alert('2개의 숫자 모두 10 이상입니다.')
}
  