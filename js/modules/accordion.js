export default function initAccordion() {
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