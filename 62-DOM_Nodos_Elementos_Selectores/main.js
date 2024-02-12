console.log("DOM Nodos Elementos Selectores");

/**
 * Node.nodeType
 * developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
 *
 * Nodos: el DOM representa el documento HTML como un arbol de nodos.
 * El nodo raiz es el Object document que representa todo el documento, de allí se derivan child nodes com oel nodo <html> que es hijo del document.
 * Cada nodo puede tener sus propios nodos hijos anidados. Por ejemplo, el nodo <html> contiene nodos <head> y <body>.
 * Los nodos hoja(leaf nodes) son aquellos que no tienen hijos, como un texto
 * Cada nodo es un objeto con propiedades y métodos para interactuar con él
 * Cada parte del código HTML es representado como un nodo DOM. Por ejemplo: el elemento <html> es un nodo, el elelmento <body> es un dodo y así con todos los tags
 */

/**
 * Elementos
 * Los nodos definidos por tagsHTML se consideran elementos. Por ejemplo <p>, <div>, <a>, etc. Estos tendrán propiedades y métodos accesibles desde JavaScript
 */

/**
 * Selectores
 * Permiten acceder a uno o múltiples nodos del DOM proveyendo una sintaxis para seleccionar elementos, los principales son:
 * getElementById()
 * getElementsByClassName()
 * getElementsByTagName()
 * querySelector()
 * querySelectorAll()
 */

console.log("Metodos antiguos");
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

console.log("Metodos nuevos");
console.log(document.querySelector("#menu"));

//Trae solo el primer elemento
console.log(document.querySelector("a"));

//Trae todos los elementos
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
