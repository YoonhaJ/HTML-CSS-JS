const changeImg = document.querySelector("img")


changeImg.addEventListener("mouseover", () => {
  changeImg.setAttribute("src", "/images/pic-2.jpg")
})
changeImg.addEventListener("mouseout", () => {
  changeImg.setAttribute("src", "/images/pic-1.jpg")
})