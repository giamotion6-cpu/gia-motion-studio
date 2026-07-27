<?php
/**
 * Funciones auxiliares para GIA MOTION
 */

/**
 * Obtiene la ruta actual de la solicitud
 */
function getCurrentRoute() {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = rtrim($uri, '/');
    $uri = filter_var($uri, FILTER_SANITIZE_URL);

    // Normalizar rutas
    if ($uri === '' || $uri === '/index.php') {
        return 'home';
    }

    // Mapear rutas
    $routeMap = [
        '/nosotros' => 'nosotros',
        '/servicios' => 'servicios',
        '/portafolio' => 'portafolio',
        '/blog' => 'blog',
        '/contacto' => 'contacto',
    ];

    return $routeMap[$uri] ?? 'home';
}

/**
 * Obtiene el título de la página actual
 */
function getPageTitle() {
    $route = getCurrentRoute();
    $pages = PAGES;

    return $pages[$route]['title'] . ' | ' . COMPANY_NAME;
}

/**
 * Obtiene el CSS de la página actual
 */
function getPageCSS() {
    $route = getCurrentRoute();
    $pages = PAGES;

    return STYLE_URL . $pages[$route]['css'];
}

/**
 * Verifica si es la página actual
 */
function isActivePage($page) {
    return getCurrentRoute() === $page;
}

/**
 * Genera una clase CSS activa para el menú
 */
function activeClass($page) {
    return isActivePage($page) ? 'active' : '';
}

/**
 * Escapa HTML para seguridad
 */
function escape($string) {
    return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
}

/**
 * Trunca un texto a una longitud específica
 */
function truncate($text, $length = 100, $suffix = '...') {
    if (strlen($text) <= $length) {
        return $text;
    }
    return substr($text, 0, $length) . $suffix;
}

/**
 * Formatea una fecha
 */
function formatDate($date) {
    $timestamp = strtotime($date);
    return date('d \d\e F \d\e Y', $timestamp);
}
?>
