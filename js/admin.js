const formAdmin = document.querySelector("#form-admin");

formAdmin.addEventListener("submit",(event)=>{
    event.preventDefault();

    const url = "api/acess-admin.php";
    const options = {
        method: "POST",
        body: new FormData(formAdmin)
    }

    fetch(url,options).then((response)=>{
        response.json().then((admin)=>{
            if(admin.type === "error"){
                document.querySelector("#message").innerHTML = admin.message;
            }
            if(admin.type === "success"){
                document.querySelector("#message").innerHTML = admin.message;
            }
        })
    })


})