<?php
/**
 * Funciones auxiliares para GIA MOTION
 */

/**
 * Obtiene la ruta actual de la solicitud
 */
function getCurrentRoute() {
    $queryRoute = strtolower(trim($_GET['page'] ?? ''));
    if ($queryRoute !== '' && array_key_exists($queryRoute, PAGES)) {
        return $queryRoute;
    }

    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = rtrim($uri, '/');
    $uri = filter_var($uri, FILTER_SANITIZE_URL);

    // Si BASE_URL usa subcarpeta, quitar ese prefijo antes de mapear la ruta.
    $basePath = parse_url(BASE_URL, PHP_URL_PATH);
    $basePath = rtrim($basePath ?: '/', '/');
    if ($basePath !== '' && $basePath !== '/' && strpos($uri, $basePath) === 0) {
        $uri = substr($uri, strlen($basePath));
        $uri = $uri === '' ? '/' : $uri;
    }

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

    return rtrim(STYLE_URL, '/') . '/' . $pages[$route]['css'];
}

/**
 * Obtiene una URL interna pasando por el enrutador principal.
 */
function getPageUrl($page = 'home', $fragment = '') {
    $page = strtolower(trim((string) $page));
    $url = BASE_URL;

    if ($page !== '' && $page !== 'home' && array_key_exists($page, PAGES)) {
        $url .= '?page=' . rawurlencode($page);
    }

    if ($fragment !== '') {
        $url .= '#' . rawurlencode($fragment);
    }

    return $url;
}

/**
 * Convierte texto a slug seguro para IDs y anclas.
 */
function slugify($text) {
    $text = strtolower(trim((string) $text));
    $text = strtr($text, [
        'á' => 'a', 'é' => 'e', 'í' => 'i', 'ó' => 'o', 'ú' => 'u',
        'à' => 'a', 'è' => 'e', 'ì' => 'i', 'ò' => 'o', 'ù' => 'u',
        'ä' => 'a', 'ë' => 'e', 'ï' => 'i', 'ö' => 'o', 'ü' => 'u',
        'ñ' => 'n', 'ç' => 'c'
    ]);
    $text = preg_replace('/[^a-z0-9]+/', '-', $text);
    $text = trim($text, '-');

    return $text !== '' ? $text : 'item';
}

/**
 * Genera la ancla para un servicio.
 */
function serviceAnchor($title) {
    return slugify($title);
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

/**
 * Genera la URL correcta para un archivo de imagen, banner, video o subida.
 */
function assetUrl($path, $folder = 'img') {
    $path = trim((string) $path);
    if ($path === '') {
        return '';
    }

    if (preg_match('#^(https?:)?//#', $path) || strpos($path, 'data:') === 0 || strpos($path, '#') === 0) {
        return $path;
    }

    if (strpos($path, '/') === 0) {
        return $path;
    }

    $base = MEDIA_IMAGES_BASE;
    $dir = MEDIA_DIR;
    $legacyBase = LEGACY_IMG_URL;
    $legacyDir = LEGACY_IMG_DIR;

    switch (strtolower($folder)) {
        case 'video':
        case 'videos':
            $base = MEDIA_VIDEOS_BASE;
            $dir = MEDIA_DIR;
            $legacyBase = LEGACY_VIDEO_URL;
            $legacyDir = LEGACY_VIDEO_DIR;
            break;
        case 'upload':
        case 'uploads':
            $base = MEDIA_UPLOADS_BASE;
            $dir = MEDIA_DIR;
            $legacyBase = LEGACY_UPLOADS_URL;
            $legacyDir = LEGACY_UPLOADS_DIR;
            break;
        case 'style':
        case 'styles':
            $base = STYLE_URL;
            $dir = dirname(__DIR__) . '/style/';
            $legacyBase = STYLE_URL;
            $legacyDir = dirname(__DIR__) . '/style/';
            break;
    }

    $cleanPath = ltrim($path, '/');
    $preferredFile = rtrim($dir, '/\\') . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $cleanPath);
    $legacyFile = rtrim($legacyDir, '/\\') . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $cleanPath);

    if (defined('MEDIA_LEGACY_FALLBACK') && MEDIA_LEGACY_FALLBACK) {
        if (is_file($preferredFile)) {
            return rtrim($base, '/') . '/' . $cleanPath;
        }

        if (is_file($legacyFile)) {
            return rtrim($legacyBase, '/') . '/' . $cleanPath;
        }
    }

    return rtrim($base, '/') . '/' . $cleanPath;
}

function imageUrl($path) {
    return assetUrl($path, 'img');
}

function videoUrl($path) {
    return assetUrl($path, 'videos');
}

function uploadUrl($path) {
    return assetUrl($path, 'uploads');
}

/**
 * Devuelve la URL del logo principal, compatible con nombre actual y legado.
 */
function getLogoURL() {
    $candidates = ['logo_gia.png', 'LOGO GIAMOTION.png', 'LOGO_GIAMOTION.png'];

    foreach ($candidates as $fileName) {
        if (is_file(MEDIA_DIR . $fileName)) {
            return imageUrl($fileName);
        }

        if (is_file(LEGACY_IMG_DIR . $fileName)) {
            return LEGACY_IMG_URL . rawurlencode($fileName);
        }
    }

    // Fallback para evitar romper la UI si el archivo no existe temporalmente.
    return imageUrl($candidates[0]);
}
?>
