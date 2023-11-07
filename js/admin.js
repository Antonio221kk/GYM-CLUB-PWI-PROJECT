const formAdmin = document.querySelector("#form-admin");

formAdmin.addEventListener("submit",(event)=>{
    event.preventDefault();

    const url = "api/connection-admin.php";
    const options = {
        method: "POST",
        body: new FormData(formAdmin)
    }

    fetch(url,options).then((response)=>{
        response.json().then((admin)=>{
            if(admin.type === "error"){
                document.querySelector("#message").innerHTML = admin.message;
            }
            else {
                let secondsLeft = 3; // Defina o número de segundos desejados
                const messageElement = document.querySelector("#message");
                function updateMessage() {
                    messageElement.innerHTML = admin.message + " Privilégios em " + secondsLeft + " segundos...";
                }
                const intervalId = setInterval(() => {
                    secondsLeft--;
                    if (secondsLeft <= 0) {
                        clearInterval(intervalId); // Para a contagem regressiva quando os segundos chegam a 0
                        window.location.href = "homePage.php";
                    } else {
                        updateMessage();
                    }
                }, 1000); // A cada 1 segundo (1000 milissegundos)

                updateMessage(); // Para exibir a mensagem inicial imediatamente
            }
        })
    })


})