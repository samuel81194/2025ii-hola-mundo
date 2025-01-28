document.addEventListener('DOMContentLoaded', function() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="container">
            <nav>
                <ul>
                    <li><a href="/2025ii-hola-mundo/index.html">Inicio</a></li>
                    <li><a href="/2025ii-hola-mundo/pages/jcarroyos.html">jcarroyos</a></li>
                    <!-- Agrega más enlaces según sea necesario -->
                </ul>
            </nav>
        </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);
});