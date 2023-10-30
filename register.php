<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro Gym Club</title>
    <script src="js/login.js" async></script>
    <link rel="stylesheet" href="css/register.css">
    <script src="js/register.js" async></script>
    <link rel="stylesheet" href="css/fontawesome-free-6.4.0-web/fontawesome-free-6.4.0-web/css/all.min.css">
</head>

<body>
    <header>
        <div class="img-header">
            <img src="css/imagens/logoIndex.png" alt="Gym Club">
        </div>
    </header>
    <div class="centro">

        <section class="cadastro">
            <div class="cadastro-h1">
                <h1>Vamos criar seu cadastro na Gym Club</h1>
            </div>
            <div class="register">


                <form id="form-register">
                    <input type="text" name="name" placeholder="Nome Completo">
                    <input type="email" name="email" placeholder="Email">
                    <input type="password" name="password" id="password" placeholder="Senha">
                    <input type="submit" value="Cadastrar">
                    <div id="message"></div>
                </form>
            </div>
        </section>

        <aside class="planos">
            <div class="h1-planos">
                <h1 id="h1-planos">Escolha um plano</h1>
            </div>
            <div class="div-container">

                <div class="box">
                    <div class="div-checkbox">
                        <input type="radio" name="opcao" id="diario" class="checkbox" value="20.00">
                    </div>
                    <h3>Diário</h3>
                    <div class="div-value">
                        <div class="btnValue">R$20.00</div>
                    </div>
                </div>
                <div class="box">
                    <div class="div-checkbox">
                        <input type="radio" name="opcao" id="mensal" class="checkbox" value="80.00">
                    </div>
                    <h3>Mensal</h3>
                    <div class="div-value">
                        <div class="btnValue">R$80.00</div>
                    </div>
                </div>
                <div class="box">
                    <div class="div-checkbox">
                        <input type="radio" name="opcao" id="anual" class="checkbox" value="900.00">
                    </div>
                    <h3>Anual</h3>
                    <div class="div-value">
                        <div class="btnValue">R$900.00</div>
                    </div>

                </div>
            </div>

        </aside>
    </div>

</body>

</html>