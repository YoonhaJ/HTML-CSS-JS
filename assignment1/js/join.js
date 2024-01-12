const button = document.querySelector("button")

function join(event) {
  let userId = JSON.parse(localStorage.getItem("userId")) || [];
  let userPw = JSON.parse(localStorage.getItem("userPw")) || [];
  let userName = JSON.parse(localStorage.getItem("userName")) || [];
  let userPhone = JSON.parse(localStorage.getItem("userPhone")) || [];
  let userMail = JSON.parse(localStorage.getItem("userMail")) || [];
  let userAddr = JSON.parse(localStorage.getItem("userAddr")) || [];
  
  const inputId = document.querySelector("#user-id").value;
  const inputPw = document.querySelector("#user-pw").value;
  const pwCheck = document.querySelector("#user-pwcheck").value;
  const name = document.querySelector("#user-name").value;
  const phone = document.querySelector("#user-phone").value;
  const mail = document.querySelector("#user-mail").value;
  const addr = document.querySelector("#user-addr").value;
  
  // 아이디 검증
  var userIdCheck = /[a-zA-Z0-9]+$/
  if (!userIdCheck.test(inputId)) {
    alert('아이디는 숫자와 영문자만 허용됩니다.')
    event.preventDefault();
    return;
  }

  // ID 존재 여부 확인
  if (!userId.includes(inputId)) {
    userId.push(inputId);
    userPw.push(inputPw);
    localStorage.setItem("userId", JSON.stringify(userId));
    localStorage.setItem("userPw", JSON.stringify(userPw));
  } else {
    alert('이미 존재하는 계정입니다.');
    return;
  }
  
  // 비밀번호 검증
  var userPwCheck = /^(?=.*[a-zA-Z0-9])(?=.*[@$!%*?&]).*$/
  if (!userPwCheck.test(inputPw)) {
    alert('비밀번호는 영문 대/소문자, 숫자, 특수문자(@$!%*?&)를 최소 1개 이상 포함해야합니다.')
    event.preventDefault();
    return;
  }
  
  // 비밀번호 확인
  if (inputPw !== pwCheck) {
    alert("입력하신 비밀번호와 일치하지 않습니다.")
    event.preventDefault();
    return;
  }
  // 전화번호 입력시 자동으로 "-"추가
  if (!phone.includes("-")) {
    var formatted = phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    userPhone.push(formatted)
  } else {
    userPhone.push(phone)
  }

  userName.push(name);
  userMail.push(mail);
  userAddr.push(addr);
  
  localStorage.setItem("userName", JSON.stringify(userName));
  localStorage.setItem("userPhone", JSON.stringify(userPhone));
  localStorage.setItem("userMail", JSON.stringify(userMail));
  localStorage.setItem("userAddr", JSON.stringify(userAddr));
}
button.addEventListener("click", join)