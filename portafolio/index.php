<?php
/**
 * GIA MOTION - Página de Portafolio
 */

// Proyectos del portafolio
$projects = [
    [
        'title' => 'Proyecto Industrial',
        'category' => 'Video Corporativo',
        'description' => 'Producción de video institucional para empresa industrial en Arequipa.',
        'image' => 'portfolio-1.jpg'
    ],
    [
        'title' => 'Evento Empresarial',
        'category' => 'Fotografía',
        'description' => 'Cobertura fotográfica de evento corporativo en Cajamarca.',
        'image' => 'portfolio-2.jpg'
    ],
    [
        'title' => 'Topografía Aérea',
        'category' => 'Drone',
        'description' => 'Levantamiento topográfico con drones para proyecto minero.',
        'image' => 'portfolio-3.jpg'
    ],
    [
        'title' => 'Transmisión en Vivo',
        'category' => 'Streaming',
        'description' => 'Transmisión en vivo de evento corporativo con múltiples cámaras.',
        'image' => 'portfolio-4.jpg'
    ],
    [
        'title' => 'Video 360°',
        'category' => 'Realidad Virtual',
        'description' => 'Producción de video 360° para experiencia inmersiva.',
        'image' => 'portfolio-5.jpg'
    ],
    [
        'title' => 'Sitio Web Corporativo',
        'category' => 'Diseño Web',
        'description' => 'Diseño y desarrollo de página web para empresa de logística.',
        'image' => 'portfolio-6.jpg'
    ],
];
?>

<!-- Banner de Portafolio -->
<section class="page-banner" style="background-image: url('<?php echo IMG_URL; ?>portafolio-banner.jpg')">
    <div class="bg-overlay">
        <div class="color"></div>
    </div>
    <div class="container">
        <div class="row full-height align-items-center">
            <div class="col">
                <div class="heading-block">
                    <h1 class="h">PORTAFOLIO</h1>
                    <div class="text">Proyectos que hemos realizado</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Introducción -->
<section class="portfolio-intro">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="heading-block">
                    <h2 class="h">NUESTRO <span> TRABAJO</span></h2>
                </div>
                <div class="text">
                    <p>Explora nuestro portafolio de proyectos realizados para diversos clientes.
                    Desde videos institucionales hasta transmisiones en vivo, cada proyecto
                    representa nuestro compromiso con la excelencia.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="portfolio-image">
                    <img src="<?php echo IMG_URL; ?>portafolio-image.jpg" alt="Portafolio GIA MOTION">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Galería de Proyectos -->
<section class="portfolio-gallery">
    <div class="container">
        <div class="row">
            <?php foreach ($projects as $project): ?>
                <div class="col-md-4">
                    <div class="portfolio-item">
                        <div class="img-block">
                            <div class="img" style="background-image: url('<?php echo IMG_URL; ?>portfolio-<?php echo $project['image']; ?>')"></div>
                            <div class="overlay">
                                <div class="overlay-content">
                                    <h3 class="h"><?php echo $project['title']; ?></h3>
                                    <div class="text"><?php echo $project['category']; ?></div>
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <h5 class="h"><?php echo $project['title']; ?></h5>
                            <div class="meta"><?php echo $project['category']; ?></div>
                            <div class="text"><?php echo $project['description']; ?></div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- CTA -->
<section class="portfolio-cta">
    <div class="container text-center">
        <div class="heading-block">
            <h2 class="h">¿LISTO PARA <span>COMENZAR</span>?</h2>
            <div class="text">Contáctanos para cotizar tu proyecto</div>
        </div>
        <div class="button-container">
            <a class="button-style1 with-arrow" href="<?php echo BASE_URL; ?>contacto">
                <span>CUÉNTANOS</span>
            </a>
        </div>
    </div>
</section>
