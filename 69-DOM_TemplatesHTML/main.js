console.log("----- DOM: Templates HTML -----");

const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();
cardContent = [
  {
    title: "Cascade",
    img: "https://picsum.photos/id/15/200/300",
  },
  {
    title: "Sea",
    img: "https://picsum.photos/id/16/200/300",
  },
  {
    title: "Forest",
    img: "https://picsum.photos/id/17/200/300",
  },
  {
    title: "Street",
    img: "https://picsum.photos/id/22/200/300",
  },
  {
    title: "Book",
    img: "https://picsum.photos/id/24/200/300",
  },
  {
    title: "Cat",
    img: "https://picsum.photos/id/40/200/300",
  },
  {
    title: "City",
    img: "https://picsum.photos/id/49/200/300",
  },
  {
    title: "Lighthouse",
    img: "https://picsum.photos/id/58/200/300",
  },
];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
