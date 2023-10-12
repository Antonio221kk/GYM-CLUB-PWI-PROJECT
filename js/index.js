

// const dialog = document.querySelector("dialog")
// function btnNutri(){
//     const GoogleCharsAPI = 'https://chart.googleapis.com/chart?&cht=qr&chs=100x100&chl=https://www.youtube.com/';
//   document.querySelector(".QRCode").src = GoogleCharsAPI;

//   dialog.showModal();

// }
// function closeDialog(){
//     dialog.close()
// }

function transfer(){
    window.location.href = "login.html"
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
        document.querySelector("#resultado").textContent = `${imc + " Peso ideal! Congrats!"}`
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