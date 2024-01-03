//체크 표시 부분으로 노드리스트 -> 리스트의 각 체크마다 함수 할당
const checks = document.querySelectorAll(".check")

for (let check of checks) {
  check.addEventListener("click", () => {
  // 체크의 부모요소
  const todo = check.parentElement; //부모요소 =li 요소

    // 체크요소의 부모인 li 요소에 대해 클래스 토글
    todo.classList.toggle("active")
  })
}
