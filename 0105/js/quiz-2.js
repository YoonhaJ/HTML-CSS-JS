let num = document.querySelector("#user-number").value
const result = document.querySelector("#result")
const button = document.querySelector("button")

function correct (num) {
  if (num === "") {
    throw new Error("숫자를 입력하세요")
  }
  else if (num < 10) {
    result.innerHTML = num
    
  } else {
    alert("10보다 큰 숫자입니다")
  }
}

button.addEventListener("click", () => {
  try{
    correct(num)
  } catch(error) {
    alert(error.message)
  } finally {
    document.querySelector("#user-number").value = "";
  }

})