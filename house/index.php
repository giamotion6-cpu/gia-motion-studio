<?php
/**
 * GIA MOTION - Página de Inicio
 */
?>

<!-- Banner Principal -->
<section class="banner-area banner-default bsl-right with-circle-navigation swiper-container">
    <div class="circle-navigation" data-deg="0">
        <div class="d">
            <svg class="c-inner">
                <use xlink:href="#dotted-circle"></use>
            </svg>
            <svg class="c-outer">
                <use xlink:href="#dotted-circle"></use>
            </svg>
        </div>
        <div class="wrap">
            <div class="prev base-icon-back"></div>
            <div class="counter"></div>
            <div class="next base-icon-next-1"></div>
        </div>
    </div>

    <div class="mouse-button on-center">
        <span>Deslizar</span>
    </div>

    <div class="banner-social-links">
        <div class="social-links-with-label">
            <a href="<?php echo SOCIAL_FACEBOOK; ?>" target="_blank"><i class="fab fa-facebook-square"></i><span>Facebook</span></a>
            <a href="<?php echo SOCIAL_INSTAGRAM; ?>" target="_blank"><i class="fab fa-instagram"></i><span>Instagram</span></a>
            <a href="<?php echo SOCIAL_WHATSAPP; ?>" target="_blank"><i class="fab fa-whatsapp-square"></i><span>Whatsapp</span></a>
        </div>
    </div>

    <div class="banner-slider swiper-wrapper full-height">
        <!-- Slide 1 - Introducción -->
        <div class="swiper-slide">
            <div class="banner-item tal">
                <div class="bg-overlay">
                    <div class="image" style="background-image: url('<?php echo IMG_URL; ?>banner-1.jpg')"></div>
                </div>
                <div class="container">
                    <div class="row full-height align-items-center">
                        <div class="col">
                            <div class="heading-block tal">
                                <div class="sub-h">ESTAMOS LISTOS!!!</div>
                                <h1 class="h"><span>Productora</span><br>Audiovisual</h1>
                            </div>
                            <div class="text">
                                Especializados en video y fotografía industrial,<br>
                                videos institucionales, registro de eventos<br>
                                Circuito cerrado y transmisiones en vivo<br>
                                Video y foto 360°<br>
                                Diseño y páginas webs<br>
                                Topografía con drones
                            </div>
                            <a class="button-style1" href="<?php echo BASE_URL; ?>servicios"><span>Conocer más</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 2 - Topografía con drones -->
        <div class="swiper-slide">
            <div class="banner-item tal">
                <div class="bg-overlay">
                    <div class="image" style="background-image: url('<?php echo IMG_URL; ?>banner-2.jpg')"></div>
                </div>
                <div class="container">
                    <div class="row full-height align-items-center">
                        <div class="col">
                            <div class="heading-block tal">
                                <h1 class="h">TOPOGRAFÍA <span>CON DRONES</span></h1>
                            </div>
                            <div class="text">
                                Levantamiento topográfico con drones<br>
                                Fotogrametría aérea de alta precisión<br>
                                Generación de ortofotos georreferenciadas<br>
                                Modelos digitales de elevación (MDE/MDT/MDN)<br>
                                Cartografía digital y geoespacial<br>
                                Aplicaciones de drones en minería
                            </div>
                            <a class="button-style1" href="<?php echo BASE_URL; ?>servicios#drone"><span>Conocer más</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 3 - Video institucional -->
        <div class="swiper-slide">
            <div class="banner-item tal">
                <div class="bg-overlay">
                    <div class="image" style="background-image: url('<?php echo IMG_URL; ?>banner-3.jpg')"></div>
                </div>
                <div class="container">
                    <div class="row full-height align-items-center">
                        <div class="col">
                            <div class="heading-block tal">
                                <h1 class="h">VIDEO <span>INSTITUCIONAL</span></h1>
                            </div>
                            <div class="text">
                                Producción de video institucional<br>
                                Grabación de eventos corporativos<br>
                                Edición profesional y post-producción<br>
                                Transmisión en vivo de eventos<br>
                                Contenido para redes sociales
                            </div>
                            <a class="button-style1" href="<?php echo BASE_URL; ?>servicios#video"><span>Conocer más</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Sección de Presentación -->
<section class="presentation-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="heading-block">
                    <h2 class="h">GIA <span>MOTION</span></h2>
                    <h3 class="h">Productora Audiovisual</h3>
                </div>
                <div class="text">
                    Somos una productora audiovisual especializada en video y fotografía industrial,
                    videos institucionales, registro de eventos, circuito cerrado y transmisiones en vivo,
                    video y foto 360°, diseño y páginas web, y topografía con drones.
                </div>
                <div class="button-container">
                    <a class="button-style1 with-arrow" href="<?php echo BASE_URL; ?>nosotros">
                        <span>CONOCER MÁS</span>
                    </a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="profile-image">
                    <img src="<?php echo IMG_URL; ?>profile.jpg" alt="GIA MOTION">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Portafolio Carousel -->
<section class="portfolio-section">
    <div class="container">
        <div class="heading-block text-center">
            <h2 class="h">NUESTRO <span>PORTAFOLIO</span></h2>
            <p class="text">Proyectos destacados que hemos realizado</p>
        </div>
        <div class="portfolio-carousel swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="portfolio-item">
                        <div class="img-block">
                            <div class="img" style="background-image: url('<?php echo IMG_URL; ?>portfolio-1.jpg')"></div>
                        </div>
                        <div class="content">
                            <h5 class="h">Proyecto Industrial</h5>
                            <div class="meta">Video Corporativo</div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="portfolio-item">
                        <div class="img-block">
                            <div class="img" style="background-image: url('<?php echo IMG_URL; ?>portfolio-2.jpg')"></div>
                        </div>
                        <div class="content">
                            <h5 class="h">Evento Empresarial</h5>
                            <div class="meta">Fotografía</div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="portfolio-item">
                        <div class="img-block">
                            <div class="img" style="background-image: url('<?php echo IMG_URL; ?>portfolio-3.jpg')"></div>
                        </div>
                        <div class="content">
                            <h5 class="h">Topografía Aérea</h5>
                            <div class="meta">Drone</div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="portfolio-item">
                        <div class="img-block">
                            <div class="img" style="background-image: url('<?php echo IMG_URL; ?>portfolio-4.jpg')"></div>
                        </div>
                        <div class="content">
                            <h5 class="h">Transmisión en Vivo</h5>
                            <div class="meta">Streaming</div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="portfolio-item">
                        <div class="img-block">
                            <div class="img" style="background-image: url('<?php echo IMG_URL; ?>portfolio-5.jpg')"></div>
                        </div>
                        <div class="content">
                            <h5 class="h">Video 360°</h5>
                            <div class="meta">Realidad Virtual</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Testimonios -->
<section class="testimonials-section">
    <div class="container">
        <div class="testimonials-block">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <?php foreach (TESTIMONIALS as $testimonial): ?>
                        <div class="testimonials-item swiper-slide">
                            <blockquote><?php echo $testimonial['quote']; ?></blockquote>
                            <div class="name"><?php echo $testimonial['author']; ?></div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Video Reel -->
<section class="video-reel-section">
    <div class="container">
        <div class="heading-block text-center">
            <h2 class="h">VER<br><span>Reel</span></h2>
        </div>
        <div class="video-reel">
            <div class="video-wrapper">
                <iframe class="pswp__video" width="960" height="640"
                    src="https://player.vimeo.com/video/433357975?byline=0&portrait=0"
                    frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>

<!-- Marcas / Clientes -->
<section class="brands-section">
    <div class="container">
        <div class="heading-block text-center">
            <h2 class="h">NUESTROS <span>CLIENTES</span></h2>
        </div>
        <div class="brand-block swiper-container">
            <div class="swiper-wrapper">
                <div class="brand-item swiper-slide">
                    <div class="content">
                        <img src="<?php echo IMG_URL; ?>client-1.png" alt="Cliente 1">
                    </div>
                </div>
                <div class="brand-item swiper-slide">
                    <div class="content">
                        <img src="<?php echo IMG_URL; ?>client-2.png" alt="Cliente 2">
                    </div>
                </div>
                <div class="brand-item swiper-slide">
                    <div class="content">
                        <img src="<?php echo IMG_URL; ?>client-3.png" alt="Cliente 3">
                    </div>
                </div>
                <div class="brand-item swiper-slide">
                    <div class="content">
                        <img src="<?php echo IMG_URL; ?>client-4.png" alt="Cliente 4">
                    </div>
                </div>
                <div class="brand-item swiper-slide">
                    <div class="content">
                        <img src="<?php echo IMG_URL; ?>client-5.png" alt="Cliente 5">
                    </div>
                </div>
                <div class="brand-item swiper-slide">
                    <div class="content">
                        <img src="<?php echo IMG_URL; ?>client-6.png" alt="Cliente 6">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
