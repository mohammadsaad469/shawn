

$(document).ready(function(){
$('#home_slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
       items:1,
       nav:true,
       dots:false   
});
});

$('#card_slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
       items:4,
       nav:true,
});

$('#sec4_slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
       items:1,
       nav:true,
       dots:false,
});



$('#img-gellry').owlCarousel({
    loop:true,
    margin:10,
    items:5,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})