
function transfer(){
    window.location.href = "register.php";
}


const formLogin = document.querySelector('#form-login');

formLogin.addEventListener("submit",(event)=>{
    event.preventDefault();

    const url = 'api/users-login.php';
    const options = {
        method: 'POST',
        body: new FormData(formLogin)
    };

    fetch(url, options).then((response) => {
        response.json().then((user) => {
            console.log(user);
            if (user.type == "error") {
                document.querySelector("#message").innerHTML = user.message;
            } else {
                let secondsLeft = 2; // Defina o número de segundos desejados
                const messageElement = document.querySelector("#message");
                function updateMessage() {
                    messageElement.innerHTML = user.message + " Redirecionando em " + secondsLeft + " segundos...";
                }
                const intervalId = setInterval(() => {
                    secondsLeft--;
                    if (secondsLeft <= 0) {
                        clearInterval(intervalId); // Para a contagem regressiva quando os segundos chegam a 0
                        window.location.href = "homePage.php";
                    } else {
                        updateMessage();
                       
                    }
                }, 1000); 

                updateMessage(); 
            }
        });
    });

});