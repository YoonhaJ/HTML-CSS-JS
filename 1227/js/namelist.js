const names = ['서정동','김예은','전윤하','고희숙','황인식'];

function names_print() {
  for(let i=0;i<names.length;i++) {
    console.log(names[i]+"님 반갑습니다.")
  }
  console.log('작업이 종료되었습니다.')
}
names_print()