const slides = document.querySelectorAll(".slide");
const botones = document.querySelectorAll("button");

let current = 0;

function mostrarSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    if (botones[i].id === "prev") {
      current = (current - 1 + slides.length) % slides.length;
    } else {
      current = (current + 1) % slides.length;
    }
    mostrarSlide(current);
  });
}
