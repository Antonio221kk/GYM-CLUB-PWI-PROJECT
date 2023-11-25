<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/fontawesome-free-6.4.0-web/fontawesome-free-6.4.0-web/css/all.min.css">
    <script type="text/javascript" src="js/index.js" async></script>
    <link rel="shortcut icon" href="css/imagens/favicon_index.png" type="image/x-icon">
    <title>Welcome to Gym Club</title>
</head>

<body>
    <header id="header-top">

        <div class="img-header">
            <img src="css/imagens/logoIndex.png" alt="Gym Club">
        </div>
        <div class="div-btn">
           <button class="btnMobile" aria-expanded="false" aria-label="Abrir Menu" aria-controls=".menu" aria-haspopup="true"><img src="css/imagens/menu.png" alt="Menu" id="menuImage"></button>
            <div class="menu">
            <a href="#h1-treinos" class="btnDiv">Planejamento</a>
            <a href="#h1-planos" class="btnDiv">Planos</a>
            <a href="#IMC" class="btnDiv">IMC</a>
            <button class="btnCadastro" onclick="transfer()">Espaço do Cliente</button>
        </div>
        </div>
    </header>
   
    <section class="sobre">
        <div class="sobre-span">
            <span>Onde a saúde, o fitness e a arquitetura moderna se</span>
            <span>encontram para criar a experiência perfeita de treinamento físico</span>
            <div class="marcas">
                <img src="css/imagens/max-titanium.svg" alt="max-titanium">
                <img src="css/imagens/insider.svg" alt="insider-roupas">
                <img src="css/imagens/boldsnacks.png" alt="bold-snacks">
            </div>
        </div>
      

        
    </section>
    <section class="treinos">
        <div>
            <h1 id="h1-treinos">Planejamento</h1>
        </div>
    <div class="div-container">    
       
        <div class="box">
        <div class="img-box">
            <img src="css/imagens/haltere.png">
        </div>
        <h3>Flexione o Musculo!</h3>
        <p>Crie tensão no musculo em seu treino para gerar hipertofria e fibras musculares!</p>

       </div>
       <div class="box">
        <div class="img-box">
            <img src="css/imagens/garrafa-de-agua.png">
        </div>
        <h3>Beba Água!</h3>
        <p>Beber água antes,durante e após o treino, ajuda na recuperação,hidratação muscular e eliminação de toxínas no corpo</p>
       </div>
       <div class="box">
        <div class="img-box">
            <img src="css/imagens/bicicleta.png">
        </div>
        <h3>Faça Cardio!</h3>
        <p>O Cardio ajuda na disposição, circulação do sangue, emagrecimento e melhora do sono</p>
       </div>
        <div class="box">
        <div class="img-box">
            <img src="css/imagens/prato.png">
        </div>
        <h3>Nutrição</h3>
        <p>Saiba como se alimentar! Entre em contato com nossos nutricionistas!</p>
        <button class="btnNutri" onclick="btnNutri()"><i class="fa-solid fa-arrow-right"></i></button>
       </div>
    </div>
    <div class="aviso"><span>Atenção! Oferecemos somente treinos de adaptação</span>
        <br>
    <span>Para um treino periodizado, instrutores devem ser consultados!</span>
    </div>   
    </section>

<section class="planos">
        <div>
            <h1 id="h1-planos">Planos</h1>
        </div>
    <div class="div-container">    
       
       <div class="box">
        <div class="img-box">
            <img src="css/imagens/dia.png">
        </div>
        <h3>Diário</h3>
        
        <ul>
            <li>Flexibilidade</li>
            <li>Sem compromisso</li>
            <li>Custo mais alto</li>
            <li>Falta de consistencia</li>
        </ul>
        <div class="div-value">
        <button class="btnValue" >R$20.00</button>
        </div>
       </div>
       <div class="box">
        <div class="img-box">
            <img src="css/imagens/mes.png">
        </div>
        <h3>Mensal</h3>
        <ul>
            <li>Econômia</li>
            <li>Acesso Ilimitado</li>
            <li>Consistencia</li>
            <li>Benefícios</li>
        </ul>
        <div class="div-value">
        <button class="btnValue" >R$80.00</button>
        </div>
       </div>
        <div class="box">
        <div class="img-box">
            <img src="css/imagens/ano.png">
        </div>
        <h3>Anual</h3>
        <ul>
            <li>Sem preocupação</li>
            <li>365 dias</li>
            <li>Mega desconto</li>
            <li>Compromisso 100%</li>
        </ul>
        <div class="div-value">
        <button class="btnValue">R$900.00</button>
        </div>
        
       </div>
    </div>
      
    </section>

    <section class="IMC" id="IMC">
        <div class="header">
          <h1 class="h1-imc">Calcule seu IMC</h1>
        </div>
        <div class="container">
        <div class="sub-header">
            <h3>IMC é uma medida internacional usada para calcular </h3>
            <h3>se uma pessoa está no peso ideal.</h3>
        </div>
        
          <form id="form-imc">
            <label for="peso">Peso (kg):</label>
            <input type="number" id="peso" placeholder="Peso (00.00)" required>
      
            <label for="altura">Altura (Centímetro):</label>
            <input type="number" id="altura" placeholder="Altura (000)" required>
      
            <button type="button" class="btnIMC" onclick="calcularIMC()">Calcular</button>
          </form>
          <div id="resultado">Seu resultado aqui!</div>
        </div>
      </section>
  
      <footer>
    
        <h2>Redes profissionais</h2>
       <a href="https://github.com/Antonio221kk" target="_blank"><i class="fa-brands fa-github" style="color: white;"></i></a> <a href="https://www.linkedin.com/in/antoniomsouza2/" target="_blank"><i class="fa-brands fa-linkedin" style="color: #1226bf;"></i></a>
        <p>GYM CLUB 2023 <i class="fa-regular fa-registered" style="color: #ffffff; font-size: 20px; padding: 0;"></i></p>
      </footer>
  
</body>

</html>