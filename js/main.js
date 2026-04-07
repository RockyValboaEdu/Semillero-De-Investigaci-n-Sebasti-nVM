const elementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      // ENTRA → quitamos salida
      entry.target.classList.remove('animate__fadeOutLeft');
    } else {
      // SALE → animación salida
      entry.target.classList.add('animate__animated', 'animate__fadeOutLeft');
    }

  });
}, {
  threshold: 0.2
});

elementos.forEach(el => observer.observe(el));

function abrirImagen(img) {
  const imagenModal = document.getElementById("imagenModal");
  imagenModal.src = img.src;
}