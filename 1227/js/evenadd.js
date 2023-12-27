var sum = 0;
for(i=1;i<11;i++) {
  if(i%2 != 0) {continue}
  sum += i;
  document.write(i+"-------"+sum+"<br>")
}