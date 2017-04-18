var animatePoints = function() {
    var revealPoint = function() {    
        $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
    };
 
    $.each($('.point'), revealPoint); //iterates over each point and executes revealPoint
    };

$(window).load(function() {
    
    // for massive screens where you can see all selling points right away
    // jquery height method, all instances of window are changed into jquery objects 
    if ($(window).height() > 950) {
         animatePoints();
     }
    
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

    $(window).scroll(function(event) {
        if ($(window).scrollTop() >= scrollDistance) {
            animatePoints();  
         }
    });
});