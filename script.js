// Selecciona el botón de menú y la lista de navegación
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Añade el evento de clic para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});
