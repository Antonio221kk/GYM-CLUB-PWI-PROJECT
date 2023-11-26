

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
                document.querySelector("#message-admin").innerHTML = admin;

            }
            else {
                let secondsLeft = 2; // Defina o número de segundos desejados
                const messageAdmin = document.querySelector("#message-admin");
                function updateMessage() {
                    messageAdmin.innerHTML = admin + " Privilégios em " + secondsLeft + " segundos...";
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
        
                    <div class="divAdmin">
                    <button id="btnAdmin" ><i class="fa-solid fa-user-tie" style="color: #000000;"></i></button>
                    <button id="btnDeletAdmin" ><i class="fa-solid fa-user-xmark" style="color: #000000;"></i></button>
                    <button id="btnEdit" ><i class="fa-solid fa-file-pen" style="color: #000000;"></i></button>
                    <button id="btnDeletProduct" ><i class="fa-solid fa-trash" style="color: #000000;"></i></button>
                    <button id="btnDeletUser"><i class="fa-solid fa-person-circle-xmark" style="color: #000000;"></i></i></button>
                    
                    </div>                  
                        `

                        document.querySelector("#btnAdmin").addEventListener("click", () => {
                            const sectionAdmin = document.querySelector("#section-admin").innerHTML =
                                `<form id="formRegister" class="formsAdmin">
                        <h1>Registrar Administrador</h1>
                        <label for="emailAdmin">Email do Admin:</label>

                        <input type="email" name="email_admin" placeholder="Email">
                        <label for="passwordAdmin">Senha do Admin:</label>

                        <input type="password" name="password_admin" id="password" placeholder="Password">

                        <div id="message1"></div>
                        
                        <input type="submit" value="Cadastrar Admin">
                        </form>
                        
                        ` ;
                            const formRegister = document.querySelector("#formRegister");
                            formRegister.addEventListener("submit", (event) => {
                                event.preventDefault();

                                const url = "api/insert-admin.php";
                                const options = {
                                    method: "POST",
                                    body: new FormData(formRegister)
                                }

                                fetch(url, options).then((response) => {
                                    response.json().then((result) => {
                                        if (result.type === "success") {
                                            document.querySelector("#message1").innerHTML = result.message
                                        }
                                        else {
                                            document.querySelector("#message1").innerHTML = result.message
                                        }
                                    });
                                })


                            });

                        });

                        const formProducts = document.querySelector("#formProducts");
                        formProducts.addEventListener("submit", (event) => {
                            event.preventDefault();

                            const url = "api/insert-products.php";
                            const options = {
                                method: "POST",
                                body: new FormData(formProducts)
                            }

                            fetch(url, options).then((response) => {
                                response.json().then((data) => {
                                    if (data.type === "success") {
                                        document.querySelector("#message").innerHTML = data.message
                                    }
                                    else {
                                        document.querySelector("#message").innerHTML = data.message
                                    }
                                });
                            })

                        })

                        //---------------------------edit product------------------------------//
                        document.querySelector("#btnEdit").addEventListener("click", () => {
                            const sectionAdmin = document.querySelector("#section-admin").innerHTML =
                                `<form id="formEdit" class="formsAdmin">
                                <h1>Edite um produto</h1>
                                <label for="productId">Identifique o produto por ID:</label>
                            <input type="text" name="idProd" placeholder="ID do produto">

                                <label for="productName">Nome do Produto:</label>
                            <input type="text" name="nameProd" placeholder="Nome do Produto">
        
                            <label for="productPrice">Preço:</label>
                            <input type="number" name="priceProd" placeholder="Preço">
        
                            <label for="imageUrl">URL da Imagem:</label>
                            <input type="url" name="urlProd" placeholder="URL da Imagem">
                            <div id="message3"></div>
                        
                            <input type="submit" value="Alterar Informações">
                            </form>
                    
                    ` ;
                            const formEdit = document.querySelector("#formEdit");
                            formEdit.addEventListener("submit", (event) => {
                                event.preventDefault();

                                const url = "api/edit-product.php";
                                const options = {
                                    method: "POST",
                                    body: new FormData(formEdit)
                                }

                                fetch(url, options).then((response) => {
                                    response.json().then((editData) => {
                                        if (editData.type === "success") {
                                            document.querySelector("#message3").innerHTML = editData.message
                                        }
                                        else {
                                            document.querySelector("#message3").innerHTML = editData.message
                                        }
                                    });
                                })


                            });

                        });
                        //---------------------------delete admin------------------------------//
                        document.querySelector("#btnDeletAdmin").addEventListener("click", () => {
                            const sectionAdmin = document.querySelector("#section-admin").innerHTML =
                                `<form id="formDeleteAdmin" class="formsAdmin">
                                <h1>Deletar Administradorr</h1>
                                <label for="emailAdmin">Digite o email para deletar:</label>
        
                                <input type="email" name="email_admin" placeholder="Email">
        
                                <div id="message4"></div>
                                
                                <input type="submit" value="Remover Admin">
                                </form>
                    
                    ` ;
                            const formDeleteAdmin = document.querySelector("#formDeleteAdmin");
                            formDeleteAdmin.addEventListener("submit", (event) => {
                                event.preventDefault();

                                const url = "api/delete-admin.php";
                                const options = {
                                    method: "POST",
                                    body: new FormData(formDeleteAdmin)
                                }

                                fetch(url, options).then((response) => {
                                    response.json().then((adminData) => {
                                        if (adminData.type === "success") {
                                            document.querySelector("#message4").innerHTML = adminData.message
                                        }
                                        else {
                                            document.querySelector("#message4").innerHTML = adminData.message
                                        }
                                    });
                                })


                            });

                        });

                        //---------------------------delete product------------------------------//
                        document.querySelector("#btnDeletProduct").addEventListener("click", () => {
                            const sectionAdmin = document.querySelector("#section-admin").innerHTML =
                                `<form id="formDeleteProduct" class="formsAdmin">
                                <h1>Deletar Produto por ID</h1>
                                <label for="emailAdmin">Digite o ID do produto para deletar:</label>
        
                                <input type="text" name="productId" placeholder="ID Produto">
        
                                <div id="message5"></div>
                                
                                <input type="submit" value="Remover produto">
                                </form>
                    
                    ` ;
                            const formDeleteProduct = document.querySelector("#formDeleteProduct");
                            formDeleteProduct.addEventListener("submit", (event) => {
                                event.preventDefault();

                                const url = "api/delete-product.php";
                                const options = {
                                    method: "POST",
                                    body: new FormData(formDeleteProduct)
                                }

                                fetch(url, options).then((response) => {
                                    response.json().then((productData) => {
                                        if (productData.type === "success") {
                                            document.querySelector("#message5").innerHTML = productData.message
                                        }
                                        else {
                                            document.querySelector("#message5").innerHTML = productData.message
                                        }
                                    });
                                })


                            });

                        });

                        //---------------------------delete product------------------------------//
                        document.querySelector("#btnDeletProduct").addEventListener("click", () => {
                            const sectionAdmin = document.querySelector("#section-admin").innerHTML =
                                `<form id="formDeleteProduct" class="formsAdmin">
                                <h1>Deletar Produto por ID</h1>
                                <label for="emailAdmin">Digite o ID do produto para deletar:</label>
        
                                <input type="text" name="productId" placeholder="ID Produto">
        
                                <div id="message5"></div>
                                
                                <input type="submit" value="Remover produto">
                                </form>
                    
                    ` ;
                            const formDeleteProduct = document.querySelector("#formDeleteProduct");
                            formDeleteProduct.addEventListener("submit", (event) => {
                                event.preventDefault();

                                const url = "api/delete-product.php";
                                const options = {
                                    method: "POST",
                                    body: new FormData(formDeleteProduct)
                                }

                                fetch(url, options).then((response) => {
                                    response.json().then((productData) => {
                                        if (productData.type === "success") {
                                            document.querySelector("#message5").innerHTML = productData.message
                                        }
                                        else {
                                            document.querySelector("#message5").innerHTML = productData.message
                                        }
                                    });
                                })


                            });

                        });
                        //---------------------------delete user------------------------------//
                        document.querySelector("#btnDeletUser").addEventListener("click", () => {
                            const sectionAdmin = document.querySelector("#section-admin").innerHTML =
                                `<form id="formDeleteUser" class="formsAdmin">
                                <h1>Deletar usuário por email</h1>
                                <input type="email" name="email" placeholder="Email">
                                <div id="message6"></div>
                                <input type="submit" value="Remover usuário">
                                
                                </form>
                    
                    ` ;
                            const formDeleteUser = document.querySelector("#formDeleteUser");
                            formDeleteUser.addEventListener("submit", (event) => {
                                event.preventDefault();

                                const url = "api/delete-user.php";
                                const options = {
                                    method: "POST",
                                    body: new FormData(formDeleteUser)
                                }

                                fetch(url, options).then((response) => {
                                    response.json().then((productData) => {
                                        if (productData.type === "success") {
                                            document.querySelector("#message6").innerHTML = productData.message
                                        }
                                        else {
                                            document.querySelector("#message6").innerHTML = productData.message
                                        }
                                    });
                                })


                            });

                        });


                    } else {
                        updateMessage();
                    }
                }, 1000);

                updateMessage();



            }
        })
    })


})




