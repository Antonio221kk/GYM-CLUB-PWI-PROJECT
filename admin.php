<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administração Gym Club</title>
    <link rel="stylesheet" href="css/login.css">
    <script src="js/admin.js" async></script>
</head>
<body>
<section>
        <div class="login">
            <div class="login-h1">
                <h1>Administração Gym Club</h1>
            </div>
            <form>
                <label for="cpf">CPF:</label>
                <input type="text" name="cpf" pattern="\d{3}\d{3}\d{3}\d{2}" placeholder="CPF">
                <label for="password">SENHA:</label>
                <input type="password" class="senha" id="senha" placeholder="SENHA">
                <a href="#"><p>Esqueci minha senha</p></a>
                <input type="submit" value="Entrar">
            </form>
        </div>
    </section>
    
    
</body>
</html>