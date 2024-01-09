function apiUrl(startDate, row=10) {
  const apiKey = "K7E8yOxOyiX%2FQUy4Q8j3BiXEEruRn%2FmbdPGpzyTDa1gK1ukK5UMU2go%2BTNLrf1DTQ6l2zDuv8u7HTEWrLfbLHg%3D%3D";
  let url = "https://apis.data.go.kr/B551011/KorService1/searchFestival1?serviceKey="
  url += apiKey + "&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A"
  url += "&eventStartDate=" + String(startDate) + "&numOfRows=" + String(row) + "&pageNo=1"
  return url
}

const bttn_dataApi = document.getElementById("bttn_dataApi");
bttn_dataApi.addEventListener("click", async () => {  //비동기 함수
  let startDate = prompt("시작일을 입력하세요. (2024-01-01)");
  url = apiUrl(startDate);

  // 조회된 총 데이터 건 수
  const totalResponse = await fetch(url);  // 입력받은 시작일부터 url 불러오기
  const totalJson = await totalResponse.json(); // json으로 변환
  const totalCount = totalJson.response.body.totalCount; // 총 몇개의 배열?
  console.log("total : "+ totalCount);
  
  // 데이터 개수를 이용해 전체 데이터 가져오기
  url = apiUrl(startDate, totalCount); // row = 배열 수 -> 즉 모든 데이터를 한페이지에 표시

  const dataResponse = await fetch(url);  // row 값 바뀌었으니까 fetch로 url 값 한 번 더 불러오기
  const dataJson = await dataResponse.json(); // 마찬가지로 json으로 변환
  const datas = dataJson.response.body.items.item; // 각각의 배열값들 출력
  console.log(datas);

});


