const formRegister = document.querySelector("#form-register");

formRegister.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = "api/users-insert.php";
    const options = {
        method: "POST",
        body: new FormData(formRegister)
    };

    fetch(url, options).then((response) => {
        response.json().then((user) => {
            console.log(user);
            if(user.type == "error") {
                document.querySelector("#message").textContent = user.message;
            }
            else {
                let secondsLeft = 2; // Defina o número de segundos desejados
                const messageElement = document.querySelector("#message");
                function updateMessage() {
                    messageElement.innerHTML = user.message + " Redirecionando em " + secondsLeft + " segundos...";
                }
                const intervalId = setInterval(() => {
                    secondsLeft--;
                    if (secondsLeft <= 0) {
                        clearInterval(intervalId); // Para a contagem regressiva quando os segundos chegam a 0
                        window.location.href = "login.php";
                    } else {
                        updateMessage();
                    }
                }, 1000); // A cada 1 segundo (1000 milissegundos)

                updateMessage(); // Para exibir a mensagem inicial imediatamente
            }
        });
    });
});
