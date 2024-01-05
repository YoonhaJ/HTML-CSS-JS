let xhr = new XMLHttpRequest(); // 객체 생성
xhr.open("GET", '/data/student.json', true) // 겟 방식, 비동기 처리
xhr.send();

// 서버에 자료 잘 올라갔을 때 화면에 출력할 것 함수
xhr.onreadystatechange = function() { //xhr 객체의 readyState 속성이 변하면 아래 함수 실행
  if(xhr.readyState === 4 && xhr.status === 200) { //4: 자료처리 완료 사용 가능 , 200: 서버에서 클라이언트로 전송 성공
    let student = JSON.parse(xhr.responseText) // 가져온 json 정보를 객체형식으로 변경
    document.getElementById("result").innerHTML = `
    <h1>${student.name}</h1>
    <ul>
      <li>전공 : ${student.major}</li>
      <li>학년 : ${student.grade}</li>
    </ul>
    `
  }
}