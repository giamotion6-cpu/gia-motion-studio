/**
 * GIA MOTION - Scripts principales
 */

jQuery(document).ready(function ($) {
    "use strict";

    // Preloader
    $(".preloader").fadeOut(500);

    // Inicializar Swiper para el banner principal
    var bannerSlider = new Swiper(".banner-slider", {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 17000,
        },
        navigation: {
            nextEl: ".banner-area .next",
            prevEl: ".banner-area .prev",
        },
        on: {
            slideChangeTransitionStart: function () {
                // Pausar videos al cambiar de slide
                $(".banner-item .bg-overlay .video").each(function () {
                    this.pause();
                });
            },
            slideChangeTransitionEnd: function () {
                // Reproducir video del slide activo
                $(".banner-item.swiper-slide-active .bg-overlay .video").each(function () {
                    this.play();
                });
            },
        },
    });

    // Inicializar Swiper para el portafolio
    var portfolioSlider = new Swiper(".portfolio-carousel .swiper-container", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".portfolio-carousel .next",
            prevEl: ".portfolio-carousel .prev",
        },
        breakpoints: {
            200: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
        },
    });

    // Inicializar Swiper para testimonios
    var testimonialSlider = new Swiper(".testimonials-block .swiper-container", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: ".testimonials-block .next",
            prevEl: ".testimonials-block .prev",
        },
    });

    // Inicializar Swiper para marcas/clientes
    var brandSlider = new Swiper(".brand-block .swiper-wrapper", {
        loop: true,
        autoplay: {
            delay: 1000,
        },
        spaceBetween: 30,
        breakpoints: {
            200: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
        },
    });

    // Parallax suave en el scroll
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        $(".bg-overlay .image[data-parallax]").each(function () {
            var speed = $(this).data("speed") || 0.5;
            var yPos = -(scrollTop * speed);
            $(this).css("transform", "translate3d(0, " + yPos + "px, 0)");
        });
    });

    // Smooth scroll para enlaces internos
    $('a[href*="#"]:not([href="#"])').on("click", function (e) {
        var target = $(this.getAttribute("href"));
        if (target.length) {
            e.preventDefault();
            $("html,body").animate({
                scrollTop: target.offset().top - 80,
            }, 800);
        }
    });

    // Control de videos de fondo
    function controlVideo(element, event) {
        if (event === "play") {
            element.get(0).play();
        } else {
            element.get(0).pause();
        }
    }

    // Iniciar video del primer slide
    $(".banner-item.swiper-slide-active .bg-overlay .video").each(function () {
        this.play();
    });
});
