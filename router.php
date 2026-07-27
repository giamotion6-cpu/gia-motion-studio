<?php
/**
 * Router para el servidor de desarrollo de PHP
 * Forza todas las solicitudes a pasar por index.php
 */

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = rtrim($uri, '/');

// Servir archivos estáticos directamente
$requested = __DIR__ . $uri;
if ($uri !== '' && file_exists($requested) && is_file($requested)) {
    return false;
}

// Rutear todo lo demás a través de index.php
require_once __DIR__ . '/index.php';
