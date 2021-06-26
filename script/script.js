// conputer owl carousel
$(document).ready(function () {
    $('#owl1').owlCarousel({
        navigation: false,
        loop: true,
        autoplay: true,
        margin: 20,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            700: {
                items: 2,
                nav: false
            },
            767: {
                items: 2,
                nav: false
            },
            991: {
                items: 3,
                nav: true,
                loop: false
            },
            1210: {
                items: 4,
                nav: true,
                loop: false
            },
            1920: {
                items: 6,
                nav: true,
                loop: false
            },
        }
    })
})
// end computer owl carousel


$('#owl2').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,

            loop: false
        },
        1920: {
            items: 7,

            loop: false
        }
    }
})
  


