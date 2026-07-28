<?php
/**
 * Archivo de configuración de GIA MOTION
 * Define constantes y configuración general del sitio
 */

// Información de la empresa
define('COMPANY_NAME', 'GIA MOTION');
define('COMPANY_TAGLINE', 'Productora Audiovisual');
define('COMPANY_DESCRIPTION', 'Especializados en video y fotografía industrial, videos institucionales, registro de eventos, Circuito cerrado y transmisiones en vivo, Video y foto 360°, Diseño y páginas webs, Topografía con drones.');

// Información de contacto
define('COMPANY_EMAIL', 'contacto@gia-motion.com');
define('COMPANY_PHONE', '+51 999 999 999');
define('COMPANY_ADDRESS', 'Av. Ejemplo N° 123 - Lima - Perú');

// Redes sociales
define('SOCIAL_FACEBOOK', '#');
define('SOCIAL_INSTAGRAM', '#');
define('SOCIAL_WHATSAPP', 'https://wa.me/51999999999');

// Configuración de rutas
// Detecta la base del proyecto para soportar localhost/gia_motion y raíz de dominio.
$scriptName = str_replace('\\', '/', $_SERVER['SCRIPT_NAME'] ?? '');
$scriptDir = trim(dirname($scriptName), '/.');
$requestPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$projectFolder = basename(dirname(__DIR__));

$baseUrl = '/';
if ($scriptDir !== '') {
    $baseUrl = '/' . $scriptDir . '/';
} elseif ($requestPath === '/' . $projectFolder || strpos($requestPath, '/' . $projectFolder . '/') === 0) {
    $baseUrl = '/' . $projectFolder . '/';
}

define('BASE_URL', $baseUrl);
define('ASSETS_URL', BASE_URL . 'assets/');
define('STYLE_URL', BASE_URL . 'style/');
define('LEGACY_IMG_URL', BASE_URL . 'img/');
define('LEGACY_VIDEO_URL', BASE_URL . 'videos/');
define('LEGACY_UPLOADS_URL', BASE_URL . 'uploads/');

// Carpeta unica para todo el contenido (imagenes, videos y archivos subidos).
// Puedes cambiar estas rutas manualmente por CDN o cualquier otra URL.
define('MEDIA_IMAGES_BASE', BASE_URL . 'media/');
define('MEDIA_VIDEOS_BASE', BASE_URL . 'media/');
define('MEDIA_UPLOADS_BASE', BASE_URL . 'media/');

// Fallback: si un archivo no existe en media/, busca en carpetas heredadas.
define('MEDIA_LEGACY_FALLBACK', true);

// Mantener constantes legacy para compatibilidad con plantillas antiguas.
define('IMG_URL', MEDIA_IMAGES_BASE);
define('VIDEO_URL', MEDIA_VIDEOS_BASE);
define('UPLOADS_URL', MEDIA_UPLOADS_BASE);

// Rutas físicas para validar fallback local.
define('MEDIA_DIR', dirname(__DIR__) . '/media/');
define('LEGACY_IMG_DIR', dirname(__DIR__) . '/img/');
define('LEGACY_VIDEO_DIR', dirname(__DIR__) . '/videos/');
define('LEGACY_UPLOADS_DIR', dirname(__DIR__) . '/uploads/');

// Configuración de páginas
define('PAGES', [
    'home' => [
        'title' => 'Inicio',
        'file' => 'house/index.php',
        'css' => 'home.css',
        'url' => '/'
    ],
    'nosotros' => [
        'title' => 'Nosotros',
        'file' => 'nosotros/index.php',
        'css' => 'nosotros.css',
        'url' => '/nosotros'
    ],
    'servicios' => [
        'title' => 'Servicios',
        'file' => 'servicios/index.php',
        'css' => 'servicios.css',
        'url' => '/servicios'
    ],
    'portafolio' => [
        'title' => 'Portafolio',
        'file' => 'portafolio/index.php',
        'css' => 'portafolio.css',
        'url' => '/portafolio'
    ],
    'blog' => [
        'title' => 'Blog',
        'file' => 'blog/index.php',
        'css' => 'blog.css',
        'url' => '/blog'
    ],
    'contacto' => [
        'title' => 'Contáctanos',
        'file' => 'contacto/index.php',
        'css' => 'contacto.css',
        'url' => '/contacto'
    ]
]);

// Servicios de la empresa
define('SERVICES', [
    [
        'title' => 'Video',
        'description' => 'Producción de video institucional, eventos y contenido corporativo.',
        
    ],
    [
        'title' => 'Fotografía',
        'description' => 'Fotografía profesional para eventos, productos y corporativo.',
        
    ],
    [
        'title' => 'Drone',
        'description' => 'Topografía, inspecciones y grabaciones aéreas con drones.',
        
    ],
    [
        'title' => 'Streaming',
        'description' => 'Transmisiones en vivo y eventos por internet.',
       
    ],
    [
        'title' => '360 Realidad Virtual',
        'description' => 'Video y fotografía 360° para experiencias inmersivas.',
        
    ],
    [
        'title' => 'Marketing Digital',
        'description' => 'Diseño y desarrollo de páginas web y estrategias digitales.',
        
    ]
]);

// Testimonios
define('TESTIMONIALS', [
    [
        'quote' => 'En el sector estratégico, la fuerza se demuestra. GIA MOTION ofrece soluciones visuales que muestran tu marca en toda su potencia, amplifican su impacto y la hacen absolutamente inconfundible.',
        'author' => '¡SIEMPRE LISTOS!',
        'signature' => ''
    ]
]);
?>
