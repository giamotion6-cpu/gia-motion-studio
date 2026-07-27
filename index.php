<?php
/**
 * GIA MOTION - Página principal
 * Sistema de rutas simple sin base de datos
 */

// Incluir configuración y funciones
require_once __DIR__ . '/config/config.php';
require_once __DIR__ . '/includes/functions.php';

// Incluir header
require_once __DIR__ . '/includes/header.php';

// Obtener la ruta actual
$route = getCurrentRoute();
$pages = PAGES;

// Incluir la página correspondiente
if (isset($pages[$route]) && file_exists(__DIR__ . '/' . $pages[$route]['file'])) {
    include __DIR__ . '/' . $pages[$route]['file'];
} else {
    // Página no encontrada - mostrar home
    include __DIR__ . '/' . $pages['home']['file'];
}

// Incluir footer
require_once __DIR__ . '/includes/footer.php';
?>
