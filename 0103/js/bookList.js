const title = document.querySelector("#title")
const author = document.querySelector("#author")
const save = document.querySelector("#save")
const bookList = document.querySelector("#bookList")


// 저장하기 버튼 -> 북 리스트
save.addEventListener("click", addItem);

function addItem (event) {
  event.preventDefault(); //발생한 이벤트에 대한 초기화

  const bookLi = document.createElement("li");  //li요소 생성
  bookLi.innerHTML = `${title.value} - ${author.value} 
  <span class="delButton">삭제</span>`;
  bookList.appendChild(bookLi)

  //입력한 값 초기화
  title.value =""; author.value="";
  title.focus();


  
  // =======목록 삭제==========
  const delButtons = bookLi.querySelectorAll(".delButton"); //삭제버튼 리스트
  
  //전체 목록을 돌면서 선택된 위치 확인
  for (let delButton of delButtons) {
    delButton.addEventListener("click", removeItem);
  }
  function removeItem () {
    let list = this.parentNode; //부모 노드 확인
    list.parentNode.removeChild(list)
  }
    
}



