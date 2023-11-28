function openCart() {
  document.querySelector('.cart-container').style.width = '300px';
}
function closeCart() {
  document.querySelector('.cart-container').style.width = '0';
}
function openSideMenu() {
  document.getElementById('sideMenuContainer').classList.add('side-menu-open');
}

function closeSideMenu() {
  document.getElementById('sideMenuContainer').classList.remove('side-menu-open');
}

function finalizarMenu() {
  // Lógica para finalizar o menu lateral
  closeSideMenu();
}



document.querySelector('#openModalBtn').addEventListener('click', function () {
  document.querySelector('#myModal').style.display = 'block';
});

let produtosCarrinho = [];

const urlSession = "app/test-session.php";
fetch(urlSession).then((response) => {
  response.json().then((sessionData) => {
    if (sessionData.type === "error") {
      window.location.href = "login.php";
    }
  });
})

const urlGetProducts = "api/view-products.php";


  fetch(urlGetProducts)
    .then(response => response.json())
    .then(products => {
      const container = document.querySelector(".container");
      const carrinhoDiv = document.querySelector(".cart-content");

      function salvarCarrinhoLocalStorage() {
        localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho));
      }

      function carregarCarrinhoLocalStorage() {
        const carrinhoArmazenado = localStorage.getItem('carrinho');
        if (carrinhoArmazenado) {
          produtosCarrinho = JSON.parse(carrinhoArmazenado);
          atualizarCarrinho();
        }
      }

      function atualizarCarrinho() {
        carrinhoDiv.innerHTML = '';
        let total = 0;

        for (let i in produtosCarrinho) {
          let produto = produtosCarrinho[i];
          var colocam = document.createElement('div');
          colocam.innerHTML = `
            <img src="${produto.url_product}">
            <h3>${produto.name_product}</h3>
            <p>R$: ${produto.price_product}</p>
            <div>
              <button class="remove-button">-</button>
              <span class="quantity">${produto.quantity}</span>
              <button class="add-button">+</button>
            </div>`;
          carrinhoDiv.appendChild(colocam);

          total += produto.price_product * produto.quantity;

          const addButton = colocam.querySelector('.add-button');
          const removeButton = colocam.querySelector('.remove-button');

          addButton.addEventListener('click', () => {
            produto.quantity += 1;
            salvarCarrinhoLocalStorage();
            atualizarCarrinho();
          });

          removeButton.addEventListener('click', () => {
            produto.quantity -= 1;
            if (produto.quantity <= 0) {
              produtosCarrinho = produtosCarrinho.filter((item) => item !== produto);
            }
            salvarCarrinhoLocalStorage();
            atualizarCarrinho();
          });
        }

        carrinhoDiv.insertAdjacentHTML('beforeend', `<hr class="hr"><p class='total'>Subtotal:  R$${total}</p>`);
      }

      products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.classList.add('product-box');

        productBox.innerHTML = `
          <img src="${product.url_product}">
          <h3>${product.name_product}</h3>
          <p>R$: ${product.price_product}</p>
          <button class="add-to-cart-btn">Adicionar ao Carrinho</button>`;

        container.appendChild(productBox);

        const addToCartButton = productBox.querySelector('.add-to-cart-btn');

        addToCartButton.addEventListener('click', () => {
          const existingProduct = produtosCarrinho.find((prod) => prod.name_product === product.name_product);

          if (existingProduct) {
            existingProduct.quantity += 1;
          } else {
            product.quantity = 1;
            produtosCarrinho.push(product);
          }

          salvarCarrinhoLocalStorage();
          atualizarCarrinho();
        });
      });

      carregarCarrinhoLocalStorage();
    });

    function finalizar() {
      if (produtosCarrinho.length > 0) {
        window.location.href = 'checkout.php';
      }else{
        document.querySelector(".finalizarCompra").innerHTML = "Adicione ao menos um produto";
      }
    }





// CARRINHO




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
      fetch(url, options).then((response) => {
        response.json().then((data) => {
          if (data.type === "success") {
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



