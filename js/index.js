const btnMobile = document.querySelector(".btnMobile");
// imagem é a bar do menu mobile
const imagem = document.querySelector('#menuImage');
btnMobile.addEventListener('click',menuMobile)


function menuMobile(event){
    
    const divBtn = document.querySelector(".div-btn");
    divBtn.classList.toggle('active');
    const active = divBtn.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded',active);
    if(active){ event.currentTarget.setAttribute('arial-label', 'Fechar Menu');
    }else{
        event.currentTarget.setAttribute('arial-label','Abrir Menu');
    }
    if (imagem.src.endsWith('menu.png')) {
        imagem.src = 'css/imagens/bar-close.png';
      } else {
        imagem.src = 'css/imagens/menu.png';
        }
        const menu = document.querySelector(".menu");
      
}



function transfer(){
    window.location.href = "login.php"
}
function btnNutri(){
    window.location.href = "https://www.guiadenutricao.com.br/o-que-e-nutricao/"
}

function calcularIMC(){
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    

    if(peso == "" || altura == ""){
        document.querySelector("#resultado").textContent = `${"Campos não preenchidos corretamente"}`
       
    }
    
    if(peso && altura){
        let alturaFinal = altura**2;
        let calculo = peso / alturaFinal;
        let imc = (calculo * 10000).toFixed(2);
        

    if(imc >= 0 && imc < 18.5){
        document.querySelector("#resultado").textContent = `${imc + " Magresa"}`
    }
    if(imc >= 18.6 && imc <= 29.9){
        document.querySelector("#resultado").textContent = `${imc + " Peso ideal! Parabéns!"}`
    }
    if(imc >= 25.0 && imc <= 29.9){
        document.querySelector("#resultado").textContent = `${imc + " Levemente acima do peso"}`
    }
    if(imc >= 30.0 && imc <=34.9){
        document.querySelector("#resultado").textContent = `${imc + " Obesidade grau I"}`
    }
    if(imc >= 35.0 && imc <=39.9){
        document.querySelector("#resultado").textContent = `${imc + " Obesidade grau II"}`
    }
    if(imc >= 40.0){
        document.querySelector("#resultado").textContent = `${imc + " Obesidade grau III (Morbida)"}`
    }
}
}