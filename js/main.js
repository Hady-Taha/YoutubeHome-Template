$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        rtl: false,
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        center:true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })
});

