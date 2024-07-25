window.addEventListener('load', (event) => {
    // Ukryj loader i pokaż zawartość strony po załadowaniu wszystkich zasobów
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.body.style.display = 'block';
    console.log('Strona w pełni załadowana');
});