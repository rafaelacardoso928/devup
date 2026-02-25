/* HEADER SCROLL EFFECT */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* MENU MOBILE */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* REVEAL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

/* BOTÃO TOPO */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* SLIDER */

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;
const slideArray = Array.from(slides);

function showSlide(i) {
  slideArray.forEach((s) => s.classList.remove("active"));
  slideArray[i].classList.add("active");
}

next.addEventListener("click", () => {
  index = index < slideArray.length - 1 ? index + 1 : 0;
  showSlide(index);
});

prev.addEventListener("click", () => {
  index = index > 0 ? index - 1 : slideArray.length - 1;
  showSlide(index);
});

/* AUTO SLIDE */

setInterval(() => {
  index = index < slideArray.length - 1 ? index + 1 : 0;
  showSlide(index);
}, 4000);

/* FORM */

const form = document.getElementById("formInscricao");
const msg = document.getElementById("mensagemSucesso");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "Inscrição enviada com sucesso!";
  form.reset();
});
