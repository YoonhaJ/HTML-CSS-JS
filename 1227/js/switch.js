function switch_1 () {
  let browser = prompt('사이트 선택: 네이버, 구글, 다음, 네이트')
  let url
  switch(browser) {
    case "네이버": url = "https://www.naver.com"
    break
    case "구글": url = "https://www.google.co.kr/?hl=ko"
    break
    case "다음": url = "https://www.daum.net/"
    break
    case "네이트": url = "https://www.nate.com/"
    break
    default: alert('보기 중에 없는 사이트입니다.')
  }

  if(url) {
    location.href = url;
  }
}

switch_1()