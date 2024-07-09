let menu = document.querySelector("#menu");
let nav = document.querySelector(".navigation");
let navbar = document.querySelector(".header");
let sections = document.querySelectorAll("section");
let tags = document.querySelectorAll(".navigation a");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
};

for (let tag of tags) {
  tag.addEventListener("click", () => {
    menu.classList.remove("bx-x");
    nav.classList.remove("active");
  });
}

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY + 100;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top > offset && top < offset + height) {
      tags.forEach((tag) => {
        tag.classList.remove("a-hov");
      });
      document
        .querySelector(`.navigation a[href='#${id}']`)
        .classList.add("a-hov");
    }
  });

  if (window.scrollY > 100) {
    navbar.classList.add("bg-change");
  } else {
    navbar.classList.remove("bg-change");
  }
};
