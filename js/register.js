const formRegistro = document.querySelector("#form-register");

formRegistro.addEventListener('submit',(event) =>{
    event.preventDefault();
    const url = "api/user-insert.php";
    const options = {
        method: "POST",
        body: new FormData(formRegistro)
    }

    fetch(url,options).then((response)=>{
        response.json().then((user)=>{
            console.log(user)
            if(user.type === "error"){
                document.querySelector("#message").textContent = `user.message`;
            }
        })
    })
})