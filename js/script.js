
$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 1500,
    autoplaySpeed: 1000,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:1
        }
    }

})

$( function() {
    $( "#dialog" ).dialog();
} );