export default function initModal() {

}

const botaoAbrir = document.querySelector("[data-modal='abrir']");
const botaoFechar = document.querySelector("[data-modal='Fechar']");
const containerModal = document.querySelector("[data-modal='container']");

function abriModal(event) {
  event.preventDefault();
  containerModal.classList.add("ativo");
}

function fecharModal(event) {
  event.preventDefault();
  containerModal.classList.remove("ativo");
}

if(botaoAbrir && botaoFechar && containerModal){
  function toggleModal(event){
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }
  function clickForaModal(event){
    if(event.target === this){
      toggleModal(event);
    }
  }
  botaoAbrir.addEventListener("click", abriModal);
  botaoFechar.addEventListener("click", fecharModal);
  containerModal.addEventListener("click", clickForaModal)
}

