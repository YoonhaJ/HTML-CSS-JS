let memNum = parseInt(prompt('입장객 수를 입력하세요'))
let colNum = parseInt(prompt('한 줄에 앉을 사람 수를 입력하세요'))
let rowNum = parseInt(memNum/colNum)

if (memNum%colNum !==0) {
  rowNum +=1
  alert('총'+rowNum+'줄이 필요합니다.')
} else {
  alert('총'+rowNum+'줄이 필요합니다.')
}