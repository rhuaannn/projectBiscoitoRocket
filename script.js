const containerOne = document.querySelector(".container");
const containerTwo = document.querySelector(".container2");
const biscoitoClicked = document.querySelector(".biscoitoClicado");
const main = document.querySelector("main");
let pSorted = document.querySelector(".p-sorted");

const message = [
  { phrase: "Você acaba de ganhar R$-100,00 " },
  { phrase: "Você acaba de ganhar R$-200,00 " },
  { phrase: "Você acaba de ganhar R$-300,00 " },
  { phrase: "Você acaba de ganhar R$-400,00 " },
  { phrase: "Você acaba de ganhar R$-500,00 " },
  { phrase: "Você acaba de ganhar R$-600,00 " },
  { phrase: "Você acaba de ganhar R$-700,00 " },
];

biscoitoClicked.addEventListener("click", () => {
  handleClickAdd();
  onClickObterAleatorio()
});

const handleClickAdd = () => {
  containerOne.classList.toggle("hiden");
  containerTwo.classList.remove("container2");
  containerTwo.classList.add("flex");
  main.classList.add("bg");
};

function getRandomMessage(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function onClickObterAleatorio() {
  let elementoAleatorio = getRandomMessage(message);
  pSorted.textContent = elementoAleatorio.phrase;

}
