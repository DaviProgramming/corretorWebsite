$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoHeight: false,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            780: {
                items: 1
            },
            1000: {
                items: 3
            }
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
})