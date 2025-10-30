<?php
require '../db.php';
require '../models/Kategoria.php';
require_once __DIR__ . '/../src/require_auth.php';
$CURRENT_USER = require_auth_api();

$db = new DB();
$db->konektatu();
$kategoriaDB = new Kategoria($db);

if ($_SERVER["REQUEST_METHOD"]=="POST"){
    if(isset($_POST['_method']) && $_POST['_method']=="DELETE"){
        $ok = $kategoriaDB->delete($_POST['id']);
        header('Content-Type: application/json; charset=utf-8');
        echo $ok ? json_encode(['message'=>'Kategoria ezabatuta']) : json_encode(['error'=>'Errorea ezabatzean']);
        exit();
    } else {
        $ok = $kategoriaDB->create($_POST['izena']);
        header('Content-Type: application/json; charset=utf-8');
        echo $ok ? json_encode(['message'=>'Kategoria sortuta']) : json_encode(['error'=>'Errorea sortzean']);
        exit();
    }
}
