let student = {name : "홍길동", major: "컴퓨터공학", grade:2};
let studentjs = JSON.stringify(student);
console.log(student)
console.log(studentjs)
console.log("===================")
let object = JSON.parse(studentjs)
console.log(object)