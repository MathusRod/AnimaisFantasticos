export default function initScrollSuave() {
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