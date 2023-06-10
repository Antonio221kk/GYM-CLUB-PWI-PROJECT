const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.navBar');
const toggleMenu = document.getElementById('toggle-menu');

// Adicionar um manipulador de eventos ao ícone do menu
menuIcon.addEventListener('click', function() {
    // Alternar a exibição da barra de navegação
    navBar.style.display = navBar.style.display === 'none' ? 'block' : 'none';

    // Alternar o estado do checkbox
    toggleMenu.checked = !toggleMenu.checked;
});
