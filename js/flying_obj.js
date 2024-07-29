document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById('animatedImage');
    const container = document.querySelector('.flyingobject');
    const containerWidth = container.offsetWidth;
    let imgWidth = img.offsetWidth;
    let position = -imgWidth;

    function animate() {
        if (position >= containerWidth) {
            img.style.visibility = 'hidden'; // Ukrywanie obiektu gdy osiągnie on prawą krawędź
            setTimeout(() => {
                position = -imgWidth; // Resetowanie pozycji obiektu po 2 sekundach od osiągnięcia przez niego prawej krawędzi
                img.style.left = position + 'px';
                img.style.visibility = 'visible'; // Ponowne ukazanie się obiektu
                requestAnimationFrame(animate); // Restart animacji
            }, 1750); // 2 sekundowe opóźnienie
        } else {
            position += 8; // Przesunięcie o x pikseli na klatkę (zmiana szybkości lotu obiektu)
            img.style.left = position + 'px';
            requestAnimationFrame(animate);
        }
    }

    // Initialize image position
    img.style.left = position + 'px';

    // Start the animation
    animate();
});



document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById('animatedImage2');
    const container = document.querySelector('.flyingobject2');
    const containerWidth = container.offsetWidth;
    let imgWidth = img.offsetWidth;
    let position = -imgWidth;

    function animate() {
        if (position >= containerWidth) {
            img.style.visibility = 'hidden'; // Ukrywanie elementu gdy osiągnie on prawą krawędź
            setTimeout(() => {
                position = -imgWidth; // Resetowanie pozycji obiektu po 2 sekundach od osiągnięcia przez niego prawej krawędzi
                img.style.left = position + 'px';
                img.style.visibility = 'visible'; // Ponowne ukazanie się obiektu
                requestAnimationFrame(animate); // Restart animacji
            }, 1750); // 2 sekundowe opóźnienie
        } else {
            position += 8; // Przesunięcie o x pikseli na klatkę (zmiana szybkości lotu obiektu)
            img.style.left = position + 'px';
            requestAnimationFrame(animate);
        }
    }

    // Initialize image position
    img.style.left = position + 'px';

    // Start the animation
    animate();
});