const bigImg = document.querySelector("#cup") //큰 이미지
const smallImg = document.querySelectorAll(".small") //작은이미지 (여러개 -> 노드 리스트)


let changePic = function() {   //화살표함수 x 호출이 아닌 함수 할당
  let newPic = this.src;
  bigImg.setAttribute("src", newPic);
  // 또는 bigImg.src = newPic;
};

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = changePic;
  // smallImg[i].addEventListner("click", changePic);
}

