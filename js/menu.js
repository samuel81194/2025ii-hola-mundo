document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = window.location.hostname.includes('github.io') 
        ? 'https://jcarroyos-teaching.github.io/2025ii-hola-mundo' 
        : '';

    const header = document.createElement('header');
    header.innerHTML = `
        <div class="container">
            <nav>
                <ul>
                    <li><a href="${baseUrl}/index.html">Inicio</a></li>
                    <li><a href="${baseUrl}/pages/jcarroyos.html">jcarroyos</a></li>
                    <!-- Agrega más enlaces según sea necesario -->
                </ul>
            </nav>
        </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);
});