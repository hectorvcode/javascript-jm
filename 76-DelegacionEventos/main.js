console.log("----- DOM: Delegación de Eventos -----");

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a");

/**
 * Con el método stopPropagation detenemos la propagación
 */

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation();
}

document.addEventListener("click", (e) => {
  console.log("click en: ", e.target);

  if (e.target.matches(".eventos-flujo div")) {
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("hola soy jon mircha");
    e.preventDefault();
  }
});

/* $divsEventos.forEach((div) => {
  //Evento de burbuja =  false
  div.addEventListener("click", flujoEventos);
});
 */
/**
 * e.preventDefault() previene la ejecución de comportamientos por defecto
 */

/* $linkEventos.addEventListener("click", (e) => {
  alert("hola soy jon mircha");
  e.preventDefault();
}); */

//10:12
