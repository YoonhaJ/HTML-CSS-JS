// 구구단

for (i=1;i<10;i++) {
  document.write("<div>")
  document.write("<h2>"+i+"단 </h2>")
  for(j=1;j<10;j++) {
    document.write(i+" x "+j+" = "+i*j +"<br>")
  }
  // if(i==3) {break}
  document.write("</div>")
}