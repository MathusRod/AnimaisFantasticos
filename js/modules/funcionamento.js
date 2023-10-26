export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-week]");
  const weekDays = funcionamento.dataset.week.split(",").map(Number);
  const weekTime = funcionamento.dataset.hour.split(",").map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const timeNow = dateNow.getHours();

  const weekOpen = weekDays.indexOf(dayNow) !== -1;
  const timeOpen = timeNow >= weekTime[0] && timeNow < weekTime[1];

  const teste = document.querySelector(".icon");

  if (weekOpen && timeOpen) funcionamento.classList.add("open");
  if (!funcionamento.classList.contains("open")) {
    teste.innerHTML = "✘";
    teste.style.color = "#ff0000";
  }
}
