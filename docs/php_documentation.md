# Dokumentacja plików PHP
### W pliku opisane jest w skrócie za co odpowiadają poszczególne skrypty PHP

## Lista skryptów PHP użytych w projekcie:
- cleanup.php 
- save_user_data.php
- session_data_saver.php

## Opisy konkretnych skryptów PHP:

### cleanup.php
Skrypt cleanup.php odpowiada za czyszczenie plików JSON z danymi sesji starszymi niż godzina
### save_user_data.php
Skrypt save_user_data.php zapisuje unikalne wejścia na strone a co za tym idzie również dane o użytkowniku takie jak czas wejścia na strone, adres IP i system operacyjny
### session_data_saver.php
Skrypt session_data_saver.php odbiera dane sesji od użytkownika i zapisuje te dane w pliku JSON którego nazwą jest identyfikator sesji.