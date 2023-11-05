<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/fontawesome-free-6.4.0-web/fontawesome-free-6.4.0-web/css/all.min.css">
    <link rel="shortcut icon" href="css/imagens/registered.png" type="image/x-icon">
    <script src="js/login.js" async></script>
    <title>Espaço do Cliente</title>
</head>

<body>
    <header>
        <div class="img-header">
            <img src="css/imagens/logoIndex.png" alt="Gym Club">
        </div>

        <button class="registrar" onclick="transfer()">Primeiro acesso</button>
    </header>
    <section>
        <div class="login">
            <div class="login-h1">
                <h1>Acesse o Espaço do Cliente</h1>
            </div>
            <form id="form-login">
                <label for="cpf">EMAIL:</label>
                <input type="email" name="email" placeholder="EMAIL">
                <label for="password">SENHA:</label>
                <input type="password" name="password" class="password" id="password" placeholder="SENHA">
                <a href="#"><p>Esqueci minha senha</p></a>
                <div id="message"></div>
                <input type="submit" value="Entrar">
            </form>
        </div>
    </section>
</body>

</html>