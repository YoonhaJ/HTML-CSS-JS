const member1 = ["HTML", "CSS"]
const member2 = ["CSS", "자바스크립트", "리액트"]
const member3 = ["자바스크립트", "타입스크립트"]

let subjects1 = new Set([...member1, ...member2, ...member3]);
console.log([...subjects1])
let resultList = [...subjects1];

const result = document.getElementById("result")

result.innerHTML = `
  <ul>
    ${resultList.map(list =>`<li>${list}</li>`).join('')}
  </ul>
`