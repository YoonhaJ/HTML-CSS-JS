const id = "js1234";
const pw = "112233";

let userId = prompt('아이디를 입력하세요');
let userPw = prompt('비밀번호를 입력하세요');

// if (userId == id && userPw == pw) {
//   alert(userId+"님 반갑습니다.")
// } else if (userId == id && userPw != pw) {
//   alert('비밀번호가 불일치 합니다.')
// } else if (userId !== id && userPw == pw) {
//   alert ('아이디가 불일치 합니다.')
// } else {alert("아이디와 비밀번호가 불일치 합니다.")}

if (userId == id) {
  if (userPw == pw) {
  document.write(userId+"님 반갑습니다.")
  } else {
    alert('비밀번호가 일치하지 않습니다.')
    location.reload
  }
} else {
  alert ('아이디가 일치하지 않습니다.')
  location.reload
}