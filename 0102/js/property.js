// 모든 요소를 가져와 elements에 저장
const elements = document.querySelectorAll("*");

// 모든 요소를 순회하면서 click 이벤트가 발생하면
// event.target / event.currenTarget에 대한 정보 출력
for (let element of elements) {
  element.addEventListener("click", (e) => {
    console.log(`event.target : ${e.target.tagName}, 
    event.currnetTarget : ${e.currentTarget.tagName}`)
  }, true); // 이벤트 캡처링 (상위->하위) (false -> 기본값, 이벤트 버블링 (하위 -> 상위))
}