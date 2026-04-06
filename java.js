// Cambiar fondo del header al bajar
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-fs');
    if (window.scrollY > 50) {
        header.style.background = "#020c1b";
        header.style.padding = "10px 0";
    } else {
        header.style.background = "transparent";
        header.style.padding = "20px 0";
    }
});

// Animación de revelado suave al entrar en las secciones
const reveals = document.querySelectorAll('.reveal, .v-card, .content-side');

const revealOnScroll = () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

// Inicialización de estilos para la animación
reveals.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1s ease-out";
});

window.addEventListener('scroll', revealOnScroll);