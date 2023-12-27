const userData = [
  // [ID, PW]
  ["aa1234", "js121212"],
  ["ecoms113", "ecoms123*"],
  ["mult00", "ecoms123*"],
  ["mult01", "11223344"],
  ["mult02", "mul123456"],
  ["mult03", "m00220011*"],
  ["mult04", "e121212*"],
  ["mult05", "e1234567*"],
  ["mult06", "a121212**"]
]

//일치하는 값 없으면 존재하지 않는 아이디입니다.
// 아이디는 맞음 but 패스워드 안맞으면 패스워드가 맞지 않습니다. = break

function logIn() {

  let userId = prompt("아이디를 입력해주세요")
  let userPw = prompt("비밀번호를 입력해주세요")
  // let cnt = true;

  for(let i=0; i<userData.length; i++) {
    if (userData[i]==userId) { 
        if(userData[i][1] == userPw){
          // cnt = false;
          alert(userId+"님 환영합니다.")
          break;
        }else {
          alert('error: 비밀번호가 일치하지 않습니다.')
          location.reload();
          break;
        }
      
    } else {
      alert('error: 아이디가 존재하지 않습니다.')
      break;
      
    }
    
  }
  //if(cnt) {alert("아이디가 존재하지 않습니다."); location.reload();}
}
