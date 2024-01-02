const bttn = document.querySelector("#bttn")
const nav = document.querySelector("#nav")

bttn.addEventListener("click", () => {
  bttn.classList.toggle("active")
  nav.classList.toggle("active")
})