// Menu mobile : afficher/cacher le menu au clic
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');
menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
});
