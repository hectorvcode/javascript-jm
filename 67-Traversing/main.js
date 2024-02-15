console.log("----- Traversing -----");

const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.parentNode);

//Nodos hijos
console.log($cards.childNodes);

//Primero y ultimo elemento hijo
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild);

//Elemento previo y elemento siguiente
console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextSibling);
console.log($cards.nextElementSibling);

console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
