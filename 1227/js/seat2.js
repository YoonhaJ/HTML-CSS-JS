let memNum = parseInt(prompt('입장객 수를 입력하세요'))
let colNum = parseInt(prompt('한 줄에 앉을 사람 수를 입력하세요'))
let rowNum = parseInt(memNum/colNum)

var i, j, seatNo;

document.write("<table>")
for(i=0;i<=rowNum;i++) {
  document.write("<tr>");
  for(j=1;j<=colNum;j++) {
    seatNo = i * colNum + j;
    if(seatNo>memNum) break;
    document.write("<td>좌석"+seatNo+" </td>");
  }   
  document.write("</tr>");
}
document.write("</table>")