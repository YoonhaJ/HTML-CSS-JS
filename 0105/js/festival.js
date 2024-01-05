let xhr = new XMLHttpRequest();
xhr.open("GET", "/data/searchFestival1.json");
xhr.send();

//가져온 데이터 처리
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let fsts = JSON.parse(xhr.responseText);  //가져온 데이터 객체 처리
    let contents = fsts.response.body.items.item; //Festival 정보에서 최종 정보인 item 배열 데이터 받아오기
    //처리된 정보를 출력하는 함수 호출
    renderHTML(contents);
  }
}
// 화면에 띄울 함수 선언 - title, tel만 가져오기
function renderHTML(contents) {
  let output = "";
  for (list of contents) {
    output += `
    <h2>${list.title}</h2>
    <ul>
      <li>장소 : ${list.addr1} ${list.addr2}</li>
      <li>기간 : ${list.eventstartdate} ~ ${list.eventenddate}</li>
      <li>연락처 : ${list.tel}</li>
      <li>포스터 : <a href="${list.firstimage}" target="_blank">행사 이미지</a></li>
    </ul>
    <hr>
    `
  }
  // console.log(output);
  document.querySelector("#result").innerHTML = output;
};

