// 노드리스트로 받아오기
let members = document.querySelectorAll("#member > li")
// 셋으로 합치기
let uniqueSubjects = new Set();

// 노드 리스트에서 과목 빼오기
for (let i = 0; i<3; i++) {
  let subject = members[i].innerText.split(":")[1].trim()
  // console.log(subject)
  let subj = subject.split(", ")
  // console.log(subj)
  subj.forEach(item => uniqueSubjects.add(item)) //셋에 항목 넣기 -> 중복 제외됨
}
// console.log(uniqueSubjects)  // 셋
let resultList = [...uniqueSubjects] // 중복 제외한 항목들 배열로 만들기
console.log(resultList) // 배열 - 리스트

// result에 li요소로 집어넣기
const result = document.querySelector("#result")
result.innerHTML = `<ul>${resultList.map(list => `<li>${list}</li>`).join('')}</ul>`



