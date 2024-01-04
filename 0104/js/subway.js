// 한 번 쓰면 사용할 수 없는 - 이터레이터 형식 이용


let train = ["판교", "이매", "삼동", "경기광주", 
"초월", "곤지암", "신둔도예촌", "이천", "부발", "세종대왕릉", "여주"];




// 제너레이터 함수 function*  --> 순서적으로 나열되어있는 데이터 
function* train2() {
  yield "판교";
  yield "이매";
  yield "삼동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "부발";
  yield "세종대왕릉";
  yield "여주";
}

// let kang = train2();  //제너레이터를 이용한 이터러블 생성
let kang = train[Symbol.iterator](); //배열  -> 이터레블 생성    이터레블=반복사용불가

const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  let current = kang.next();
  
  if (current.done !== true) {
    result.innerHTML = current.value
  } else {
    result.innerHTML = "종점";
    button.setAttribute("disabled", "disabled");  //버튼 비활성화 
  }
});

