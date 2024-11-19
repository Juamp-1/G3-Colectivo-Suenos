document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('campaña-selector');
    
    // Función para mostrar contenido de una campaña (esta función no se usa ya que el contenido está fijo)
    function showCampaña(camp) {
        console.log('Mostrando contenido de campaña:', camp);
        
        // Aquí iría la lógica para mostrar el contenido, pero como está fijo en HTML, no es necesario
    }

    // Event listener para cambiar de campaña
    selector.addEventListener('click', (e) => {
        if (e.target && e.target.matches('.campaña-option')) {
            showCampaña(e.target.getAttribute('data-camp'));
            e.preventDefault(); // Evita que se siga ejecutando el evento por defecto
        }
    });

    // Mostrar contenido inicial
    setTimeout(() => {
        console.log('Contenido inicial mostrado');
    }, 100);
});
