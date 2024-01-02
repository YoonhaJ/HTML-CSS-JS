// window.onload = alert("새해 복 많이 받으세요.");

// const btn = document.getElementsByTagName("button")
const btn = document.querySelectorAll("button")[0]

btn.ondblclick = () => {
  alert("새해 복 많이 받으세요.")
  document.body.style.backgroundColor = "#e9edc9";
}

const body = document.body;
var result = document.querySelector(".result");

// 특정키를 누르는 동안 이벤트 발생
body.addEventListener("keydown", (eve) => {
  if (eve.key === "p") {
    result.innerText = "새해 복 많이 받으세요"
  } else {

  result.innerText = `code : ${eve.code}, key : ${eve.key}`
  }
});

function wordLen() {
  const word = document.querySelector("#words").value; // 입력받은 텍스트 값 가져오기
  
  document.querySelector(".result").innerText = word.length;
  // result.innerText = `${word.length}`;
}