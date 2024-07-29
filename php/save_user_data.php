<?php
function get_client_ip() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP'])) {
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    } else if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else if(isset($_SERVER['HTTP_X_FORWARDED'])) {
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    } else if(isset($_SERVER['HTTP_FORWARDED_FOR'])) {
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    } else if(isset($_SERVER['HTTP_FORWARDED'])) {
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    } else if(isset($_SERVER['REMOTE_ADDR'])) {
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    } else {
        $ipaddress = 'UNKNOWN';
    }
    return $ipaddress;
}

function save_user_data($data) {
    $file = __DIR__ . '/../data/users/users_data.json'; // Ścieżka do pliku JSON
    $current_data = [];

    if (file_exists($file)) {
        $current_data = json_decode(file_get_contents($file), true);
    }

    foreach ($current_data as $user) {
        if ($user['ip'] === $data['ip']) {
            return ['status' => 'duplicate'];
        }
    }

    $current_data[] = $data;
    file_put_contents($file, json_encode($current_data, JSON_PRETTY_PRINT));

    return ['status' => 'success'];
}

header('Content-Type: application/json');

$input = file_get_contents('php://input');
$user_data = json_decode($input, true);
$user_data['ip'] = get_client_ip();

$response = save_user_data($user_data);

echo json_encode($response);
?>
