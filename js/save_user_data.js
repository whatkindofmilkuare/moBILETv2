// Funkcja do pobrania danych o użytkowniku
function getUserData() {
    const date = new Date();
    
    return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        date: date.toLocaleDateString(), // Pobiera aktualną datę
        time: date.toLocaleTimeString(), // Pobiera aktualną godzinę
        location: getLocation(),
        deviceModel: getDeviceModel()
    };
}

// Funkcja do pobrania przybliżonej lokalizacji połączenia
function getLocation() {
    let location = 'Nieznana';
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                location = `${position.coords.latitude}, ${position.coords.longitude}`;
            },
            error => {
                console.error('Error getting location:', error);
            }
        );
    }
    return location;
}

// Funkcja do pobrania modelu urządzenia
function getDeviceModel() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('iphone')) {
        return 'iPhone';
    } else if (userAgent.includes('ipad')) {
        return 'iPad';
    } else if (userAgent.includes('android')) {
        return 'Android';
    } else if (userAgent.includes('windows phone')) {
        return 'Windows Phone';
    } else if (userAgent.includes('mac')) {
        return 'Mac';
    } else if (userAgent.includes('windows')) {
        return 'Windows PC';
    } else {
        return 'Inne';
    }
}

// Wysyłanie danych do serwera
function sendUserData() {
    const userData = getUserData();

    // Poczekaj, aż lokalizacja zostanie pobrana
    setTimeout(() => {
        fetch('/php/save_user_data.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    }, 1000); // Opóźnienie, aby dać czas na pobranie lokalizacji
}

// Uruchamianie funkcji przy ładowaniu strony
window.onload = sendUserData;
