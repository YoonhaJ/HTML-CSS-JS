
const result = document.querySelector("#result")

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/products/10");
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let prod = JSON.parse(xhr.responseText);
    console.log(prod)
    result.innerHTML = `상품명 : ${prod.data.name}<br>생산년도 : ${prod.data.year}`
  }
}



