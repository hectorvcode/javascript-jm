console.log("----- DOM: Flujo de Eventos (Burbuja y Captura) -----");

/**
 * Efecto Burbuja
 * La propagación se da desde el elemento más interno hacia el más externo
 */

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Evento de burbuja =  false
  //div.addEventListener("click", flujoEventos);

  //Evento de captura
  //div.addEventListener("click", flujoEventos, true);

  div.addEventListener("click", flujoEventos, {
    capture: true,
    once: true,
  });
});

/**
 * En la práctica se usa poco la fase de captura
 */
