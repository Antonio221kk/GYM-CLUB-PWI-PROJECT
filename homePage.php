<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/homePage.css">
  <script type="text/javascript" src="js/homePage.js" async></script>
  <link rel="stylesheet" href="css/fontawesome-free-6.4.0-web/fontawesome-free-6.4.0-web/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  <link rel="icon" href="css/favIconHouse.svg">
  <title>HOMEPAGE</title>
</head>

<body>
  <header>
    <div class="logo">
      <img class="logo-img" src="css/imagens/logoIndex.png" alt="Logo">
    </div>
    <div class="frase">
      <h1 class="frase-h1">Qual sua meta?</h1>
    </div>
    <div class="cart-shopping">
    <i class="fa-solid fa-cart-shopping" style="color: #ffffff;" ></i></i>
    </div>
    <div class="account"><i class="fa-regular fa-circle-user" id="openModalBtn" style="color: #ffffff;" ></i>
    </div>
    <div class="nav-right">
    <i class="fa-solid fa-bars" style="color: #ffffff;" ></i>
    </div>
  </header>
    <div id="myModal" class="modal">
      <div class="modal-content">
          <span class="close" id="closeModalBtn">&times;</span>
          <div class="profile-tab">
              <h2>Usuário Gym Club</h2>
              <img src="avatar.jpg" alt="Imagem do Perfil">
              <p><strong>Nome:</strong> John Doe</p>
              <p><strong>Email:</strong> john.doe@example.com</p>
              <button id="logout">Sair</button>
          </div>
      </div>
  </div>
  <section class="org">

    <div class="box">
      <p class="p-treino">Treino Inicial Gym Club</p>
      <a href="api/treinoinicial.pdf" target="_blank" class="btn-treino">Treino inicial!</a>
    </div>

    <div class="box-text">
      <p class="p-treino">Desenvolvemos um treino inicial abrangente para novos alunos.
        Para uma experiência ainda mais especial e individualizada,
        consulte um personal de sua confiança.
      </p>
    </div>
  </section>

  <section class="loja">
  <div class="h1-loja">
    <h1 >Loja Gym Club</h1>
  </div>
  <div class="search-products">
    <input type="text" placeholder="Pesquisar produto..." name="pesquisarProdutos" id="pesquisar">
  </div>
    <div class="container">

    </div>
  </section>

  <footer>

    <h2>Redes profissionais</h2>
    <a href="https://github.com/Antonio221kk" target="_blank"><i class="fa-brands fa-github" style="color: white;"></i></a> <a href="https://www.linkedin.com/in/antoniomsouza2/" target="_blank"><i class="fa-brands fa-linkedin" style="color: #1226bf;"></i></a>
    <p>Os desenvolvedores agradecem sua visita ao site!</p>
  </footer>
</body>
</body>

</html>