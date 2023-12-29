const more = document.querySelector("#view");
let view1 = document.querySelectorAll("div")[2];

more.onclick= () => {
  if(view1.classList.contains("hidden")) {
    view1.classList.remove("hidden")
  } else {
    view1.classList.add("hidden")
  }
}

