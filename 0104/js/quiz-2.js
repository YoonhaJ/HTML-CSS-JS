const origin = document.querySelector("#origin")
const result = document.querySelector("#result")

// const nums = document.querySelector("#container h1").innerText.slice(10,24).split(",")
const originalArray = [2, 4, 6, 8, 10];


for (let num of originalArray) {
  origin.innerHTML += num + ' '
}

originalArray.splice(0,1)
for (let num of originalArray) {
  result.innerHTML += num + ' '
}