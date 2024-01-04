let number = Math.floor(Math.random()*45)+1
lotto = [];


function getNumber() {
  let number = Math.floor(Math.random()*45)+1;
  return number
}

for (let i=1; i<=6; i++) {
  randomNum = getNumber()
  if (lotto.includes(randomNum) == false) {
    lotto.push(randomNum)
  } else {
    continue
  }
} 

const result = document.querySelector("#result")
result.innerHTML=lotto

