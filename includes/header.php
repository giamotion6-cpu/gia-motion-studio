<?php
/**
 * Header común para todas las páginas
 */
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo escape(COMPANY_DESCRIPTION); ?>">
    <title><?php echo getPageTitle(); ?></title>

    <!-- Fuentes de Google -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

    <!-- Iconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    <!-- Estilos principales -->
    <link rel="stylesheet" href="<?php echo rtrim(STYLE_URL, '/'); ?>/main.css">

    <!-- Estilos de la página actual -->
    <link rel="stylesheet" href="<?php echo getPageCSS(); ?>">
</head>

<body class="page-<?php echo getCurrentRoute(); ?>">
    <!-- Preloader -->
    <div class="preloader">
        <div class="preloader_img"><img src="<?php echo getLogoURL(); ?>" alt="<?php echo COMPANY_NAME; ?>"></div>
    </div>

    <!-- Header -->
    <header class="site-header light-color">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="logo-block col-auto">
                    <div class="site-logo">
                        <a href="<?php echo BASE_URL; ?>">
                            <img src="<?php echo getLogoURL(); ?>" alt="<?php echo COMPANY_NAME; ?>">
                        </a>
                    </div>
                </div>
                <div class="right col-auto">
                    <nav class="navigation visible_menu">
                        <ul id="menu-navigation" class="menu">
                            <li class="menu-item <?php echo activeClass('home'); ?>">
                                <a href="<?php echo getPageUrl('home'); ?>"><span>Inicio</span></a>
                            </li>
                            <li class="menu-item <?php echo activeClass('nosotros'); ?>">
                                <a href="<?php echo getPageUrl('nosotros'); ?>"><span>Nosotros</span></a>
                            </li>
                            <li class="menu-item <?php echo activeClass('servicios'); ?>">
                                <a href="<?php echo getPageUrl('servicios'); ?>"><span>Servicios</span></a>
                            </li>
                            <li class="menu-item <?php echo activeClass('portafolio'); ?>">
                                <a href="<?php echo getPageUrl('portafolio'); ?>"><span>Portafolio</span></a>
                            </li>
                            <li class="menu-item <?php echo activeClass('blog'); ?>">
                                <a href="<?php echo getPageUrl('blog'); ?>"><span>Blog</span></a>
                            </li>
                            <li class="menu-item <?php echo activeClass('contacto'); ?>">
                                <a href="<?php echo getPageUrl('contacto'); ?>"><span>Contáctanos</span></a>
                            </li>
                        </ul>
                    </nav>
                    <div class="nav-butter visible_menu" data-magic-cursor="link-small">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="header-space"></div>

    <main class="main-container">
