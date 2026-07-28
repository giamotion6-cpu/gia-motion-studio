<?php
/**
 * GIA MOTION - Página de Servicios
 */
?>

<!-- Banner de Servicios -->
<section class="page-banner" style="background-image: url('<?php echo imageUrl('servicios-banner.jpg'); ?>')">
    <div class="bg-overlay">
        <div class="color"></div>
    </div>
    <div class="container">
        <div class="row full-height align-items-center">
            <div class="col">
                <div class="heading-block">
                    <h1 class="h">SERVICIOS</h1>
                    <div class="text">Soluciones audiovisuales integrales para tu negocio</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Introducción de Servicios -->
<section class="services-intro">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="heading-block">
                    <h2 class="h">NUESTROS <span> SERVICIOS</span></h2>
                </div>
                <div class="text">
                    <p>En GIA MOTION ofrecemos una amplia gama de servicios audiovisuales para
                    satisfacer las necesidades de tu empresa o proyecto.</p>
                    <p>Desde la producción de video y fotografía hasta la topografía con drones,
                    trabajamos con las últimas tecnologías y equipos de vanguardia.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="services-image">
                    <img src="<?php echo imageUrl('servicios-image.jpg'); ?>" alt="Servicios GIA MOTION">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Lista de Servicios -->
<section class="services-list">
    <div class="container">
        <?php
        $serviceIcons = [
            'video' => 'fa-solid fa-video',
            'fotografia' => 'fa-solid fa-camera',
            'drone' => 'fa-solid fa-helicopter',
            'streaming' => 'fa-solid fa-tower-broadcast',
            '360-realidad-virtual' => 'fa-solid fa-vr-cardboard',
            'marketing-digital' => 'fa-solid fa-chart-line'
        ];
        ?>
        <?php foreach (SERVICES as $index => $service): ?>
            <?php $serviceKey = serviceAnchor($service['title']); ?>
            <div class="service-item <?php echo $index % 2 === 0 ? 'even' : 'odd'; ?>" id="<?php echo $serviceKey; ?>">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="service-icon"><i class="<?php echo $serviceIcons[$serviceKey] ?? 'fa-solid fa-circle'; ?>" aria-hidden="true"></i></div>
                        <h3 class="h"><?php echo $service['title']; ?></h3>
                    </div>
                    <div class="col-md-8">
                        <div class="text">
                            <?php echo $service['description']; ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- Servicios Destacados -->
<section class="services-highlight">
    <div class="container">
        <div class="heading-block text-center">
            <h2 class="h">POR QUÉ <span>ELEGIRNOS</span></h2>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="highlight-item">
                    <div class="highlight-icon"><i class="fa-solid fa-award" aria-hidden="true"></i></div>
                    <h3 class="h">Experiencia</h3>
                    <div class="text">Más de 10 años de experiencia en el sector audiovisual.</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="highlight-item">
                    <div class="highlight-icon"><i class="fa-solid fa-microchip" aria-hidden="true"></i></div>
                    <h3 class="h">Tecnología</h3>
                    <div class="text">Utilizamos equipos y software de última generación.</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="highlight-item">
                    <div class="highlight-icon"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i></div>
                    <h3 class="h">Calidad</h3>
                    <div class="text">Garantizamos resultados de alta calidad en cada proyecto.</div>
                </div>
            </div>
        </div>
        <div class="button-container text-center">
            <a class="button-style1 with-arrow" href="<?php echo getPageUrl('contacto'); ?>">
                <span>COTIZA YA</span>
            </a>
        </div>
    </div>
</section>
