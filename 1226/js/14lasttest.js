document.write("<h1>4의 배수일까 아닐까</h1>");

var inputNumber = parseFloat(prompt('숫자를 입력하시오.'));

if (inputNumber !== Nan) {
  if(inputNumber %4 == 0) {
    document.write(`${inputNumber}는 4의 배수입니다.`)
  } else {
    document.write(`${inputNumber}는 4의 배수가 아닙니다.`)
  }
} else {
  document.write("")
}