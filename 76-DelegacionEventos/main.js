console.log("----- DOM: Delegación de Eventos -----");

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this}, el click lo originó ${e.target.className}`
  );
}

document.addEventListener("click", (e) => {
  console.log("click en: ", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("hola soy jon mircha");
    e.preventDefault();
  }
});
