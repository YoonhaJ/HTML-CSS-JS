const box = document.querySelector("#box")
const container = document.querySelector("#container")

// 마우스 위치값 출력
box.addEventListener("click", (e) => {  //클릭 이벤트 객체
  alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`)
})

// 이미지 이동
const pics = ["pic-1.jpg","pic-2.jpg","pic-3.jpg","pic-4.jpg","pic-5.jpg","pic-6.jpg",] //배열

// 첫화면 이미지 표시(기본이미지)
container.style.backgroundImage = `url(/images/${pics[0]})`;

//화살표에 의한 이미지 출력
const arrows = document.querySelectorAll(".arrow");
let i = 0;

arrows.forEach((arrow) =>{
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--; //i=-1이 되면 i=5로 바뀌게
      if (i < 0 ) {
        // i = 5;
        i = pics.length - 1
      }
    } else if(e.target.id === "right") {
      i ++;
      if (i >= pics.length) {
        i = 0
      }
    }
    container.style.backgroundImage = `url(/images/${pics[i]})`
  });
});

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("마우스 오른쪽 버튼을 사용할 수 없습니다.")
})