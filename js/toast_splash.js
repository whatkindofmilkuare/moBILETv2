document.addEventListener("DOMContentLoaded", function() {
    // Funkcja, która pobiera wszystkie parametry z URL
    function getURLParams() {
        const params = new URLSearchParams(window.location.search);
        return params;
    }

    // Funkcja do sprawdzania obecności konkretnego parametru
    function hasParam(param) {
        const params = getURLParams();
        return params.has(param);
    }

    function isLinux() {
        return navigator.platform.toLowerCase().includes('linux');
    }

    // Funkcja, która obsługuje parametry skipSplash, skipToast, skipSplash&Toast
    function handleParams() {
        const params = getURLParams();
        
        // Sprawdzenie parametru ?skipSplash&Toast
        if (params.has('skipSplash') && params.has('skipToast')) {
            console.log('Splash i Toast zostaną pominięte');
            if (isLinux()) {
                console.log("Urządzenie działa na systemie Linux.");
                document.getElementById('splash-screen').style.display = 'none';
                document.getElementById('toast').style.display = 'none';
                document.getElementById('content').style.display = 'block';
            } else {
                console.log("Urządzenie NIE działa na systemie Linux.");
                document.getElementById('splash-screen').style.display = 'flex';
                setTimeout(function splashscreen() {
                    document.getElementById('splash-screen').style.display = 'none';
                }, 1500);
                document.getElementById('toast').style.display = 'none';
                document.getElementById('content').style.display = 'block';
            }
            return;
        } else {
            document.getElementById('splash-screen').style.display = 'flex';
            setTimeout(function splashscreen() {
               document.getElementById('splash-screen').style.display = 'none';
            }, 1500);
            document.getElementById('toast').style.display = 'block';
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2500); // Toast znika po 2,5 sekundach
            document.getElementById('content').style.display = 'block';
        }
        
        // Sprawdzenie parametru ?skipSplash
        if (params.has('skipSplash')) {
            console.log('Splash zostanie pominięty');
            document.getElementById('splash-screen').style.display = 'none';
            document.getElementById('toast').style.display = 'block';
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2500); // Toast znika po 2,5 sekundach
            document.getElementById('content').style.display = 'block';
        }

        // Sprawdzenie parametru ?skipToast
        if (params.has('skipToast')) {
            console.log('Toast zostanie pominięty');
            document.getElementById('splash-screen').style.display = 'flex';
            setTimeout(function splashscreen() {
                document.getElementById('splash-screen').style.display = 'none';
            }, 1500);
            document.getElementById('toast').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }


    }

    // Wywołanie funkcji, aby sprawdzić parametry przy załadowaniu strony
    handleParams();
});