const selectMenu = document.querySelector("#major");
const userName = document.querySelector("#userName")
const bttnPrn = document.querySelector("button")

let displaySelect = () => {
  let selectNum = selectMenu.selectedIndex; //선택된 옵션 인덱스
  let seletcedText = selectMenu.options[selectNum].innerText;
  alert(seletcedText+"를 선택하셨습니다.");

  userName.value = selectMenu.options[selectNum].value
}
selectMenu.onchange = displaySelect

/////////////////라디오 버튼 /////////////////////
const userForm = document.querySelector("form") //form 전체

function selectRadio() {
  let radioButton = userForm.subject.value;
  alert("신청한 과목은 "+radioButton+"입니다.")

}

let selectPrn = () => {
  chkData = document.querySelectorAll("input[name='mailing']:checked")
  // console.log("====================")
  let txtPrn = "" // 선택한 값 누적
  for (aa of chkData) {
    console.log(aa.value)
    txtPrn += aa.value + ""
  }
  alert('선택한 값은 '+txtPrn+"입니다.")
}





