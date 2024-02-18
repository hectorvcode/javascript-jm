console.log("----- DOM: Manejadores de eventos -----");

/**
 * Lista de Eventos existentes
 * https://developer.mozilla.org/en-US/docs/Web/Events
 */

function holaMundo() {
  alert("Hey World!");
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");
$eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo MAnejador de Eventos Semántico");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo Manejador de Eventos Multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});
