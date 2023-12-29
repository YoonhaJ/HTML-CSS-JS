// 객체 선언
const title = document.querySelector("h1");
const pfimage = document.querySelector("#profile img")
const userName = document.querySelector(".desc p")
const userPt = document.querySelectorAll(".desc p");
const userAdress = document.querySelectorAll(".desc p")[1];

//nth-of-type() 같은 가상 클래스는 css! 스타일 변경



//함수 호출
title.onclick = () => {
  title.innerText = "프 로 필" //요소 내용 수정

  title.style.backgroundColor = "#f2eb8f" //스타일 적용
  title.style.color = "#777777"

} 


pfimage.onclick = () => {
  userName.innerHTML = "이름 : 앨리스"; 
  pfimage.src = "/img/face2.jpg"; //요소의 속성 변경
  pfimage.alt = "여자얼굴";
  userAdress.innerText = "주소 : 서울시 강서구 수명로2길"
  userPt[2].innerText = "연락처 : 010-2304-8627";
}


// let ch = () => {
//   title.innerText = "프 로 필"
// }


//자바스크립트의 스타일 변경 - css 속성에 접근하기 : 요소.style.속성명


// 다시 원래대로 되돌리기
let reset = () => {
  //제목을 원상태로 변경
  title.innerText = "My Profile"
  title.style.backgroundColor = "#fff"
  title.style.color = "black"

  //class 추가 제거
  userPt[3].classList.add("blue-italic"); //마지막 작성자에 클래스 추가하기
  userPt[0].classList.remove("clicked") //이름 class 지우기
}

//마우스 딸깍딸깍 효과
// ? 왜 reset을 눌르면 classAR이 안 먹힐까 ?
let classAR = () => {
  // title에서 clicked 클래스가 있으면 제거, 없으면 추가
  /*if (title.classList.contains("clicked")) {
    title.classList.remove("clicked")
  } else {title.classList.add("clicked")}*/
  title.classList.toggle("clicked") //한줄 컷 ㅋ
}