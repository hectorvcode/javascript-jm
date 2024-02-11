console.log("Web Apis");

/**
 * DOM, BOM y CSSOM son modelos e interfaces que utiliza JavaScript para interactuar con diferentes partes de la web y las pàginas
 *
 * DOM (Document Object Model): permite acceder y manipular los elementos HTML de una pàgina web. Provee una representación estructural del documento como un grupo de nodos y objetos
 *
 * BOM (Browser Object Model): provee una interfaz para interactuar con el navegador. Permite acceder al historial, manipular windows y frames, conocer dimensiones, etc
 *
 * CSSOM( CSS Object Model): permite manipular las reglas CSS de una página. Podemos acceder y modificar estilos, reglas, selectores
 *
 * DOM permite manipular la estructura HTML
 * BOM: permite interactuar con el navegador
 * CSSOM: los estilos CSS
 */

console.log(window);
console.log(document);

const hablar = (texto) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
};

let texto = "Hola, soy tu amigo y docente digital... Johathan Mircha";

hablar(texto);
