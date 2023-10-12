function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Obtém o nome do usuário da query string
const userName = getQueryParam("name");

// Exibe o nome do usuário na página
const saudacao = document.querySelector("#saudacao");
saudacao.innerHTML = "<p style='color:white'>Boas vindas, " + decodeURIComponent(userName) + "! </p>";




    const btnPeito = document.querySelector("#showPeito");
    const btnPernas = document.querySelector("#showPernas");
    const btnOmbros = document.querySelector("#showOmbros");
    const btnCostas = document.querySelector("#showCostas");
    const btnCardio = document.querySelector("#showCardio");

    const dialogPeito = document.querySelector("#dialogPeito");
    const dialogPernas = document.querySelector("#dialogPernas");
    const dialogOmbros = document.querySelector("#dialogOmbros");
    const dialogCostas = document.querySelector("#dialogCostas");
    const dialogCardio = document.querySelector("#dialogCardio");

    const closePeito = document.querySelector("#closePeito");
    const closePernas = document.querySelector("#closePernas");
    const closeOmbros = document.querySelector("#closeOmbros");
    const closeCostas = document.querySelector("#closeCostas");
    const closeCardio = document.querySelector("#closeCardio");

    btnPeito.addEventListener("click", () => {
      dialogPeito.showModal();
    });
    btnPernas.addEventListener("click", () => {
      dialogPernas.showModal();
    });
    btnOmbros.addEventListener("click", () => {
      dialogOmbros.showModal();
    });
    btnCostas.addEventListener("click", () => {
      dialogCostas.showModal();
    });
    btnCardio.addEventListener("click", () => {
      dialogCardio.showModal();
    });
    
    closePeito.addEventListener("click", () => {
      dialogPeito.close();
    });
    closePernas.addEventListener("click", () => {
      dialogPernas.close();
    });
    closeOmbros.addEventListener("click", () => {
      dialogOmbros.close();
    });
    closeCostas.addEventListener("click", () => {
      dialogCostas.close();
    });
    closeCardio.addEventListener("click", () => {
      dialogCardio.close();
    });
    
 
