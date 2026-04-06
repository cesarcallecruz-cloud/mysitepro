// Efecto de aparición suave (Fade-in)
const revealElements = document.querySelectorAll('.mision-box, .valor-item, .historia-bg');

const scrollReveal = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

// Configuración inicial de los elementos
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
});

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal); // Ejecutar al cargar