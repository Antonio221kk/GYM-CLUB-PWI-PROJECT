document.querySelector('#openModalBtn').addEventListener('click', function () {
  document.querySelector('#myModal').style.display = 'block';
});

document.querySelector('#closeModalBtn').addEventListener('click', function () {
  document.querySelector('#myModal').style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target == document.querySelector('#myModal')) {
    document.querySelector('#myModal').style.display = 'none';
  }
});

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


let searchProducts = document.querySelector("#pesquisar");

searchProducts.addEventListener("input",()=>{
  searchTerm = searchProducts.value;
  const url = "api/search-products.php?name=${searchTerm}";

  fetch(url).then((response)=>{
        response.text().then()
    });
})
