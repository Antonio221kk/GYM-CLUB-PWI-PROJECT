document.querySelector('#openModalBtn').addEventListener('click', function () {
  document.querySelector('#myModal').style.display = 'block';
});


const urlSession = "app/test-session.php";
fetch(urlSession).then((response) => {
  response.json().then((sessionData) => {
    if (sessionData.type === "error") {
      window.location.href = "login.php";
    }

  });
})

const urlGetProducts = "api/view-products.php";

fetch(urlGetProducts).then((response) => {
  response.json().then((products) => {
    const container = document.querySelector(".container");

    products.forEach(product => {
      const productBox = document.createElement('div');
      productBox.classList.add('product-box');

      productBox.innerHTML = `
        <img src="${product.url_product}">
        <h3>${product.name_product}</h3>
        <p>R$: ${product.price_product}</p>
        <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
      `;

      container.appendChild(productBox);
    });
  });
});

// Conta do Usuário

const urlUser = "app/test-session.php";

fetch(urlUser).then((response) => {
  response.json().then((userData) => {
    let user = userData.user;
    const modalContent = document.querySelector(".modal-content").innerHTML = `
    <span class="close" id="closeModalBtn">&times;</span>
          <div class="profile-tab">
          <h2>Usuário Gym Club</h2>
          <img src="" alt="Imagem do Perfil" id="imgUser">
            <form class="formUpload">
              <input type="file" id="changephoto" class="file-input" name="foto">
              <input type="submit" value="Atualizar foto" class="btnPhoto">
            </form>
              <p><strong>Nome:</strong> ${user.name}</p>
              <p><strong>Email:</strong> ${user.email}</p>
              <button id="logout">Logout</button>
          </div>
    `;
    document.querySelector('#closeModalBtn').addEventListener('click', function () {
      document.querySelector('#myModal').style.display = 'none';
    });

    window.addEventListener('click', function (event) {
      if (event.target == document.querySelector('#myModal')) {
        document.querySelector('#myModal').style.display = 'none';
      }
      const urlLogout = "app/logout.php";

      const btnLogout = document.querySelector("#logout")
      btnLogout.addEventListener('click', () => {
        fetch('app/logout.php');
        window.location.href = 'login.php';
      });
    });

    const formUpload = document.querySelector(".formUpload");
    formUpload.addEventListener('submit', (e) => {
    
      e.preventDefault();
            
      const url = "api/upload.php";
      const options = {
        method: "POST",
        body: new FormData(formUpload)
      }
      fetch(url,options).then((response)=>{
          response.json().then((data)=>{
            if(data.type === "success"){
              let imgElement = document.querySelector("#imgUser");

              imgElement.src = `imageUsers/${data.photo}`;
              
             }
          })
      })
    
       
       
    });

  })
})

// LOGOUT



const searchProducts = document.querySelector("#pesquisar");
const container = document.querySelector(".container");

searchProducts.addEventListener("input", () => {
  const searchTerm = searchProducts.value.trim();

  if (searchTerm === "") {
    clearContainer();
  } else {
    searchProductsByName(searchTerm);
  }
});

function searchProductsByName(name) {
  const url = `api/search-products.php?name=${encodeURIComponent(name)}`;

  fetch(url).then((response) => response.json())
    .then((matchingProducts) => {
      clearContainer();
      matchingProducts.forEach((product) => {
        appendProductToContainer(product);
      });
    })
    .catch((error) => {
      console.error("Erro na solicitação:", error);
    });
}

function clearContainer() {
  container.innerHTML = "";
}

function appendProductToContainer(product) {
  const productBox = document.createElement("div");
  productBox.classList.add("product-box");

  productBox.innerHTML = `
    <img src="${product.url_product}">
    <h3>${product.name_product}</h3>
    <p>R$: ${product.price_product}</p>
    <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
  `;

  container.appendChild(productBox);
}

// UPLOAD FOTO

