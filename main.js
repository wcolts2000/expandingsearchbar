const searchBtn = document.getElementById("search-btn");
const search = document.getElementById("search");
const tip = document.getElementById("tip");

let i = 0,
  message = "Reveal the hidden truth",
  speed = 60;

searchBtn.addEventListener("click", () => {
  search.style.width = "80%";
  search.style.paddingLeft = "60px";
  search.style.cursor = "text";
  search.focus();

  typeWriter();
  //   search.setAttribute("placeholder", "Reveal the hidden truth");
});

function typeWriter() {
  if (i < message.length) {
    msg = search.getAttribute("placeholder") + message.charAt(i);
    search.setAttribute("placeholder", msg);
    i++;
    setTimeout(typeWriter, speed);
  }
}

search.addEventListener("keydown", () => {
  tip.style.visibility = "visible";
  tip.style.opacity = 1;
});
