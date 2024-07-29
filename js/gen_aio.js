// Funkcja generująca losową 5-cyfrową liczbę
function generateRandomNumber() {
  const min = 89400; // Minimalna wartość (włącznie)
  const max = 89499; // Maksymalna wartość (wyłącznie)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// Pobranie elementu HTML, do którego wstawimy liczbę
const randomNumberElement = document.getElementById("napisnumerbiletu");

// Wywołanie funkcji i umieszczenie wyniku w elemencie HTML
const randomNum = generateRandomNumber();
randomNumberElement.textContent = randomNum;

// Generowanie losowej liczby z zakresu od 91606185172 do 91606199999
function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Losowanie liczby z podanego zakresu
const randomNumber = getRandomNumber(91606185172, 91606199999);

// Znalezienie elementu HTML, do którego chcemy wstawić wygenerowaną liczbę
const element = document.getElementById('napiscurrentnumber');

// Wstawienie wygenerowanej liczby do elementu HTML
if (element) {
element.textContent = randomNumber;
} else {
console.error('Element o podanym id nie został znaleziony.');
}

// Pobiera aktualną datę i godzinę, odejmuje od godziny 10 minut i wyświetla w elemencie HTML
const now = new Date();
now.setMinutes(now.getMinutes() - 10);

// Formatowanie daty i godziny
const formattedDate = now.toLocaleDateString('pl-PL', {
day: '2-digit',
month: '2-digit',
year: 'numeric',
});

const formattedTime = now.toLocaleTimeString('pl-PL', {
hour: '2-digit',
minute: '2-digit',
second: '2-digit',
});

// Wyświetlenie danych w elemencie HTML
const outputElement = document.getElementById('napisgodzinazakupu');
outputElement.textContent = `${formattedDate} r. ${formattedTime}`;

// Pobiera aktualną datę i godzinę (korzysta już z uprzednio pobranej i zmodyfikowanej), dodaje do aktualnej godziny 60 minut i wyświetla w elemencie HTML
const now2 = new Date();
now2.setMinutes(now2.getMinutes() + 50);

// Formatowanie daty i godziny
const formattedDate2 = now2.toLocaleDateString('pl-PL', {
day: '2-digit',
month: '2-digit',
year: 'numeric',
});

const formattedTime2 = now2.toLocaleTimeString('pl-PL', {
hour: '2-digit',
minute: '2-digit',
second: '2-digit',
});

// Wyświetlenie danych w elemencie HTML
const outputElement2 = document.getElementById('napisnumerwaznydo');
outputElement2.textContent = `${formattedDate2} r. ${formattedTime2}`;

// Funkcja generująca losowy identyfikator sesji
function generateSessionId() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
let sessionId = '';
const charactersLength = characters.length;

for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    sessionId += characters.charAt(randomIndex);
}

return sessionId;
}

// Generowanie sessionID i przypisanie go do zmiennej
const sessionId = generateSessionId();
console.log("Generated Session ID:", sessionId);

// Funkcja generująca kod QR
function generateQRCode() {
const url = `https://kanar.fun/sgtw/qr_code_ref.html?sessionID=${sessionId}`;
const qrCodeContainer = document.getElementById("qrcode");

// Konfiguracja kodu QR
const qrCode = new QRCode(qrCodeContainer, {
    text: url,
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.L  // Ustawienie niskiego poziomu korekcji błędów
});
}

// Wywołaj funkcję generowania QR kodu po załadowaniu strony
window.onload = function() {
generateQRCode();

// Przygotowanie danych do wysłania do PHP
const data = {
  randomNum: randomNum,
  randomNumber: randomNumber,
  formattedDate: formattedDate,
  formattedTime: formattedTime,
  sessionId: sessionId
};

// Wysłanie danych do PHP za pomocą fetch
fetch('/php/session_data_saver.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.text())
.then(result => {
  console.log('Data successfully sent to PHP:', result);
})
.catch(error => {
  console.error('Error sending data to PHP:', error);
});
};
