const button = document.querySelector("button");

function login(event) {
  let userId = JSON.parse(localStorage.getItem("userId")) || [];
  let userPw = JSON.parse(localStorage.getItem("userPw")) || [];
  
  const inputId = document.querySelector("#user-id").value;
  const inputPw = document.querySelector("#user-pw").value;
  
  // 아이디 검증
  var userIdCheck = /[a-zA-Z0-9]+$/
  if (!userIdCheck.test(inputId)) {
    alert('아이디는 숫자와 영문자만 허용됩니다.')
    event.preventDefault();
    return;
  } 

  // 비밀번호 검증
  var userPwCheck = /^(?=.*[a-zA-Z0-9])(?=.*[@$!%*?&]).*$/
  if (!userPwCheck.test(inputPw)) {
    alert('비밀번호는 영문 대/소문자, 숫자, 특수문자(@$!%*?&)를 최소 1개 이상 포함해야합니다.')
    event.preventDefault();
    return;
  }
  userId.push(inputId);
  userPw.push(inputPw);

  localStorage.setItem("userId", JSON.stringify(userId));
  localStorage.setItem("userPw", JSON.stringify(userPw));

}

button.addEventListener("click", login);

