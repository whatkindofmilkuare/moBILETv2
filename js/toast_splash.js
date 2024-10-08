document.addEventListener("DOMContentLoaded", function() {
    // Sprawdź obecność parametrów `skipSplash` i `skipToast` w URL
    const urlParams = new URLSearchParams(window.location.search);
    const skipSplash = urlParams.has('skipSplash');
    const skipToast = urlParams.has('skipToast');
    
    // Sprawdź, czy urządzenie to Android
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (!skipSplash) {
        // Obsługa splash screen
        setTimeout(function() {
            // Sprawdź, czy `skipToast` jest obecny
            if (skipToast && isAndroid) {
                // Na Androidzie z `skipToast` blokujemy wyświetlanie splash screen
                document.getElementById('splash-screen').style.display = 'none';
                document.getElementById('content').style.display = 'block';
            } else {
                // Normalne zachowanie dla nie-Androida lub bez `skipToast`
                document.getElementById('splash-screen').style.display = 'none';
                document.getElementById('content').style.display = 'block';

                if (!skipToast) {
                    // Po wyłączeniu splash screen, pokaż toast
                    const toast = document.getElementById('toast');
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 1500); // Toast znika po 1,5 sekundy
                } else {
                    // Jeśli `skipToast` jest obecny, nie pokazuj toast
                    document.getElementById('toast').style.display = 'none';
                }
            }
        }, 500); // Splash screen znika po 0,5 sekundach
    } else {
        // Jeśli `skipSplash` jest obecny, od razu pokaż zawartość
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';

        // Sprawdź, czy `skipToast` jest obecny
        if (!skipToast) {
            // Pokazanie toastu nawet gdy `skipSplash` jest obecny
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2500); // Toast znika po 2,5 sekundach
        } else {
            // Jeśli `skipToast` jest obecny, nie pokazuj toast
            document.getElementById('toast').style.display = 'none';
        }
    }
});
