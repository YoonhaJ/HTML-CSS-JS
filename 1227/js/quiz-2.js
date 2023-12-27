const inNum = [
  [12,3,45,25,12,36,65,21,75,95],
  [32,88,52,65,75,15,42,62],
  [30,62,42,51,85,45,12,62,32],
  [12,45,52,95,20,12],
  [32,52,42,15,62,85,10],
  [63,52,15,45,75,63,87,62]
]


function findNum() {
  let maxNum = []
  let minNum = []

  for(let i=0; i<inNum.length; i++) {
    inNum[i].sort();
    minNum.push(inNum[i][0]);
    maxNum.push(inNum[i][inNum[i].length-1])
    
    document.write([i+1]+"번째 리스트에서 가장 큰 값:"+maxNum[i]+"<br>")
    document.write([i+1]+"번째 리스트에서 가장 작은 값:"+minNum[i]+"<br><hr>")
  }
 
}
findNum()


