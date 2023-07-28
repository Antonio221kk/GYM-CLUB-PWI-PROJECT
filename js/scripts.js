function calcularIMC(){
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;

    if(peso && altura){
        let alturaFinal = altura**2;
        let calculo = peso / alturaFinal;
        let imc = (calculo * 10000).toFixed(2);
        document.querySelector("#resultado").textContent = `${imc}`

    if(imc >= 0 && imc < 18.5){
        console.log("Magresa");
    }
    if(imc >= 18.6 && imc <= 29.9){
        console.log("Peso ideal! Congrats!")
    }
    if(imc >= 25.0 && imc <= 29.9){
        console.log("Levemente acima do peso");
    }
    if(imc >= 30.0 && imc <=34.9){
        console.log("Obesidade grau I");
    }
    if(imc >= 35.0 && imc <=39.9){
        console.log("Obesidade grau II");
    }
    if(imc >= 40.0){
        console.log("Obesidade grau III (Morbida)");
    }
}else{
    console.log("Nenhum digito")
}

}