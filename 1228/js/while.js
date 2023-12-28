// 사용자로부터 end가 입력될 때까지 숫자 입력받기
// end || END가 입력되면 입력된 데이터의 합계와 평균을 계산해 출력

function while_b() {
  let inData = []; // 배열 변수 정의 (입력데이터 저장 공간)
  //while문 바깥에서 let userData 정의
  let userData = prompt("점수를 입력하세요. \n (종료 시 END 또는 end 입력)");
  while (userData != "end" && userData != "END") {
    //if로 !isNaN 조건 안 달 거면 마지막에 치는 end가 userData에 push되지 않도록 prompt 입력보다 위쪽에 코드작성해야함.
    if(!isNaN(parseInt(userData))) { inData.push(parseInt(userData));}
    userData = prompt("점수를 입력하세요. \n (종료 시 END 또는 end 입력)");
  }
  console.log(inData);
  // 합계
  //let sum = 0;
  // for (let i=0; i<inData.length; i++) {
  //   sum += inData[i];
  // }
  let sum = 0;
  inData.forEach(function(num) {
    sum += num;
  })

  //평균
  let aver = 0;
  aver = sum / inData.length
 
  document.write("<div style='color:blue; font-size:1.2em; font-weight:900'>입력하신 점수의 총 합계는 " +sum+"점이며 평균은 "+aver+"입니다.</div>")
  
  
}

function break_1 () {
  let data = [10, 20, 30, 40, 50]
  let userData
//true : 무한반복
  while(true) {
  userData = prompt("점수를 입력하세요. \n (종료 시 END 또는 end 입력)");
    if(userData == "end" || userData == "END") break;
  }  console.log ("입력을 종료합니다.")
}

function continue_1 () {
  let data = [10, 20, 33, 47, 50, 55, 66, 15, 22]
  for (num of data) {
    if(num%2==0) continue; //console.log보다 위에 있어야 할 코드
    console.log(num);
  } console.log("종료합니다.")
}