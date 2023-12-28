function choice(x, y) {
  var x = parseInt(prompt('비교할 첫 번째 숫자:'));
  var y = parseInt(prompt('비교할 두 번째 숫자:'));
  if (x === y) {
    alert('같습니다.')
  } else if (x > y) {
    alert(`${x}(이)가 ${y}보다 큽니다.`)
  }  else if (x < y) {
    alert(`${y}(이)가 ${x}보다 큽니다.`)
  }
}

choice()



