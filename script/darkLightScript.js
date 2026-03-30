
const btn = document.getElementById('btn-theme');
const html = document.documentElement;

// 1. Al cargar, aplicar el tema guardado o el oscuro por defecto
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-bs-theme', savedTheme);
actualizarBoton(savedTheme);

// 2. Evento al hacer clic en el botón
btn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Aplicar nuevo tema
    html.setAttribute('data-bs-theme', newTheme);
    // Guardar preferencia
    localStorage.setItem('theme', newTheme);
    // Actualizar texto del botón
    actualizarBoton(newTheme);
});

// Función para cambiar el texto o icono del botón
function actualizarBoton(theme) {
    btn.innerText = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

