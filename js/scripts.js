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
/*let logs = [
{
name: "antonio",
email: "antonio@gmail.com",
password: "12345",
plan: "anual"

},


];*/
// Selecionando os elementos dos formulários para fazer o registro/login;
let formRegister = document.querySelector("#form-register");
let formLogin = document.querySelector("#form-logins");
let nameRegi = document.querySelector("#name");
let emailRegi = document.querySelector("#email");
let passRegi = document.querySelector("#senha");
let plans = document.querySelector("#options")

let users = [];

const user = {
    name: "",
    email: "" ,
    password: "",
    plan: ""


};
users.push(user);
//Formulário de Registro verificando se o nome, email, senha e plano já foram usados, caso não as informações serão adicionadas com LocalStorage
formRegister.addEventListener("submit",(element)=>{

    element.preventDefault();
   users.forEach((e)=>{
    if(nameRegi.value === e.name && emailRegi.value === e.email && passRegi.value === e.password && plans.value === e.plan){
        alert("Usuário já cadastrado!\n Por favor, dirigir-se para o form de Login\n Equipe GYM CLUB");
        
    }else{
        
        user.name = document.querySelector("#name").value;
        user.email = document.querySelector("#email").value;
        user.password = document.querySelector("#senha").value;
        user.plan = document.querySelector("#options").value;
        localStorage.setItem("user",JSON.stringify(user));
        console.log(user);
       
    }
   });
});