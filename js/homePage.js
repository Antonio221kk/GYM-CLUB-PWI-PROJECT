document.addEventListener("DOMContentLoaded", () => {
    const btnPeito = document.querySelector("#showPeito");
    const btnPernas = document.querySelector("#showPernas");
    const btnOmbros = document.querySelector("#showOmbros");
    const btnCostas = document.querySelector("#showCostas");
    const btnCardio = document.querySelector("#showCardio");

    const dialogPeito = document.querySelector("#dialogPeito");
    const dialogPernas = document.querySelector("#dialogPernas");
    const dialogOmbros = document.querySelector("#dialogOmbros");
    const dialogCostas = document.querySelector("#dialogCostas");
    const dialogCardio = document.querySelector("#dialogCardio");

    const closePeito = document.querySelector("#closePeito");
    const closePernas = document.querySelector("#closePernas");
    const closeOmbros = document.querySelector("#closeOmbros");
    const closeCostas = document.querySelector("#closeCostas");
    const closeCardio = document.querySelector("#closeCardio");

    btnPeito.addEventListener("click", () => {
      dialogPeito.showModal();
    });
    btnPernas.addEventListener("click", () => {
      dialogPernas.showModal();
    });
    btnOmbros.addEventListener("click", () => {
      dialogOmbros.showModal();
    });
    btnCostas.addEventListener("click", () => {
      dialogCostas.showModal();
    });
    btnCardio.addEventListener("click", () => {
      dialogCardio.showModal();
    });
    
    closePeito.addEventListener("click", () => {
      dialogPeito.close();
    });
    closePernas.addEventListener("click", () => {
      dialogPernas.close();
    });
    closeOmbros.addEventListener("click", () => {
      dialogOmbros.close();
    });
    closeCostas.addEventListener("click", () => {
      dialogCostas.close();
    });
    closeCardio.addEventListener("click", () => {
      dialogCardio.close();
    });
    
  });

  //carrinho de compras

function toggleCarrinho() {
  const carrinho = document.querySelector('.carrinho-conteudo');
  carrinho.classList.toggle('aberto');
}
document.addEventListener('DOMContentLoaded',() =>{
  const btnCarrinho = document.querySelector('.btnCarrinho');
  btnCarrinho.addEventListener('click', toggleCarrinho);
});
const contentSuples = document.querySelectorAll('.content-suple');
const carrinhoConteudo = document.querySelector('.carrinho-conteudo');
let total = 0;
const totalElement = document.createElement('p');
totalElement.classList.add('total');
carrinhoConteudo.appendChild(totalElement);

// Função para atualizar o total no carrinho
function atualizarTotal() {
  totalElement.innerText = "Total: R$ " + total.toFixed(2);
}

// Função para remover um item do carrinho
function removerItem(itemElement, preco) {
  total -= preco;
  itemElement.remove();
  atualizarTotal();
}

// Adiciona um ouvinte de evento de clique em cada div com a classe .content-suple
contentSuples.forEach(function(contentSuple) {
  contentSuple.addEventListener('click', function() {
    const titulo = contentSuple.querySelector('h1').innerText;
    const preco = parseFloat(contentSuple.querySelector('h3').innerText.replace('R$', ''));
    total += preco;

    // Cria um elemento para o item no carrinho
    const itemElement = document.createElement('div');
    itemElement.classList.add('item-carrinho');
    itemElement.innerHTML = "<p>" + titulo + " - R$ " + preco.toFixed(2) + "</p>";
    
    // Cria um botão de remover para o item
    const removerButton = document.createElement('button');
    removerButton.classList.add('removeItems');
    removerButton.innerText = 'Remover Item';
    removerButton.addEventListener('click', function() {
      removerItem(itemElement, preco);
    });
    
    itemElement.appendChild(removerButton);

    // Adiciona o item ao carrinho
    carrinhoConteudo.appendChild(itemElement);
    
    atualizarTotal();
  });
});

// Botão de Finalizar Compra
const finalizarButton = document.createElement('button');
finalizarButton.classList.add('finalizarCompra')
finalizarButton.innerText = 'Finalizar Compra';
finalizarButton.addEventListener('click', function() {
  carrinhoConteudo.innerHTML = "";
  total = 0;
  atualizarTotal();
  alert("Compra finalizada com sucesso!");
});

carrinhoConteudo.appendChild(finalizarButton);
atualizarTotal();
