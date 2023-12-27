var season = prompt("당신이 좋아하는 월을 입력하세요");

if (season >=1 && season <=12) {
  if(season<=2) {
    alert("겨울입니다.")
  } else if(season<=5) {
    alert("봄입니다.")
  } else if(season <=8) {
    alert("여름입니다.")
  } else if (season <=11) {
    alert('가을입니다.')
  }  else if(season = 12) {
    alert('겨울입니다.')
  }
} else {
  alert('입력월이 잘못되었습니다.')
}