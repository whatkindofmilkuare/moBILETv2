// Funkcja do pobrania danych o użytkowniku
function getUserData() {
    return {
        ip: '123.123.123.123', // Można uzyskać prawdziwy adres IP z serwera
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform
    };
}

// Wysyłanie danych do serwera
function sendUserData() {
    const userData = getUserData();

    fetch('save_user_data.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
}

// Uruchamianie funkcji przy ładowaniu strony
window.onload = sendUserData;
