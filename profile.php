<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/profile.js" async></script>
    <link rel="stylesheet" href="css/profile.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <title>Perfil Gym Club</title>
</head>
<body>
    <header>
        <button class="back" onclick="back()">Retornar ao site</button>
    </header>
<div class="profile-tab">
        <div class="profile-header">
            <h2>Usuário</h2>
            <img src="css/imagens/user.jpg" alt="Imagem do Perfil" id="imgUser" class="profile-image">
            <form class="formUpload">
                <label for="changephoto" class="file-label">
                    Escolher Foto
                    <input type="file" id="changephoto" class="file-input" name="foto">
                </label>
                <input type="submit" value="Atualizar Foto" class="btnPhoto">
            </form>
        </div>
        <div class="user-details">
            
        </div>
        <button id="logout" class="logout-btn">Logout</button>
    </div>

</body>
</html>