$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        544:{
            items:1
        },
        // 1000:{
        //     items:3
        // }
    }
})