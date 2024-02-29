console.log("Eventos");

/**
 * 1. Cambiar el color de fondo al hacer clic en un botón
 */

const $boton = document.getElementById("myButton");
$boton.addEventListener(
  "click",
  () => (document.body.style.backgroundColor = "yellow")
);

/**
 * 2. Mostrar un mensaje de alerta al pasar el mouse por encima de un elemento
 */

const $div = document.getElementById("myDiv");
$div.addEventListener("mouseover", () =>
  alert("Hey, estas pasando el mouse por encima de mi")
);
