function displayAAA() {
  console.log("AAA");
}
function displayBBB(callback) {
  setTimeout(() =>  
  {
    console.log("BBB");
    callback()
  }, 2000); //2초 후 실행 (2초 기다릴 동안 다른 함수 먼저 실행)
}
function displayCCC() {
  console.log("CCC");
}

function async_cb() {
  displayAAA();
  displayBBB(displayCCC); //함수에 함수 호출 -> callback
  
}
