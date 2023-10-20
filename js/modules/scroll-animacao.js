export default function initAnimaScroll() {
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