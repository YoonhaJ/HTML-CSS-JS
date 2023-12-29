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

const num1=document.querySelector('#number1');
const num2=document.querySelector('#number2');
const btttn = document.querySelector("#calc")
const resultDiv = document.querySelector("#result")

btttn.onclick = () => {
  resultDiv.innerHTML = getGCD(num1.value,num2.value)
}