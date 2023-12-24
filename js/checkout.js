document.addEventListener('DOMContentLoaded', () => {
    const carrinhoDiv = document.querySelector(".cart-content");

    const carrinhoArmazenado = localStorage.getItem('carrinho');
    let produtosCarrinho = carrinhoArmazenado ? JSON.parse(carrinhoArmazenado) : [];

   
    produtosCarrinho.forEach(produto => {
      var colocam = document.createElement('div');
      colocam.classList.add('cart-item');
      colocam.innerHTML = `
        <img src="${produto.url_product}">
        <h3>${produto.name_product}</h3>
        <p>R$: ${produto.price_product}</p>
        <div>
          <span class="quantity">Quantidade ${produto.quantity}</span>
        </div>`;
      carrinhoDiv.appendChild(colocam);
    });
  });
  function buy() {
    const divBuy = document.querySelector(".finishBuy");
    divBuy.innerHTML = "Compra Realizada com sucesso! Obrigado pela preferência";
    
    localStorage.removeItem('carrinho');
    const carrinhoDiv = document.querySelector(".cart-content");
    carrinhoDiv.innerHTML = "";
    
    setTimeout(function () {
        window.location.href = "homePage.php"; 
    }, 2000);
}
  