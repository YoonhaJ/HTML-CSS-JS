function displayAA() {
  console.log("AA");
}
function displayBB() {
  setTimeout(() =>  console.log("BB"), 2000); //2초 후 실행 (2초 기다릴 동안 다른 함수 먼저 실행)
}
function displayCC() {
  console.log("CC");
}

function async() {
  displayAA();
  displayBB();
  displayCC();
}
