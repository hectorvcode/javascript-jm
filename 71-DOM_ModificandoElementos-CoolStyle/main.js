console.log("----- DOM: Modificando elementos Cool Style aaa-----");

/**
 * Insert Adjacent
 * insertAdjacentElement(position, el)
 * insertAdjacentHTML(position, html)
 * insertAdjacentText(position, text)
 */

/**
 * Posiciones
 * beforebegin(hermano anterior)
 * afterbegin(primer hijo)
 * beforeend(ultimo hijo)
 * afterend(hermano siguiente)
 */

const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");

/* $newCard.innerHTML = `
  <img src="https://picsum.photos/200" alt="Any" />
  <figcaption>Any</figcaption>
`; */

let $contentCard = `
  <img src="https://picsum.photos/200" alt="Any" />
  <figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
$cards.insertAdjacentElement("afterbegin", $newCard);

//09:14

//jquery
//$cards.prepend($newCard);
//$cards.before($newCard);
//$cards.append($newCard);
//$cards.after($newCard);
