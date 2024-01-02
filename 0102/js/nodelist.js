// 데이터 삽입 (텍스트 입력 폼 -> 데이터 삽입)

// 새로운 P 요소 노드 삽입
let newP = document.createElement("p");

// 텍스트 노드 추가하기
let newText = document.createTextNode("Typescripte");

// p에 텍스트 노드 연결하기
newP.appendChild(newText);

// body에 p 노드 연결하기
document.body.appendChild(newP);


//===========================================================

function addText() {
  let new_p = document.createElement("p");
  let new_text = document.createTextNode(document.querySelector("#word").value);
  // let nodeBttn = document.createElement("button")
  // let textBttn = document.createTextNode("삭제")

  new_p.appendChild(new_text); //텍스트 p에 연결
  document.body.appendChild(new_p); //바디에 연결
  new_p.setAttribute("class", "pf")
  // document.body.insertBefore(new_p, document.body.childNodes[0]);
  document.querySelector("#word").value = "" //텍스트 입력 창 초기화
  document.querySelector("#word").focus(); // 추가하고 바로 커서 이동
  
  document.querySelectorAll("h1")[1].remove(); //직접삭제
}

// ==============================================================

//이미지 노드/속성 노드 삽입하기
var addImg = document.querySelector("#addImg")

addImg.addEventListener("click", () => {
  var newImg = document.createElement("img"); //요소노드
  // var srcNode = document.createAttribute("src"); //속성노드
  // var altNode = document.createAttribute("alt"); //속성노드

  //속성값 지정
  // srcNode.value = "/images/morning.jpg"
  // altNode.value = "삽입된 이미지"
  //요소 노드 연결
  newImg.setAttribute("src", "/images/wall.jpg");
  newImg.setAttribute("alt", "추가된 이미지입니다.");
  //최종 문서에 연결
  //특정 위치에 이미지 삽입(첫 번째 p태그 앞에)
  let location = document.querySelectorAll("p")[0];
  document.body.insertBefore(newImg, location);
  
},{once:true}) //한번 실행하고 나면 다시 실행하지 않는다


//내용 클릭 시 삭제
//모든 p태그 가져오기
let items = document.querySelectorAll("p");

// 가져온 p태그 항목에서 특정 위치 p 선택
for (item of items) {
  item.addEventListener("click", function () {
    this.parentNode.removeChild(this); // 'remove' 함수를 사용하여 현재 클릭된 요소를 삭제
  });
}