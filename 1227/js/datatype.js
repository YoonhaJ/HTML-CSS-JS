console.log(typeof(3));
console.log(typeof("3"));
console.log(typeof(3.0));

console.log(0.12 + 3.1245);
console.log(typeof(""));
console.log(typeof("123+123"));

// let name = '전윤하';
// let age = '22';
// document.write(`<h1>${name}님의 나이는 <br>${age}살입니다</h1>`)
// console.log(`${name}님의 나이는 \n${age}살입니다`)
// console.log(`${name}님의 나이는 
// ${age}살입니다`)

// document.write(`<h1>어서오세요</h1>`)
// let name = prompt("이름을 입력하세요.");
// document.write("<b>"+name+"</b>님 환영합니다!")
// console.log(`${name}님 환영합니다!`)

var data1 = "20";
var data2 = 10;
console.log(data1 + data2); //2010 data2를 문자열로 자동 변환
console.log(data1 - data2); //10 data1을 숫자형으로 자동 변환

// 실습
// 1. 사용자에게 prompt로 데이터 입력 받기
var dataInput = prompt('숫자를 입력해주세요.');
console.log(typeof(dataInput)); //prompt입력 => 문자열 데이터
console.log(dataInput * 10); //문자열 => 자동 숫자형
console.log(dataInput + 10); //문자열
console.log(dataInput + dataInput); //문자열

// 2. prompt로 입력받은 데이터 숫자형으로 바꾸기
var dataInput = parseInt(prompt('숫자를 입력해주세요.')); //parseInt
console.log(typeof(dataInput)); //number
console.log(dataInput * 10); //숫자형 
console.log(dataInput + 10); //숫자형
console.log(dataInput + dataInput); //숫자형

console.log(typeof(Number(dataInput)));
// 3. 문자열 변환 : 변수명 .toString
var dataInput1 = true;
console.log(typeof(dataInput1));

dataInput1 = dataInput.toString()
console.log(typeof(dataInput1));

// 4. 문자열 변환 : String(변수명)
var dataInput2 = true;
console.log(typeof(dataInput2));

dataInput2 = string(dataInput2);
console.log(typeof(dataInput2));
console.log(dataInput2)

