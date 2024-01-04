let fruits = [];
let arrInput1 = () => {
  for (let i = 0 ; i <5 ; i++) {
    // let item = prompt("좋아하는 과일을 입력해주세요")
    // fruits.push(item);
    fruits[i] =  prompt("좋아하는 과일을 입력해주세요")
  }
  console.log(fruits)
}

// 배열의 마지막에 값 추가
function addArray() {
  let inputData = prompt("추가 과일을 입력해주세요")
  fruits[fruits.length] = inputData; // fruits.push(inputData);

  console.log(fruits);
}

// 배열에서 원하는 위치값 출력

function arrPrn() {
  let prnIndex = prompt(`출력할 문자의 인덱스 위치 입력(1~${fruits.length})`)
  console.log(fruits[prnIndex - 1]);
}

function arrEdit() {
  let prnIndex = prompt(`수정할 문자의 인덱스 위치 입력(1~${fruits.length})`)
  let inputData = prompt("수정할 과일을 입력하세요")
  fruits[prnIndex -1] = inputData;
  console.log(fruits);
}

function arrDel() {
  let prnIndex = prompt(`삭제할 문자의 인덱스 위치 입력(1~${fruits.length})`)
  fruits.splice(prnIndex-1); // 값을 삭제.  배열.splice(삭제index, 제거할 요소 개수) 개수 안 쓰면 디폴트값 - 해당 인덱스부터 끝까지 제거
  console.log(fruits);
}

