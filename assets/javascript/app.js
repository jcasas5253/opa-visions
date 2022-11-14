// Credit
console.log("created by Jacob Casas");

// On Album click Display Music Player
$('.flip-card0').click(function () {
    $('#container-btn').toggle();
    $("#secret-container")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card1').click(function () {
    $('#container-btn').toggle();
    $("#secret-container")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card2').click(function () {
    $('#container-btn').toggle();
    $("#secret-container")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card3').click(function () {
    $('#container-btn').toggle();
    $("#secret-container")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card4').click(function () {
    $('#container-btn').toggle();
    $("#secret-container")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card00').click(function () {
    $('#container-btn').toggle();
    $("#secret-container")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card000').click(function () {
    $('#container-btn').toggle();
    $("#secret-container")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card0000').click(function () {
    $('#container-btn').toggle();
    $("#secret-container")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card5').click(function () {
    $('#container-btn').toggle();
    $("#secret-container")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card6').click(function () {
    $('#container-btn').toggle();
    $("#secret-container")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

// Redesign code (Loaders)
$('html, body').animate({
    scrollTop: $("#shop-container").offset().top +200
}, 1000);

$('#loader0').click(function() {
    $('#video-gallery').toggle();
});

$('#loader1').click(function() {
    $('#container-btn').toggle();
});

$('#loader2').click(function() {
    $('#carouselExampleCaptions').toggle();
});

$('#loader01').click(function() {
    $('#card-center').toggle();
});

$('.fa-angle-double-right').click(function() {
    $('.social-hider').toggle();
    $('.fa-angle-double-right').toggle();
    $('.fa-angle-double-left').toggle();
});

$('.fa-angle-double-left').click(function() {
    $('.social-hider').toggle();
    $('.fa-angle-double-right').toggle();
    $('.fa-angle-double-left').toggle();
});
