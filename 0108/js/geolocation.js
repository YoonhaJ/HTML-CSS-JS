let lat;
let long;

function getUserLocation() {
  if (navigator.geolocation) { // 지오로케이션 API 지원 여부 (true: 지원)
    navigator.geolocation.getCurrentPosition(showPosition, errPosition); //콜백함수
  } else {
    alert("지오로케이션을 지원하지 않습니다.")
  }
}

function showPosition(position) {
  console.log("위도", position.coords.latitude);
  console.log("경도", position.coords.longitude);
  // console.log("거리명", position.adress.city) //도시 명 출력
  lat = position.coords.latitude;
  long = position.coords.longitude;
}

function errPosition(err) {
  alert(err.message)
}

function showMap() {
  location.href=`https://www.openstreetmap.org/#map=13/${lat}/${long}`;
}