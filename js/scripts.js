//função para o menu do media query mobile que desenvolvi no CSS
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "css/imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "css/imagens/close_white_36dp.svg";
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


// Selecionando os elementos dos formulários para fazer o registro;
let formRegister = document.querySelector("#form-register");
let nameRegi = document.querySelector("#name");
let emailRegi = document.querySelector("#email");
let passRegi = document.querySelector("#senha");
let plans = document.querySelector("#options")

let users = [];

// Formulário de Registro verificando se o nome, email, senha e plano já foram usados, caso não as informações serão adicionadas com LocalStorage
formRegister.addEventListener("submit",(event)=>{
  event.preventDefault();

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#senha");
  const planInput = document.querySelector("#options");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const plan = planInput.value;

  // Validar campos do formulário
  if (name === '' || email === '' || password === '' || plan === '') {
    document.querySelector("#spanRegi").textContent = "Preencha todos os campos";
    return;
  }

  // Verificar se o usuário já está cadastrado
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    document.querySelector("#spanRegi").textContent = "Já existe um usuário cadastrado neste email"
    return;
  }

  const user = {
    name: name,
    email: email,
    password: password,
    plan: plan
  };

  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
    document.querySelector("#spanRegi").textContent = "Usuário cadastrado com sucesso!";
  }

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  console.log(localStorage.getItem("users"));
});

// Selecionando os elementos do formulário de login
let formLogin = document.querySelector("#form-logins");
let passLog = document.querySelector("#senha-log");
let emailLog = document.querySelector("#email-log");

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const users = JSON.parse(localStorage.getItem("users"));
    const email = emailLog.value.trim();
    const password = passLog.value;
  
    if (users && users.length > 0) {
      const foundUser = users.find(user => user.email === email && user.password === password);
      if (foundUser) {
        const url = "homePage.html?name=" + encodeURIComponent(foundUser.name);
      window.location.href = url;


      }
       else {
        document.querySelector("#spanMensagem").textContent = "Usuário não encontrado ou informações incorretas.";
      }
    }
  });