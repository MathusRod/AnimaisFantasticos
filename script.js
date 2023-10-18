function initTabNav() {
  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabcontent = document.querySelectorAll(".js-tabcontent section");

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add("ativo");

    function activetab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabcontent[index].classList.add("ativo");
    }

    tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activetab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionlist = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionlist.length) {
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionlist.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linkInternos = document.querySelectorAll(".js-menu a[href^='#'");

  function scrollToSelection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  }

  linkInternos.forEach((link) => {
    link.addEventListener("click", scrollToSelection);
  });
}
initScrollSuave();

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.8;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScroll();
const scrollContainer = document.querySelector(".animais-lista");
scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  const scrollDirection = event.deltaY > 0 ? 1 : -1;
  scrollContainer.scrollLeft += scrollDirection * 300;
});
window.addEventListener("load", function(){
  const larguraJanela = document.querySelector(".larguraJanela");
  const larguraRodape = document.querySelector(".rodape");
  function atualizarTamanhoBloco(){
    larguraJanela.style.width = window.innerWidth + "px";
    larguraRodape.style.width = window.innerWidth + "px";
  }
  atualizarTamanhoBloco();
  window.addEventListener("resize", atualizarTamanhoBloco);
})
