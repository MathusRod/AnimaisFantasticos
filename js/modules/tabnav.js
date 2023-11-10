export default function initTabNav() {
  async function fecthAnimaisDescription(url) {
    const tabmenu = document.querySelectorAll(".js-tabmenu li");
    const animaisDescricao = document.querySelector(".animais-descricao");
    if (tabmenu.length && animaisDescricao) {
      const animaisReponse = await fetch(url);
      const animaisJSON = await animaisReponse.json();
      tabmenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => {
          animaisDescricao.innerHTML = "";
          animaisDescricao.appendChild(createAnimalDescription(animaisJSON, index));
        });
      });
    }
  }
  function createAnimalDescription(animaisJSON, index) {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${animaisJSON[index].specie}</h2><p>${animaisJSON[index].description1}</p><p>${animaisJSON[index].description2}</p>`;
    return section;
  }
  fecthAnimaisDescription("./animaisAPI.json");
}
