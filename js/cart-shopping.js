function openCart() {
    document.querySelector('.cart-container').style.width = '300px';
}
function closeCart() {
    document.querySelector('.cart-container').style.width = '0';
}

function addToCart(product) {
    // Adicione a lógica para adicionar o produto ao carrinho
    // Pode ser um objeto JavaScript ou manipulação de DOM
  
    // Produtos fictícios
    const product1 = { name: 'Camiseta Gym Club', price: 25.99, quantity: 1, url: 'caminho_para_imagem1' };
    const product2 = { name: 'Shorts de Treino', price: 19.99, quantity: 1, url: 'caminho_para_imagem2' };
  
    // Adicione os produtos fictícios ao carrinho
    displayProduct(product1);
    displayProduct(product2);
  }
  
  // Adicione um produto fictício diretamente no HTML
  addToCart({
    name: 'Produto Fictício',
    price: 10.00,
    quantity: 1,
    url: 'caminho_para_imagem_ficticia'
  });
  