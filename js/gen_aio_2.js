// Funkcja generująca losową 5-cyfrową liczbę
function generateRandomNumber() {
    const min = 89400; // Minimalna wartość (włącznie)
    const max = 89499; // Maksymalna wartość (wyłącznie)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// Funkcja, która wstawia losową liczbę do elementu HTML
function insertRandomNumber() {
    // Pobranie elementu HTML, do którego wstawimy liczbę
    const randomNumberElement = document.getElementById("napisnumerbiletu");

    // Sprawdzenie, czy element istnieje
    if (randomNumberElement) {
        // Wywołanie funkcji i umieszczenie wyniku w elemencie HTML
        const randomNum = generateRandomNumber();
        randomNumberElement.textContent = randomNum;
    } else {
        console.error('Element o ID "napisnumerbiletu" nie został znaleziony.');
    }
}

// Upewnienie się, że DOM jest załadowany przed wywołaniem funkcji
document.addEventListener('DOMContentLoaded', insertRandomNumber);




// Generowanie losowej liczby z zakresu od 91606185172 do 91606199999
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Losowanie liczby z podanego zakresu
const randomNumber2 = getRandomNumber(91606185172, 91606199999);

// Znalezienie elementu HTML, do którego chcemy wstawić wygenerowaną liczbę
const element = document.getElementById('napiscurrentnumber');

// Wstawienie wygenerowanej liczby do elementu HTML
if (element) {
  element.textContent = randomNumber2;
} else {
  console.error('Element o podanym id nie został znaleziony.');
}




// Pobranie aktualnej daty i godziny
const now = new Date();

// Odejmowanie 10 minut
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

// Wyświetlenie danych w elemencie HTML (np. <div id="output"></div>)
const outputElement = document.getElementById('napisgodzinazakupu');
outputElement.textContent = `${formattedDate} r. ${formattedTime}`;