//전체 최대 최소값 구하기!!!!

const inNum = [
  [12, 3, 45, 25, 12, 36, 65, 21, 75, 95],
  [32, 88, 52, 65, 75, 15, 42, 62],
  [30, 62, 42, 51, 85, 45, 12, 62, 32],
  [12, 45, 52, 95, 20, 12],
  [32, 52, 42, 15, 62, 85, 10],
  [63, 52, 15, 45, 75, 63, 87, 62],
];

function min_max_num() {
  let maxNum = inNum[0][0];
  let minNum = inNum[0][0];
  for(let i=0; i<inNum.length;i++){
    for(let j=0; j<inNum[i].length;j++) {
      if(maxNum < inNum[i][j]) {
        maxNum = inNum[i][j]
      } if(minNum > inNum[i][j]) {
        minNum = inNum[i][j];
      }
    } 
  }document.write('최댓값은'+maxNum+", 최솟값은"+minNum+"<br>")
}

//행 단위 최대 최소 구하기!!!
function min_max_num2() {
  for(let i=0; i<inNum.length;i++){
    let maxNum = inNum[i][0];
    let minNum = inNum[i][0];
    for(let j=0; j<inNum[i].length;j++) {
      if(maxNum < inNum[i][j]) {
        maxNum = inNum[i][j]
      } if(minNum > inNum[i][j]) {
        minNum = inNum[i][j];
      }
    } document.write('최댓값은'+maxNum+", 최솟값은"+minNum+"<br>")
  }
}



