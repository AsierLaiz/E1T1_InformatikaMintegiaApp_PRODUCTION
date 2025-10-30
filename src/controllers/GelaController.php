<?php
require '../db.php';
require '../models/Gela.php';
require_once __DIR__ . '/../src/require_auth.php';
$CURRENT_USER = require_auth_api();

$db = new DB();
$db->konektatu();
$gelaDB = new Gela($db);

if ($_SERVER["REQUEST_METHOD"]=="POST"){
    if(isset($_POST['_method']) && $_POST['_method']=="DELETE"){
        $ok = $gelaDB->delete($_POST['id']);
        header('Content-Type: application/json; charset=utf-8');
        echo $ok ? json_encode(['message'=>'Gela ezabatuta']) : json_encode(['error'=>'Errorea ezabatzean']);
        exit();
    } else {
        $ok = $gelaDB->create($_POST['izena'], $_POST['taldea']);
        header('Content-Type: application/json; charset=utf-8');
        echo $ok ? json_encode(['message'=>'Gela sortuta']) : json_encode(['error'=>'Errorea sortzean']);
        exit();
    }
}
