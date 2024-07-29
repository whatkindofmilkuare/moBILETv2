document.addEventListener('DOMContentLoaded', function () {
  // Funkcja pomocnicza do pobierania parametrów z URL
  function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
  }

  // Pobieramy sessionID z URL
  const sessionID = getQueryParam('sessionID');
  if (!sessionID) {
      console.error('Brak parametru sessionID w URL.');
      return;
  }

  // Definiujemy ścieżkę do pliku JSON
  const jsonFilePath = `../data/${sessionID}.json`;

  // Funkcja do pobierania danych z pliku JSON
  async function fetchData() {
      try {
          const response = await fetch(jsonFilePath);
          if (!response.ok) {
              throw new Error('Błąd podczas pobierania pliku JSON.');
          }
          const data = await response.json();

          // Sprawdzamy czy dane zawierają oczekiwane właściwości
          if (data.randomNum && data.randomNumber && data.formattedTime && data.formattedDate) {
              // Wstawiamy wartości do odpowiednich elementów HTML
              document.getElementById('napisnumerbiletu').textContent = data.randomNum;
              document.getElementById('napiscurrentnumber').textContent = data.randomNumber;
              document.getElementById('napisgodzinazakupu').textContent = `${data.formattedDate} ${data.formattedTime}`;
          } else {
              console.error('Plik JSON nie zawiera wymaganych właściwości.');
          }
      } catch (error) {
          console.error('Błąd:', error);
      }
  }

  // Wywołujemy funkcję fetchData, aby pobrać dane i wstawić je do HTML
  fetchData();
});
