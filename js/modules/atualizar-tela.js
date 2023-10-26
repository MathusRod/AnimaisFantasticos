export default function atualizarWidth() {
  const scrollContainer = document.querySelector(".animais-lista");
  scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    const scrollDirection = event.deltaY > 0 ? 1 : -1;
    scrollContainer.scrollLeft += scrollDirection * 300;
  });

  
  window.addEventListener("load", function () {
    const larguraJanela = document.querySelector(".larguraJanela");
    const larguraRodape = document.querySelector(".rodape");
    const larguraContainer = document.querySelector(".grid-container");
    function atualizarTamanhoBloco() {
      larguraJanela.style.width = window.innerWidth + "px";
      larguraRodape.style.width = window.innerWidth + "px";
      larguraContainer.style.width = window.innerWidth + "px";
    }
    atualizarTamanhoBloco();
    window.addEventListener("resize", atualizarTamanhoBloco);
  });
}
