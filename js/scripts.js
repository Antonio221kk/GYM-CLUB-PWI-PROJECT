//função para o menu do media query mobile que desenvolvi no CSS
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "css/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "css/close_white_36dp.svg";
    }
}
//Aqui abaixo vou utilizar essas funções para redirecionar o usuário as outras páginas...
// url recebe sites e link do siteIFsul. window.location.href redireciona para as paginas e site usando const URL...
function btnAcad(){
const url = "sobreAcad.html";
    window.location.href = url;
}
function btnDevs(){
const url = "desenvolvedores.html";
window.location.href = url;
}

