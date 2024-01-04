// 두 배열의 합집합, 교집합, 차집합 계산
let arr1 = [1,2,3,1,4,5,2];
let arr2 = [4,3,6,8,5,1,2];

// 중복값 제외하고 고유값만 뽑아내기
function uniqNum () {
  // 배열을 Set() 형식으로 변형
  let set1 = new Set(arr1)
  let set2 = new Set(arr2)

  // 합집합 => 두 배열의 고유값
  const union = new Set([...set1, ...set2]) //배열로 바꾸기
  console.log(...union)
  console.log("합집합",[...union])

  //교집합
  //배열.filter((변수)=> 조건식)
  const interaction = new Set([...set1].filter((val => set2.has(val))))
  console.log("교집합",[...interaction])

  // 차집합
  const difference = new Set([...set2].filter((val => !set1.has(val))))
  console.log("차집합",[...difference])
}

