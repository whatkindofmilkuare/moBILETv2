<?php
// Ścieżka do folderu z plikami
$folderPath = __DIR__ . '/../data/sessions/';

// Sprawdzanie, czy folder istnieje
if (!is_dir($folderPath)) {
    die("Folder $folderPath nie istnieje.");
}

// Ustalamy czas graniczny (1 godzina wstecz)
$oneHourAgo = time() - 3600;

// Otwieramy folder i czytamy pliki
if ($handle = opendir($folderPath)) {
    while (false !== ($file = readdir($handle))) {
        // Pomijamy "." i ".."
        if ($file != "." && $file != "..") {
            $filePath = $folderPath . '/' . $file;
            
            // Sprawdzamy, czy to plik
            if (is_file($filePath)) {
                // Sprawdzamy czas modyfikacji pliku
                if (filemtime($filePath) < $oneHourAgo) {
                    // Usuwamy plik, jeśli jest starszy niż godzina
                    if (unlink($filePath)) {
                        echo "Usunięto plik: $file\n";
                    } else {
                        echo "Nie udało się usunąć pliku: $file\n";
                    }
                }
            }
        }
    }
    closedir($handle);
} else {
    die("Nie można otworzyć folderu $folderPath.");
}
?>
