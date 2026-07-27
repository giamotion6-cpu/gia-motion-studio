<?php
/**
 * GIA MOTION - Página de Contacto
 */
?>

<!-- Banner de Contacto -->
<section class="page-banner" style="background-image: url('<?php echo IMG_URL; ?>contacto-banner.jpg')">
    <div class="bg-overlay">
        <div class="color"></div>
    </div>
    <div class="container">
        <div class="row full-height align-items-center">
            <div class="col">
                <div class="heading-block">
                    <h1 class="h">CONTÁCTANOS</h1>
                    <div class="text">Estamos listos para ayudarte con tu proyecto</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Información de Contacto -->
<section class="contact-info-section">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <h3 class="h">Teléfono</h3>
                    <div class="text"><?php echo COMPANY_PHONE; ?></div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <h3 class="h">Email</h3>
                    <div class="text"><?php echo COMPANY_EMAIL; ?></div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3 class="h">Dirección</h3>
                    <div class="text"><?php echo COMPANY_ADDRESS; ?></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Formulario de Contacto -->
<section class="contact-form-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="heading-block">
                    <h2 class="h">ENVÍANOS UN <span>MENSAJE</span></h2>
                </div>
                <div class="text">
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </div>
                <form class="contact-form" action="#" method="post">
                    <div class="form-row">
                        <div class="form-group">
                            <input type="text" name="name" placeholder="Nombre completo" required>
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" placeholder="Correo electrónico" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <input type="text" name="phone" placeholder="Teléfono">
                        </div>
                        <div class="form-group">
                            <input type="text" name="subject" placeholder="Asunto">
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea name="message" rows="6" placeholder="Tu mensaje" required></textarea>
                    </div>
                    <button type="submit" class="button-style1">Enviar mensaje</button>
                </form>
            </div>
            <div class="col-md-6">
                <div class="contact-details">
                    <div class="heading-block">
                        <h2 class="h">INFORMACIÓN DE <span> CONTACTO</span></h2>
                    </div>
                    <div class="text">
                        <p>Estamos ubicados en el corazón de Lima, Perú. Puedes contactarnos
                        por teléfono, correo electrónico o visitándonos en nuestras oficinas.</p>
                        <p>Nuestro horario de atención es de lunes a viernes, de 9:00 a 18:00.</p>
                    </div>
                    <div class="contact-methods">
                        <div class="contact-method">
                            <div class="method-icon"><i class="fas fa-phone"></i></div>
                            <div class="method-info">
                                <strong>Teléfono</strong>
                                <span><?php echo COMPANY_PHONE; ?></span>
                            </div>
                        </div>
                        <div class="contact-method">
                            <div class="method-icon"><i class="fas fa-envelope"></i></div>
                            <div class="method-info">
                                <strong>Email</strong>
                                <span><?php echo COMPANY_EMAIL; ?></span>
                            </div>
                        </div>
                        <div class="contact-method">
                            <div class="method-icon"><i class="fas fa-map-marker-alt"></i></div>
                            <div class="method-info">
                                <strong>Dirección</strong>
                                <span><?php echo COMPANY_ADDRESS; ?></span>
                            </div>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="<?php echo SOCIAL_FACEBOOK; ?>" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="<?php echo SOCIAL_INSTAGRAM; ?>" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="<?php echo SOCIAL_WHATSAPP; ?>" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Mapa -->
<section class="map-section">
    <div class="map-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1f0!3m2!1s0x910533a2a2a2a2a2%3A0x1234567890abcdef!2sLima%2C%20Per%C3%BA!3b1!3m2!1f0!3f0!3m3!1m2!1s0x910533a2a2a2a2a2%3A0x1234567890abcdef!2sLima%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
            width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</section>
