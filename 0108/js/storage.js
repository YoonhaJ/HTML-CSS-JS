// Storage에 값 저장
let users = ["Kim", "Seo", "Lee", "Park"];
localStorage.setItem("users", JSON.stringify(users));

// Storage에 값 추가 후 다시 저장
let inData;
if (localStorage.getItem("users") === null) {
  inData = [];
} else {
  inData = JSON.parse(localStorage.getItem("users")) // 스토리지 안의 users 값을 inData로(새 배열) 저장
};
inData.push("Choi");
localStorage.setItem("users", JSON.stringify(inData));
console.log(`추가 후 users : ${inData}`);

// 스토리지 값 삭제하기
let delStr = () => {
  const indexOfValue = inData.indexOf(prompt("삭제 할 사용자 입력")); //인덱스 탐색
  if (indexOfValue === -1) {
    alert("존재하지 않는 사용자입니다.")
  } else {
  inData.splice(indexOfValue, 1);
  localStorage.setItem("users", JSON.stringify(inData));
  console.log(`삭제 후 users : ${inData}`)
  }
}


function str_Remove() {
  localStorage.removeItem("users"); //스토리지에 있는 users키를 삭제
}