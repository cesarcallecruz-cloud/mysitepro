// Efecto de aparición al bajar el scroll
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
    
    // Cambiar header al hacer scroll
    const header = document.querySelector('.header-fs');
    if (window.scrollY > 50) {
        header.style.background = "var(--navy-dark)";
        header.style.padding = "10px 0";
    } else {
        header.style.background = "transparent";
        header.style.padding = "20px 0";
    }
});