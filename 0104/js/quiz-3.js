//클래스 생성
class Lecture {
  constructor(hasTutor, lectId, members) {
    this.hasTutor = hasTutor;
    this.lectId = lectId;
    this.members = members;
  }
}
// 학생 정보 함수 생성
function getStudents(classRoom) {
  let {hasTutor, lectId, members} = classRoom;  //클래스 속성 가져오기
  let tutor, students;
  hasTutor ? [tutor,...students] = members : [...students] = members; 
  return students;
}

let class1 = new Lecture(false, 'L001', ["Ahn", "Han", "Park"]);
let class2 = new Lecture(true, 'L002', ["Choi", "Lee", "Kim"]);

console.log(`강의 : ${class1.lectId}, 수강생 : ${getStudents(class1)}`)
console.log(`강의 : ${class2.lectId}, 수강생 : ${getStudents(class2)}`)