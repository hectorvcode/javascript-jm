console.log("----- Clases CSS -----");

const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);

//Evaluar si un elemento tiene una clase en especial
console.log($card.classList.contains("rotate-45"));

//Adicionar una clase a un elemento
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);

//Remover una clase a un elemento
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));

//Metodo palanca
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");

//Metodo de reemplazar una clase
$card.classList.replace("rotate-45", "rotate-135");

//Para trabajar con varias clases
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
