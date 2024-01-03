// 객체'생성자' 함수
function Book1 (title, page, done=false) {
  this.title =title;
  this.page= page;
  this.done = done;
  this.finish = function () {
    let str = "";
    this.done === false ? str="읽는 중" : str="완독"
    return str
  }
}

// 생성자 함수를 이용한 객체 생성
let book1 = new Book1("자바스크립트", 600, false);
let book2 = new Book1("타입스크립트", 450, true);

console.log(book1.title, book1.finish());
console.log(book2.title, book2.finish());

// 클래스를 이용한 객체 생성
//클래스 정의 - 생성자보다 클래스 많이 씀
class Book2 {
  // 속성 정의
  constructor(title, page, done=false) {
    this.title = title;
    this.page = page;
    this.done= done;
  }
  // 메서드 영역
  finish () {
    let str = "";
    this.done === false ? str="읽는 중" : str="완독"
    return str;
  }
}
// 클래스 객체를 이용한 인스턴스 객체 정의
let book3 = new Book2("웹 표준 기본", 200);
let book4 = new Book2("지옥에서 온 깃허브", 180, true);

console.log(book3)
console.log(book3.title, book3.finish())
console.log(book4.title, book4.finish())

//객체에서 key, value 출력하기
for (key in book4) {
  document.write(`key : ${key}, value : ${book4[key]}<br>`)
}
//object를 사용해 출력
console.log(Object.keys(book4)) //키
console.log(Object.values(book4)) //값
console.log(Object.entries(book4)) //키&값 배열

console.log("Book1 생성자",Book1.prototype) //생성자에 대한 프로토타입
// console.log(book1.prototype) 생성자가 아님 -> prototype 별도로 갖고있지 않음
console.log("book1 인스턴스",book1.__proto__) // 인스턴스 객체 타입

console.log("Book2 생성자",Book2.prototype) 
console.log("book3 인스턴스",book3.__proto__) 

//Book1 생성자를 이용한 새로운 생성자 만들기
function Textbook (title, page, price) {
  Book1.call(this, title, page); // 기족 Book1이 가지고 있는 프로퍼티를 그대로 사용
  this.price = price; // 별도의 가격 추가

};
Textbook.prototype.buyPrice = function() {
  document.write(`${this.title} : ${this.price}원`);

}

console.log(Textbook.prototype)
console.log(Book1.prototype)

let book5 = new Textbook("점프 투 파이썬", 350, "30,000")
book5.buyPrice()
