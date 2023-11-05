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
            if(user.type == "success") {
                document.querySelector("#message").textContent = user.message;
            }
        });
    });
});
