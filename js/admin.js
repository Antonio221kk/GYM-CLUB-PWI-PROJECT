

const formAdmin = document.querySelector("#form-admin");

formAdmin.addEventListener("submit", (event) => {
    event.preventDefault();

    const url = "api/connection-admin.php";
    const options = {
        method: "POST",
        body: new FormData(formAdmin)
    }

    fetch(url, options).then((response) => {
        response.json().then((admin) => {
            if (admin.type === "error") {
                document.querySelector("#message").innerHTML = admin.message;

            }
            else {
                let secondsLeft = 2; // Defina o número de segundos desejados
                const messageElement = document.querySelector("#message");
                function updateMessage() {
                    messageElement.innerHTML = admin.message + " Privilégios em " + secondsLeft + " segundos...";
                }
                const intervalId = setInterval(() => {
                    secondsLeft--;
                    if (secondsLeft <= 0) {
                        clearInterval(intervalId); // Para a contagem regressiva quando os segundos chegam a 0
                        const divForm = document.querySelector(".login").innerHTML = `
                        <form id="formProducts">
                        <label for="productName">Nome do Produto:</label>
                    <input type="text" name="productName" placeholder="Nome do Produto">

                    <label for="productPrice">Preço:</label>
                    <input type="number" name="productPrice" placeholder="Preço">

                    <label for="imageUrl">URL da Imagem:</label>
                    <input type="url" name="productUrl" placeholder="URL da Imagem">
                    <div id="message"></div>
                
                    <input type="submit" value="Cadastrar Produto">
                    </form>
        
                    <div class="divNewAdmin">
                    <button id="btnAdmin" >Adicione um novo administrador</button>
                    </div>                  
                        `
                        
                        document.querySelector("#btnAdmin").addEventListener("click",()=>{
                            const sectionAdmin = document.querySelector("#section-admin").innerHTML = 
                        `<form id="formRegister">
                        <label for="emailAdmin">Email do Admin:</label>

                        <input type="email" name="email_admin" placeholder="Email">
                        <label for="passwordAdmin">Senha do Admin:</label>

                        <input type="password" name="password_admin" id="password" placeholder="Password">

                        <div id="message1"></div>
                        
                        <input type="submit" value="Cadastrar Admin">
                        </form>
                        
                        ` ;   
                        const formRegister = document.querySelector("#formRegister");
                        formRegister.addEventListener("submit",(event)=>{
                            event.preventDefault();

                            const url = "api/insert-admin.php";
                            const options = {
                            method: "POST",
                            body: new FormData(formRegister)
                        }

                        fetch(url,options).then((response)=>{
                            response.json().then((result)=>{
                                if(result.type === "success"){
                                    document.querySelector("#message1").innerHTML = result.message
                                }
                               else{
                                document.querySelector("#message1").innerHTML = result.message
                               }
                            });
                        })


                        });
                         
                        });

                        


                      const formProducts =  document.querySelector("#formProducts");
                      formProducts.addEventListener("submit",(event)=>{
                            event.preventDefault();
                      
                        const url = "api/insert-products.php";
                        const options = {
                            method: "POST",
                            body: new FormData(formProducts)
                        }

                        fetch(url,options).then((response)=>{
                            response.json().then((data)=>{
                                if(data.type === "success"){
                                    document.querySelector("#message").innerHTML = data.message
                                }
                               else{
                                document.querySelector("#message").innerHTML = data.message
                               }
                            });
                        })
                    
                    })

                    } else {
                        updateMessage();
                    }
                }, 1000);

                updateMessage();
            }
        })
    })


})
