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
      <div class="account"><i class="fa-regular fa-circle-user" style="color: #ffffff;" onclick="openAccount()"></i></div>
      <div class="nav-right">
        
        <nav class="menu-lateral">
          <div class="btn-expandir">
            <i class="bi bi-list" id="bar-i"></i>
          </div>
        </nav>
          
        <ul>
          <li class="item-menu">
            <a href="#">
              <span class="icon"></span>
              <span class="txt-link"></span>
            </a>
          </li>
          <li class="item-menu">
            <a href="#">
              <span class="icon"></span>
              <span class="txt-link"></span>
            </a>
          </li>
          <li class="item-menu">
            <a href="#">
              <span class="icon"></span>
              <span class="txt-link"></span>
            </a>
          </li>
        </ul>
          
      </div>
  </header>
  <div class="div-account">
  <dialog id="account-modal" class="account-modal">
  <i class="fa-solid fa-x" style="color: #000000;" onclick="closeAccount()"></i>

    <h1>teste de modal</h1>

    <p>informações do usuario</p>
  </dialog>
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


  <section class="maquinas">


  </section>

  <footer>
    
  <h2>Redes profissionais</h2>
   <a href="https://github.com/Antonio221kk" target="_blank"><i class="fa-brands fa-github" style="color: white;"></i></a> <a href="https://www.linkedin.com/in/antoniomsouza2/" target="_blank"><i class="fa-brands fa-linkedin" style="color: #1226bf;"></i></a>
    <p>Os desenvolvedores agradecem sua visita ao site!</p>
  </footer>
   </body>
</body>
</html>