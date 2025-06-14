// Scroll suave para navegación
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        if(this.hash) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// (Opcional) Maneja el envío del formulario de contacto
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Mensaje enviado. Gracias por contactarnos.");
    this.reset();
});