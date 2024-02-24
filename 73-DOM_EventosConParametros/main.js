console.log("----- DOM: Eventos con parám,etros y remover Eventos -----");

/**
 * Cualquier función que se ejecute en un evento, solo puede recibir como parámetro el evento en si
 */

function holaMundo() {
  alert("Hey World!");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");
$eventoMultiple = document.getElementById("evento-multiple");
$eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo Manejador de Eventos Semántico");
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

/**
 * Procedimiento para pasar parámetros a una función manejadora
 */
$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Jon");
});

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
