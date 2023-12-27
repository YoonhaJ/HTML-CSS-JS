var inputNum = prompt("몇 까지 3의 배수를 찾을까요?");
var i;
var count = 0;
if (!isNaN(inputNum)) {
  for(i=1;i<=inputNum;i++) {
    if(i%3 ==0) {
      count += 1;
      document.write(i+", ")
    }
  } document.write("<div>"+inputNum+"까지 3의 배수의 개수:"+count+"</div>")
} else {
  document.write("");
}