<?php
require '../db.php';
require '../models/Ekipo.php';
require_once __DIR__ . '/../require_auth.php';
$CURRENT_USER = require_auth_api();

// Datu-baserako konexioa
$db = new DB();
$db->konektatu();
$ekipoDB = new Ekipo($db);

header('Content-Type: application/json; charset=utf-8');

// GET: bueltatu equipo guztiak
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = $ekipoDB->getAll();
    echo json_encode($data);
    exit();
}

// POST: sortu equipo berriak
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body = json_decode(file_get_contents('php://input'), true) ?: $_POST;

    // Nahitaezko eremuak
    if (!isset($body['izena'], $body['deskribapena'], $body['marka'], $body['modelo'], $body['stock'], $body['idKategoria'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Faltan datos obligatorios']);
        exit();
    }
    $res = $ekipoDB->create(
        $body['izena'],
        $body['deskribapena'],
        $body['marka'],
        $body['modelo'],
        $body['stock'],
        $body['idKategoria']
    );

    if ($res) {
        echo json_encode(['message' => 'Ekipoa sortuta']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Errorea sortzean']);
    }
    exit();
}

// DELETE: kendu equipo
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $body = json_decode(file_get_contents('php://input'), true) ?: $_GET;

    if (!isset($body['id'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Falta el campo id']);
        exit();
    }

    $res = $ekipoDB->delete($body['id']);

    if ($res) {
        echo json_encode(['message' => 'Ekipoa ezabatuta']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Errorea ezabatzean']);
    }
    exit();
}

// Beste metodoak:
http_response_code(405);
echo json_encode(['error' => 'Metodoa ez da onartzen']);
