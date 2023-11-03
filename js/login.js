

const form = document.querySelector("#form-login");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const url = "api/users-login.php";
    const formData = new FormData(form);
    const options = {
        method: "POST",
        body: "formData"
    }
    fetch(url,options).then((response)=>{
        response.json().then((user)=>{
            console.log(user);
            if (user.type == "error") {
                document.querySelector("#message").textContent = user.message;
            }
            if (user.type == "success") {
                document.querySelector("#message").textContent = user.message;
            }
        })
    })
})

function transfer(){
    window.location.href = "register.php"
}