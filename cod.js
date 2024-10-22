let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const consulta = document.getElementById('consulta').value;

    // Crear el enlace mailto
    const mailtoLink = `mailto:administracion@berplast.com?subject=Consulta de ${nombre}&body=Nombre: ${nombre}%0AEmail: ${email}%0AConsulta: ${consulta}`;

    // Abrir el cliente de correo del usuario con el mensaje prellenado
    window.location.href = mailtoLink;
});
