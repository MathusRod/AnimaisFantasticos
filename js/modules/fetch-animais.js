import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fecthAnimais(url) {
    const animaisReponse = await fetch(url);
    const animaisJSON = await animaisReponse.json();
    const numerosGrid = document.querySelector(".numeros-grid");
    animaisJSON.forEach((animal) => {
      numerosGrid.appendChild(createAnimal(animal));
    });
    initAnimaNumeros();
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}<h3><span data-numeros>${animal.total}</span>`;
    return div;
  }

  fecthAnimais("./animaisAPI.json");
}
