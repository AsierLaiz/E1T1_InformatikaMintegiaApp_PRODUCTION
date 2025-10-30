<?php
require '../db.php';
require '../models/Kokaleku.php';
require_once __DIR__ . '/../src/require_auth.php';
$CURRENT_USER = require_auth_api();

$db = new DB();
$db->konektatu();
$kokalekuDB = new Kokaleku($db);

if ($_SERVER["REQUEST_METHOD"]=="POST"){
    if(isset($_POST['_method']) && $_POST['_method']=="DELETE"){
        $ok = $kokalekuDB->delete($_POST['etiketa'],$_POST['hasieraData']);
        header('Content-Type: application/json; charset=utf-8');
        echo $ok ? json_encode(['message'=>'Kokaleku ezabatuta']) : json_encode(['error'=>'Errorea ezabatzean']);
        exit();
    } else {
        $ok = $kokalekuDB->create($_POST['etiketa'],$_POST['idGela'],$_POST['hasieraData'],$_POST['amaieraData']);
        header('Content-Type: application/json; charset=utf-8');
        echo $ok ? json_encode(['message'=>'Kokaleku sortuta']) : json_encode(['error'=>'Errorea sortzean']);
        exit();
    }
}
