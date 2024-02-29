console.log("Eventos");

/**
 * 1. Cambiar el color de fondo al hacer clic en un botón
 */

const $boton = document.getElementById("myButton");
$boton.addEventListener(
  "click",
  () => (document.body.style.backgroundColor = "yellow")
);
