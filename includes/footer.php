<?php
/**
 * Footer común para todas las páginas
 */
?>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="row">
                <!-- Logo y descripción -->
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="site-logo">
                        <a href="<?php echo BASE_URL; ?>">
                            <img src="<?php echo getLogoURL(); ?>" alt="<?php echo COMPANY_NAME; ?>">
                        </a>
                    </div>
                    <div class="widget-text">
                        <p style="margin-top: 0px; font-size: 14px; line-height: 24px; max-width: 325px;">
                            <?php echo COMPANY_DESCRIPTION; ?>
                        </p>
                    </div>
                    <div class="social-links-widget widget">
                        <h6 class="widget-title">SÍGUENOS</h6>
                        <div class="social-links">
                            <a href="<?php echo SOCIAL_FACEBOOK; ?>" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a href="<?php echo SOCIAL_INSTAGRAM; ?>" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="<?php echo SOCIAL_WHATSAPP; ?>" target="_blank"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div class="copyright">
                        © Todos los derechos reservados <?php echo date('Y'); ?> - <?php echo COMPANY_NAME; ?>
                    </div>
                </div>

                <!-- Servicios -->
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="widget widget_nav_menu">
                        <h6 class="widget-title">SERVICIOS</h6>
                        <div class="menu-footer-links-1-container">
                            <ul class="menu">
                                <?php foreach (SERVICES as $service): ?>
                                    <li><a href="<?php echo getPageUrl('servicios', serviceAnchor($service['title'])); ?>">
                                        <?php echo $service['title']; ?></a></li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Links -->
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="widget widget_nav_menu">
                        <h6 class="widget-title">LINKS</h6>
                        <div class="menu-footer-links-2-container">
                            <ul class="menu">
                                <li><a href="<?php echo getPageUrl('blog'); ?>">Blog</a></li>
                                <li><a href="<?php echo getPageUrl('nosotros'); ?>">Nosotros</a></li>
                                <li><a href="<?php echo getPageUrl('portafolio'); ?>">Portafolio</a></li>
                                <li><a href="<?php echo getPageUrl('contacto'); ?>">Contáctanos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Contacto -->
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="widget widget_custom_html">
                        <h6 class="widget-title">Mantente en contacto</h6>
                        <div class="textwidget custom-html-widget">
                            <div class="contact-row">
                                <i class="fas fa-phone"></i>
                                <span><?php echo COMPANY_PHONE; ?></span>
                            </div>
                            <div class="contact-row">
                                <i class="fas fa-envelope"></i>
                                <span><?php echo COMPANY_EMAIL; ?></span>
                            </div>
                            <div class="contact-row">
                                <i class="fas fa-map-marker-alt"></i>
                                <span><?php echo COMPANY_ADDRESS; ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="<?php echo rtrim(STYLE_URL, '/'); ?>/main.js"></script>
</body>

</html>
