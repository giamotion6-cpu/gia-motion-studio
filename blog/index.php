<?php
/**
 * GIA MOTION - Página de Blog
 */

// Artículos del blog
$posts = [
    [
        'title' => '5 Tendencias en Video Institucional para 2025',
        'excerpt' => 'Descubre las tendencias más innovadoras en producción de video institucional que marcarán la diferencia en tu estrategia de comunicación empresarial.',
        'date' => '2025-01-15',
        'category' => 'Video',
        'image' => 'blog-1.jpg',
        'author' => 'GIA MOTION'
    ],
    [
        'title' => 'Cómo elegir el mejor servicio de topografía con drones',
        'excerpt' => 'Guía completa para seleccionar el proveedor de topografía aérea con drones que mejor se adapte a las necesidades de tu proyecto minero o construcción.',
        'date' => '2024-12-10',
        'category' => 'Drone',
        'image' => 'blog-2.jpg',
        'author' => 'GIA MOTION'
    ],
    [
        'title' => 'Streaming en vivo: Clave para eventos corporativos exitosos',
        'excerpt' => 'Aprende cómo la transmisión en vivo puede transformar tu próximo evento corporativo y llegar a una audiencia mucho más amplia.',
        'date' => '2024-11-20',
        'category' => 'Streaming',
        'image' => 'blog-3.jpg',
        'author' => 'GIA MOTION'
    ],
    [
        'title' => 'Fotografía 360°: El futuro de la experiencia visual',
        'excerpt' => 'Explora cómo la fotografía y video 360° están revolucionando la forma en que las empresas presentan sus proyectos y productos.',
        'date' => '2024-10-05',
        'category' => 'Realidad Virtual',
        'image' => 'blog-4.jpg',
        'author' => 'GIA MOTION'
    ],
    [
        'title' => 'Diseño web: Primeros 3 segundos que deciden el éxito',
        'excerpt' => 'En el mundo digital, esos primeros segundos son cruciales. Descubre cómo optimizar el diseño de tu página web para convertir visitas en clientes.',
        'date' => '2024-09-12',
        'category' => 'Diseño Web',
        'image' => 'blog-5.jpg',
        'author' => 'GIA MOTION'
    ],
    [
        'title' => 'Video vs Fotografía: ¿Cuál es la mejor opción para tu evento?',
        'excerpt' => 'Comparativa detallada entre video y fotografía para eventos corporativos, y cómo combinar ambos para obtener el mejor resultado.',
        'date' => '2024-08-08',
        'category' => 'Fotografía',
        'image' => 'blog-6.jpg',
        'author' => 'GIA MOTION'
    ],
];
?>

<!-- Banner de Blog -->
<section class="page-banner" style="background-image: url('<?php echo imageUrl('blog-banner.jpg'); ?>')">
    <div class="bg-overlay">
        <div class="color"></div>
    </div>
    <div class="container">
        <div class="row full-height align-items-center">
            <div class="col">
                <div class="heading-block">
                    <h1 class="h">BLOG</h1>
                    <div class="text">Novedades y conocimientos del sector audiovisual</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Introducción -->
<section class="blog-intro">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="heading-block">
                    <h2 class="h">NUESTRO <span> BLOG</span></h2>
                </div>
                <div class="text">
                    <p>Compartimos conocimientos, experiencias y tendencias del sector audiovisual.
                    Desde producción de video y fotografía hasta tecnologías emergentes como drones
                    y realidad virtual.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="blog-image">
                    <img src="<?php echo imageUrl('blog-image.jpg'); ?>" alt="Blog GIA MOTION">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Lista de Artículos -->
<section class="blog-list">
    <div class="container">
        <div class="row">
            <?php foreach ($posts as $post): ?>
                <div class="col-md-6">
                    <div class="blog-item">
                        <div class="blog-image">
                            <div class="img" style="background-image: url('<?php echo imageUrl($post['image']); ?>')"></div>
                            <div class="blog-category"><?php echo $post['category']; ?></div>
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span class="blog-date"><i class="far fa-calendar"></i> <?php echo formatDate($post['date']); ?></span>
                                <span class="blog-author"><i class="far fa-user"></i> <?php echo $post['author']; ?></span>
                            </div>
                            <h3 class="h"><a href="#"><?php echo $post['title']; ?></a></h3>
                            <div class="text"><?php echo truncate($post['excerpt'], 150); ?></div>
                            <a class="button-style1" href="#"><span>Leer más</span></a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Newsletter -->
<section class="newsletter-section">
    <div class="container text-center">
        <div class="heading-block">
            <h2 class="h">SUSCRÍBETE A NUESTRO <span>NEWSLETTER</span></h2>
            <div class="text">Recibe las últimas novedades y tendencias del sector audiovisual</div>
        </div>
        <form class="newsletter-form" action="#" method="post">
            <div class="form-row">
                <input type="email" name="email" placeholder="Tu correo electrónico" required>
                <button type="submit" class="button-style1">Suscribirme</button>
            </div>
        </form>
    </div>
</section>
