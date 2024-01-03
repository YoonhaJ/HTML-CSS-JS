// open("출력문서", "창이름", "창옵션") :새창 띄우기
let openPopup = () => {
window.open("/html/notice.html", "이벤트팝업", "width=600, height=500, top=1000, lfet=1000");
}

const bttn1 = document.querySelector("#bt1");
bttn1.onclick = openPopup;

const bttn2 = document.querySelector("#bt2")
let popWidth = 600;
let popHeight = 500;

bttn2.addEventListener("click", () => {
  //화면의 위치를 자동 계산
  let left = (screen.availWidth - popWidth) / 2; //(화면 너비 - 팝업창 너비) /2
  let top = (screen.availHeight - popHeight) / 2;

  window.open("/html/notice.html", "이벤트팝업", `width=${popWidth}, height=${popHeight}, top=${top}, left=${left}`);
})
