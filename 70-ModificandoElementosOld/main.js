console.log("----- DOM: Modificando elementos Old Style -----");

const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");
$cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
  <img src="https://picsum.photos/200" alt="Any" />
  <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.insertBefore($newCard, $cards.firstElementChild);
//$cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards);
