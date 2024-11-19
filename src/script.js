document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', function() {
        this.style.height = 'auto'; // Resetea la altura
        this.style.height = (this.scrollHeight) + 'px'; // Ajusta la altura según el contenido
    });
});


