window.addEventListener('scroll', () => {
    // Animación de aparición
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });

    // Header cambia de color
    const header = document.querySelector('.header-fs');
    if (window.scrollY > 50) {
        header.style.background = "#020c1b";
    } else {
        header.style.background = "rgba(2, 12, 27, 0.9)";
    }
});