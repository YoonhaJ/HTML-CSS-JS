const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close")

function openPro() {
  // console.log("openPro함수호출")
  modalBox.classList.toggle("active");  //모달 화면 출력(active 클래스 추가)
}


close.addEventListener("click", () => {
  modalBox.classList.toggle("active")
})