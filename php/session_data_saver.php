<?php
// Odbieranie danych JSON z żądania POST
$data = json_decode(file_get_contents('php://input'), true);

// Pobieranie poszczególnych zmiennych
$randomNum = $data['randomNum'];
$randomNumber = $data['randomNumber'];
$formattedDate = $data['formattedDate'];
$formattedTime = $data['formattedTime'];
$sessionId = $data['sessionId'];

// Tworzenie tablicy z danymi
$sessionData = array(
    'randomNum' => $randomNum,
    'randomNumber' => $randomNumber,
    'formattedDate' => $formattedDate,
    'formattedTime' => $formattedTime,
    'sessionId' => $sessionId
);

// Konwertowanie tablicy na JSON
$jsonData = json_encode($sessionData, JSON_PRETTY_PRINT);

// Określenie nazwy pliku z nową lokalizacją
$filename = __DIR__ . '/../data/' . $sessionId . '.json';

// Upewnienie się, że folder /data/ istnieje
if (!is_dir(__DIR__ . '/../data/')) {
    mkdir(__DIR__ . '/../data/', 0777, true);
}

// Zapis danych do pliku
if (file_put_contents($filename, $jsonData)) {
    echo 'Data successfully saved to ' . $filename;
} else {
    echo 'Error saving data to file';
}
?>
