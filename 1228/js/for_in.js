// for in 형식 : for(변수 in 반복대상 ) {반복실행문}
// 배열이 들어가는 경우 index 위치 값을 반환한다
// 객체가 들어가는 경우 key값을 반환한다.




let books = [
  {
  title: "깃허브 입문",
  pubData : "2020-01-23",
  pages: 227,
  finished: true
},{
  title: "도전 자바스크립트",
  pubData : "2021-03-30",
  pages: 423,
  finished: true
}
]

function forIn() {
  for (i in books ) {
    console.log(books[i]);
    for (key in books[i]) {
      console.log(`${key} : ${books[i][key]}`)
    }
    console.log("=================")
  }
}