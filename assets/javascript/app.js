// Credit
console.log("created by Jacob Casas");

// Music Progress bar update
$('#audio1').on('timeupdate', function () {
    $('#seekbar').attr("value", this.currentTime / this.duration);
})

$('#audio2').on('timeupdate', function () {
    $('#seekbar2').attr("value", this.currentTime / this.duration);
})

$('#audio3').on('timeupdate', function () {
    $('#seekbar2').attr("value", this.currentTime / this.duration);
})

$('#audio4').on('timeupdate', function () {
    $('#seekbar2').attr("value", this.currentTime / this.duration);
})

$('#audio5').on('timeupdate', function () {
    $('#seekbar2').attr("value", this.currentTime / this.duration);
})

$('#audio6').on('timeupdate', function () {
    $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio7').on('timeupdate', function () {
    $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio8').on('timeupdate', function () {
    $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio9').on('timeupdate', function () {
    $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio10').on('timeupdate', function () {
    $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio11').on('timeupdate', function () {
    $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio12').on('timeupdate', function () {
    $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio13').on('timeupdate', function () {
    $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio14').on('timeupdate', function () {
    $('#seekbar4').attr("value", this.currentTime / this.duration);
})

$('#audio15').on('timeupdate', function () {
    $('#seekbar4').attr("value", this.currentTime / this.duration);
})

$('#audio16').on('timeupdate', function () {
    $('#seekbar4').attr("value", this.currentTime / this.duration);
})

$('#audio17').on('timeupdate', function () {
    $('#seekbar4').attr("value", this.currentTime / this.duration);
})

$('#audio18').on('timeupdate', function () {
    $('#seekbar4').attr("value", this.currentTime / this.duration);
})

$('#audio19').on('timeupdate', function () {
    $('#seekbar4').attr("value", this.currentTime / this.duration);
})

$('#audio20').on('timeupdate', function () {
    $('#seekbar6').attr("value", this.currentTime / this.duration);
})

$('#audio21').on('timeupdate', function () {
    $('#seekbar6').attr("value", this.currentTime / this.duration);
})

$('#audio22').on('timeupdate', function () {
    $('#seekbar6').attr("value", this.currentTime / this.duration);
})

$('#audio23').on('timeupdate', function () {
    $('#seekbar6').attr("value", this.currentTime / this.duration);
})

$('#audio24').on('timeupdate', function () {
    $('#seekbar6').attr("value", this.currentTime / this.duration);
})

$('#audio25').on('timeupdate', function () {
    $('#seekbar6').attr("value", this.currentTime / this.duration);
})

$('#audio26').on('timeupdate', function () {
    $('#seekbar6').attr("value", this.currentTime / this.duration);
})

$('#audio27').on('timeupdate', function () {
    $('#seekbar6').attr("value", this.currentTime / this.duration);
})

$('#audio28').on('timeupdate', function () {
    $('#seekbar6').attr("value", this.currentTime / this.duration);
})


// Music Skip Forward or Back +-5
function skipForward() {
    var myAudio = document.getElementById("audio1");
    var oAudio = document.getElementById('audio1');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack() {
    var myAudio = document.getElementById("audio1");
    var oAudio = document.getElementById('audio1');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward2() {
    var myAudio = document.getElementById("audio2");
    var oAudio = document.getElementById('audio2');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack2() {
    var myAudio = document.getElementById("audio2");
    var oAudio = document.getElementById('audio2');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward3() {
    var myAudio = document.getElementById("audio3");
    var oAudio = document.getElementById('audio3');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack3() {
    var myAudio = document.getElementById("audio3");
    var oAudio = document.getElementById('audio3');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward4() {
    var myAudio = document.getElementById("audio4");
    var oAudio = document.getElementById('audio4');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack4() {
    var myAudio = document.getElementById("audio4");
    var oAudio = document.getElementById('audio4');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward5() {
    var myAudio = document.getElementById("audio5");
    var oAudio = document.getElementById('audio5');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack5() {
    var myAudio = document.getElementById("audio5");
    var oAudio = document.getElementById('audio5');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward6() {
    var myAudio = document.getElementById("audio6");
    var oAudio = document.getElementById('audio6');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack6() {
    var myAudio = document.getElementById("audio6");
    var oAudio = document.getElementById('audio6');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward7() {
    var myAudio = document.getElementById("audio7");
    var oAudio = document.getElementById('audio7');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack7() {
    var myAudio = document.getElementById("audio7");
    var oAudio = document.getElementById('audio7');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward8() {
    var myAudio = document.getElementById("audio8");
    var oAudio = document.getElementById('audio8');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack8() {
    var myAudio = document.getElementById("audio8");
    var oAudio = document.getElementById('audio8');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward9() {
    var myAudio = document.getElementById("audio9");
    var oAudio = document.getElementById('audio9');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack9() {
    var myAudio = document.getElementById("audio9");
    var oAudio = document.getElementById('audio9');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward10() {
    var myAudio = document.getElementById("audio10");
    var oAudio = document.getElementById('audio10');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack10() {
    var myAudio = document.getElementById("audio10");
    var oAudio = document.getElementById('audio10');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward11() {
    var myAudio = document.getElementById("audio11");
    var oAudio = document.getElementById('audio11');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack11() {
    var myAudio = document.getElementById("audio11");
    var oAudio = document.getElementById('audio11');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward12() {
    var myAudio = document.getElementById("audio12");
    var oAudio = document.getElementById('audio12');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack12() {
    var myAudio = document.getElementById("audio12");
    var oAudio = document.getElementById('audio12');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward13() {
    var myAudio = document.getElementById("audio13");
    var oAudio = document.getElementById('audio13');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack13() {
    var myAudio = document.getElementById("audio13");
    var oAudio = document.getElementById('audio13');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward14() {
    var myAudio = document.getElementById("audio14");
    var oAudio = document.getElementById('audio14');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack14() {
    var myAudio = document.getElementById("audio14");
    var oAudio = document.getElementById('audio14');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward15() {
    var myAudio = document.getElementById("audio15");
    var oAudio = document.getElementById('audio15');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack15() {
    var myAudio = document.getElementById("audio15");
    var oAudio = document.getElementById('audio15');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward16() {
    var myAudio = document.getElementById("audio16");
    var oAudio = document.getElementById('audio16');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack16() {
    var myAudio = document.getElementById("audio16");
    var oAudio = document.getElementById('audio16');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward17() {
    var myAudio = document.getElementById("audio17");
    var oAudio = document.getElementById('audio17');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack17() {
    var myAudio = document.getElementById("audio17");
    var oAudio = document.getElementById('audio17');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward18() {
    var myAudio = document.getElementById("audio18");
    var oAudio = document.getElementById('audio18');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack18() {
    var myAudio = document.getElementById("audio18");
    var oAudio = document.getElementById('audio18');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward19() {
    var myAudio = document.getElementById("audio19");
    var oAudio = document.getElementById('audio19');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack19() {
    var myAudio = document.getElementById("audio19");
    var oAudio = document.getElementById('audio19');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward20() {
    var myAudio = document.getElementById("audio20");
    var oAudio = document.getElementById('audio20');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack20() {
    var myAudio = document.getElementById("audio20");
    var oAudio = document.getElementById('audio20');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward21() {
    var myAudio = document.getElementById("audio21");
    var oAudio = document.getElementById('audio21');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack21() {
    var myAudio = document.getElementById("audio21");
    var oAudio = document.getElementById('audio21');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward22() {
    var myAudio = document.getElementById("audio22");
    var oAudio = document.getElementById('audio22');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack22() {
    var myAudio = document.getElementById("audio22");
    var oAudio = document.getElementById('audio22');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward23() {
    var myAudio = document.getElementById("audio23");
    var oAudio = document.getElementById('audio23');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack23() {
    var myAudio = document.getElementById("audio23");
    var oAudio = document.getElementById('audio23');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward24() {
    var myAudio = document.getElementById("audio24");
    var oAudio = document.getElementById('audio24');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack24() {
    var myAudio = document.getElementById("audio24");
    var oAudio = document.getElementById('audio24');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward25() {
    var myAudio = document.getElementById("audio25");
    var oAudio = document.getElementById('audio25');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack25() {
    var myAudio = document.getElementById("audio25");
    var oAudio = document.getElementById('audio25');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward26() {
    var myAudio = document.getElementById("audio26");
    var oAudio = document.getElementById('audio26');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack26() {
    var myAudio = document.getElementById("audio26");
    var oAudio = document.getElementById('audio26');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward27() {
    var myAudio = document.getElementById("audio27");
    var oAudio = document.getElementById('audio27');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack27() {
    var myAudio = document.getElementById("audio27");
    var oAudio = document.getElementById('audio27');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

function skipForward28() {
    var myAudio = document.getElementById("audio28");
    var oAudio = document.getElementById('audio28');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime += 5.0;
    }
}

function skipkBack28() {
    var myAudio = document.getElementById("audio28");
    var oAudio = document.getElementById('audio28');
    if (myAudio.duration > 0 && !myAudio.paused) {
        oAudio.currentTime -= 5.0;
    }
}

// On Album click Display Music Player
$('.flip-card0').click(function () {
    fall();
    $("#album-new")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card1').click(function () {
    xFiles();
    $("#album-new")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card2').click(function () {
    toggleMusic();
    $("#album-new")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card3').click(function () {
    mixTape();
    $("#album-new")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

$('.flip-card4').click(function () {
    minuteMaid();
    $("#album-new")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
})

// Style.Display Elements
function fall() {
    document.getElementById('playstation0').style.display = "block";
    document.getElementById('container-btn').style.display = "none";
    document.getElementById("album-new").style.display = "initial";
    
}

function toggleMusic() {
    document.getElementById('playstation').style.display = "block";
    document.getElementById('container-btn').style.display = "none";
    document.getElementById("album-new").style.display = "initial";
}

function xFiles() {
    document.getElementById('playstation1').style.display = "block";
    document.getElementById('container-btn').style.display = "none";
    document.getElementById("album-new").style.display = "initial";
}

function mixTape() {
    document.getElementById('playstation2').style.display = "block";
    document.getElementById('container-btn').style.display = "none";
    document.getElementById("album-new").style.display = "initial";
}

function minuteMaid() {
    document.getElementById('playstation3').style.display = "block";
    document.getElementById('container-btn').style.display = "none";
    document.getElementById("album-new").style.display = "initial";
}

function newAlbum() {
    document.getElementById('container-btn').style.display = "block";
    document.getElementById('album-new').style.display = "none";
    document.getElementById('playstation0').style.display = "none";
    document.getElementById('playstation').style.display = "none";
    document.getElementById('playstation1').style.display = "none";
    document.getElementById('playstation2').style.display = "none";
    document.getElementById('playstation3').style.display = "none";
    $("#music-scroll")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
}


// Only one Audio can play at same Time
function onlyPlayOneIn(container) {
    container.addEventListener("play", function (event) {
        audio_elements = container.getElementsByTagName("audio")
        for (i = 0; i < audio_elements.length; i++) {
            audio_element = audio_elements[i];
            if (audio_element !== event.target) {
                audio_element.pause();
            }
        }
    }, true);
}

document.addEventListener("DOMContentLoaded", function () {
    onlyPlayOneIn(document.body);
});

// Play Audio
function playAudio() {
    var myAudio = document.getElementById("audio2");
    myAudio.play();
    $('.play-pause').css("border-style", "solid");
    $('.play-pause').css("border-width", "2px");
    $('.play-pause').css("border-color", "yellow");
    $('.play-pause').css("border-radius", "25px");
    $('.pause-play').css("border", "none");
    $('.pause-play1').css("border", "none");
    $('.pause-play2').css("border", "none");
    $('.pause-play3').css("border", "none");
    $('.play-pause1').css("border", "none");
    $('.play-pause2').css("border", "none");
    $('.play-pause3').css("border", "none");
}

function playAudioTwo() {
    var myAudio = document.getElementById("audio3");
    myAudio.play();
    $('.play-pause1').css("border-style", "solid");
    $('.play-pause1').css("border-width", "2px");
    $('.play-pause1').css("border-color", "yellow");
    $('.play-pause1').css("border-radius", "25px");
    $('.pause-play').css("border", "none");
    $('.pause-play1').css("border", "none");
    $('.pause-play2').css("border", "none");
    $('.pause-play3').css("border", "none");
    $('.play-pause').css("border", "none");
    $('.play-pause2').css("border", "none");
    $('.play-pause3').css("border", "none");
}

function playAudioThree() {
    var myAudio = document.getElementById("audio4");
    myAudio.play();
    $('.play-pause2').css("border-style", "solid");
    $('.play-pause2').css("border-width", "2px");
    $('.play-pause2').css("border-color", "yellow");
    $('.play-pause2').css("border-radius", "25px");
    $('.pause-play').css("border", "none");
    $('.pause-play1').css("border", "none");
    $('.pause-play2').css("border", "none");
    $('.pause-play3').css("border", "none");
    $('.play-pause').css("border", "none");
    $('.play-pause1').css("border", "none");
    $('.play-pause3').css("border", "none");
}

function playAudioFour() {
    var myAudio = document.getElementById("audio5");
    myAudio.play();
    $('.play-pause3').css("border-style", "solid");
    $('.play-pause3').css("border-width", "2px");
    $('.play-pause3').css("border-color", "yellow");
    $('.play-pause3').css("border-radius", "25px");
    $('.pause-play').css("border", "none");
    $('.pause-play1').css("border", "none");
    $('.pause-play2').css("border", "none");
    $('.pause-play3').css("border", "none");
    $('.play-pause').css("border", "none");
    $('.play-pause1').css("border", "none");
    $('.play-pause2').css("border", "none");
}

function playAudioSix() {
    var myAudio = document.getElementById("audio6");
    myAudio.play();
    $('.play-pause5').css("border-style", "solid");
    $('.play-pause5').css("border-width", "2px");
    $('.play-pause5').css("border-color", "yellow");
    $('.play-pause5').css("border-radius", "25px");
    $('.pause-play5').css("border", "none");
    $('.pause-play6').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function playAudioSeven() {
    var myAudio = document.getElementById("audio7");
    myAudio.play();
    $('.play-pause6').css("border-style", "solid");
    $('.play-pause6').css("border-width", "2px");
    $('.play-pause6').css("border-color", "yellow");
    $('.play-pause6').css("border-radius", "25px");
    $('.pause-play6').css("border", "none");
    $('.pause-play5').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function playAudioEight() {
    var myAudio = document.getElementById("audio8");
    myAudio.play();
    $('.play-pause7').css("border-style", "solid");
    $('.play-pause7').css("border-width", "2px");
    $('.play-pause7').css("border-color", "yellow");
    $('.play-pause7').css("border-radius", "25px");
    $('.pause-play6').css("border", "none");
    $('.pause-play5').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function playAudioNine() {
    var myAudio = document.getElementById("audio9");
    myAudio.play();
    $('.play-pause8').css("border-style", "solid");
    $('.play-pause8').css("border-width", "2px");
    $('.play-pause8').css("border-color", "yellow");
    $('.play-pause8').css("border-radius", "25px");
    $('.pause-play6').css("border", "none");
    $('.pause-play5').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function playAudioTen() {
    var myAudio = document.getElementById("audio10");
    myAudio.play();
    $('.play-pause9').css("border-style", "solid");
    $('.play-pause9').css("border-width", "2px");
    $('.play-pause9').css("border-color", "yellow");
    $('.play-pause9').css("border-radius", "25px");
    $('.pause-play6').css("border", "none");
    $('.pause-play5').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function playAudioEleven() {
    var myAudio = document.getElementById("audio11");
    myAudio.play();
    $('.play-pause10').css("border-style", "solid");
    $('.play-pause10').css("border-width", "2px");
    $('.play-pause10').css("border-color", "yellow");
    $('.play-pause10').css("border-radius", "25px");
    $('.pause-play6').css("border", "none");
    $('.pause-play5').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function playAudioTwelve() {
    var myAudio = document.getElementById("audio12");
    myAudio.play();
    $('.play-pause11').css("border-style", "solid");
    $('.play-pause11').css("border-width", "2px");
    $('.play-pause11').css("border-color", "yellow");
    $('.play-pause11').css("border-radius", "25px");
    $('.pause-play6').css("border", "none");
    $('.pause-play5').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function playAudioThirteen() {
    var myAudio = document.getElementById("audio13");
    myAudio.play();
    $('.play-pause12').css("border-style", "solid");
    $('.play-pause12').css("border-width", "2px");
    $('.play-pause12').css("border-color", "yellow");
    $('.play-pause12').css("border-radius", "25px");
    $('.pause-play6').css("border", "none");
    $('.pause-play5').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
}

function playAudioFourteen() {
    var myAudio = document.getElementById("audio14");
    myAudio.play();
    $('.play-pause13').css("border-style", "solid");
    $('.play-pause13').css("border-width", "2px");
    $('.play-pause13').css("border-color", "yellow");
    $('.play-pause13').css("border-radius", "25px");
    $('.pause-play13').css("border", "none");
    $('.pause-play14').css("border", "none");
    $('.pause-play15').css("border", "none");
    $('.pause-play16').css("border", "none");
    $('.pause-play17').css("border", "none");
    $('.pause-play18').css("border", "none");
    $('.play-pause14').css("border", "none");
    $('.play-pause15').css("border", "none");
    $('.play-pause16').css("border", "none");
    $('.play-pause17').css("border", "none");
    $('.play-pause18').css("border", "none");
}

function playAudioFifthteen() {
    var myAudio = document.getElementById("audio15");
    myAudio.play();
    $('.play-pause14').css("border-style", "solid");
    $('.play-pause14').css("border-width", "2px");
    $('.play-pause14').css("border-color", "yellow");
    $('.play-pause14').css("border-radius", "25px");
    $('.pause-play13').css("border", "none");
    $('.pause-play14').css("border", "none");
    $('.pause-play15').css("border", "none");
    $('.pause-play16').css("border", "none");
    $('.pause-play17').css("border", "none");
    $('.pause-play18').css("border", "none");
    $('.play-pause13').css("border", "none");
    $('.play-pause15').css("border", "none");
    $('.play-pause16').css("border", "none");
    $('.play-pause17').css("border", "none");
    $('.play-pause18').css("border", "none");
}

function playAudioSixteen() {
    var myAudio = document.getElementById("audio16");
    myAudio.play();
    $('.play-pause15').css("border-style", "solid");
    $('.play-pause15').css("border-width", "2px");
    $('.play-pause15').css("border-color", "yellow");
    $('.play-pause15').css("border-radius", "25px");
    $('.pause-play13').css("border", "none");
    $('.pause-play14').css("border", "none");
    $('.pause-play15').css("border", "none");
    $('.pause-play16').css("border", "none");
    $('.pause-play17').css("border", "none");
    $('.pause-play18').css("border", "none");
    $('.play-pause13').css("border", "none");
    $('.play-pause14').css("border", "none");
    $('.play-pause16').css("border", "none");
    $('.play-pause17').css("border", "none");
    $('.play-pause18').css("border", "none");
}

function playAudioSeventeen() {
    var myAudio = document.getElementById("audio17");
    myAudio.play();
    $('.play-pause16').css("border-style", "solid");
    $('.play-pause16').css("border-width", "2px");
    $('.play-pause16').css("border-color", "yellow");
    $('.play-pause16').css("border-radius", "25px");
    $('.pause-play13').css("border", "none");
    $('.pause-play14').css("border", "none");
    $('.pause-play15').css("border", "none");
    $('.pause-play16').css("border", "none");
    $('.pause-play17').css("border", "none");
    $('.pause-play18').css("border", "none");
    $('.play-pause13').css("border", "none");
    $('.play-pause14').css("border", "none");
    $('.play-pause15').css("border", "none");
    $('.play-pause17').css("border", "none");
    $('.play-pause18').css("border", "none");
}

function playAudioEighteen() {
    var myAudio = document.getElementById("audio18");
    myAudio.play();
    $('.play-pause17').css("border-style", "solid");
    $('.play-pause17').css("border-width", "2px");
    $('.play-pause17').css("border-color", "yellow");
    $('.play-pause17').css("border-radius", "25px");
    $('.pause-play13').css("border", "none");
    $('.pause-play14').css("border", "none");
    $('.pause-play15').css("border", "none");
    $('.pause-play16').css("border", "none");
    $('.pause-play17').css("border", "none");
    $('.pause-play18').css("border", "none");
    $('.play-pause13').css("border", "none");
    $('.play-pause14').css("border", "none");
    $('.play-pause15').css("border", "none");
    $('.play-pause16').css("border", "none");
    $('.play-pause18').css("border", "none");
}

function playAudioNineteen() {
    var myAudio = document.getElementById("audio19");
    myAudio.play();
    $('.play-pause18').css("border-style", "solid");
    $('.play-pause18').css("border-width", "2px");
    $('.play-pause18').css("border-color", "yellow");
    $('.play-pause18').css("border-radius", "25px");
    $('.pause-play13').css("border", "none");
    $('.pause-play14').css("border", "none");
    $('.pause-play15').css("border", "none");
    $('.pause-play16').css("border", "none");
    $('.pause-play17').css("border", "none");
    $('.pause-play18').css("border", "none");
    $('.play-pause13').css("border", "none");
    $('.play-pause14').css("border", "none");
    $('.play-pause15').css("border", "none");
    $('.play-pause16').css("border", "none");
    $('.play-pause17').css("border", "none");
}

function playAudio20() {
    var myAudio = document.getElementById("audio20");
    myAudio.play();
    $('.play-pause19').css("border-style", "solid");
    $('.play-pause19').css("border-width", "2px");
    $('.play-pause19').css("border-color", "yellow");
    $('.play-pause19').css("border-radius", "25px");
    $('.pause-play19').css("border", "none");
    $('.pause-play20').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play22').css("border", "none");
    $('.pause-play23').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function playAudio21() {
    var myAudio = document.getElementById("audio21");
    myAudio.play();
    $('.play-pause20').css("border-style", "solid");
    $('.play-pause20').css("border-width", "2px");
    $('.play-pause20').css("border-color", "yellow");
    $('.play-pause20').css("border-radius", "25px");
    $('.pause-play20').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play22').css("border", "none");
    $('.pause-play23').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none");
    $('.play-pause19').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function playAudio22() {
    var myAudio = document.getElementById("audio22");
    myAudio.play();
    $('.play-pause21').css("border-style", "solid");
    $('.play-pause21').css("border-width", "2px");
    $('.play-pause21').css("border-color", "yellow");
    $('.play-pause21').css("border-radius", "25px");
    $('.pause-play21').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play22').css("border", "none");
    $('.pause-play23').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none");
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function playAudio23() {
    var myAudio = document.getElementById("audio23");
    myAudio.play();
    $('.play-pause22').css("border-style", "solid");
    $('.play-pause22').css("border-width", "2px");
    $('.play-pause22').css("border-color", "yellow");
    $('.play-pause22').css("border-radius", "25px");
    $('.pause-play22').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play23').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none");
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function playAudio24() {
    var myAudio = document.getElementById("audio24");
    myAudio.play();
    $('.play-pause23').css("border-style", "solid");
    $('.play-pause23').css("border-width", "2px");
    $('.play-pause23').css("border-color", "yellow");
    $('.play-pause23').css("border-radius", "25px");
    $('.pause-play23').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none");
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function playAudio25() {
    var myAudio = document.getElementById("audio25");
    myAudio.play();
    $('.play-pause24').css("border-style", "solid");
    $('.play-pause24').css("border-width", "2px");
    $('.play-pause24').css("border-color", "yellow");
    $('.play-pause24').css("border-radius", "25px");
    $('.pause-play24').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none");
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function playAudio26() {
    var myAudio = document.getElementById("audio26");
    myAudio.play();
    $('.play-pause25').css("border-style", "solid");
    $('.play-pause25').css("border-width", "2px");
    $('.play-pause25').css("border-color", "yellow");
    $('.play-pause25').css("border-radius", "25px");
    $('.pause-play25').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none");
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function playAudio27() {
    var myAudio = document.getElementById("audio27");
    myAudio.play();
    $('.play-pause26').css("border-style", "solid");
    $('.play-pause26').css("border-width", "2px");
    $('.play-pause26').css("border-color", "yellow");
    $('.play-pause26').css("border-radius", "25px");
    $('.pause-play26').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play27').css("border", "none");
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function playAudio28() {
    var myAudio = document.getElementById("audio28");
    myAudio.play();
    $('.play-pause27').css("border-style", "solid");
    $('.play-pause27').css("border-width", "2px");
    $('.play-pause27').css("border-color", "yellow");
    $('.play-pause27').css("border-radius", "25px");
    $('.pause-play27').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
}

//function playAudio22() {
//    var myAudio = document.getElementById("audio22");
//    myAudio.play();
//    $('.play-pause21').css("border-style", "solid");
//    $('.play-pause21').css("border-width", "2px");
//    $('.play-pause21').css("border-color", "yellow");
//    $('.play-pause21').css("border-radius", "25px");
//    $('.pause-play21').css("border", "none");
//    $('.pause-play20').css("border", "none");
//    $('.pause-play21').css("border", "none");
//    $('.pause-play22').css("border", "none");
//    $('.pause-play23').css("border", "none");
//    $('.pause-play24').css("border", "none");
//    $('.pause-play25').css("border", "none");
//    $('.pause-play26').css("border", "none");
//    $('.pause-play27').css("border", "none");
//    $('.play-pause19').css("border", "none");
//    $('.play-pause21').css("border", "none");
//    $('.play-pause22').css("border", "none");
//    $('.play-pause23').css("border", "none");
//    $('.play-pause24').css("border", "none");
//    $('.play-pause25').css("border", "none");
//    $('.play-pause26').css("border", "none");
//    $('.play-pause27').css("border", "none");
//}

function playAudioXFiles() {
    var myAudio = document.getElementById("audio1");
    myAudio.play();
    $('.play-pause4').css("border-style", "solid");
    $('.play-pause4').css("border-width", "2px");
    $('.play-pause4').css("border-color", "yellow");
    $('.play-pause4').css("border-radius", "25px");
    $('.pause-play4').css("border", "none");
}

// Pause Audio
function pauseAudio() {
    var myAudio = document.getElementById("audio2");
    myAudio.pause();
    $('.pause-play').css("border-style", "solid");
    $('.pause-play').css("border-width", "2px");
    $('.pause-play').css("border-color", "yellow");
    $('.pause-play').css("border-radius", "25px");
    $('.play-pause').css("border", "none");
    $('.play-pause1').css("border", "none");
    $('.play-pause2').css("border", "none");
    $('.play-pause3').css("border", "none");
    $('.pause-play1').css("border", "none");
    $('.pause-play2').css("border", "none");
    $('.pause-play3').css("border", "none");
}

function pauseAudioTwo() {
    var myAudio = document.getElementById("audio3");
    myAudio.pause();
    $('.pause-play1').css("border-style", "solid");
    $('.pause-play1').css("border-width", "2px");
    $('.pause-play1').css("border-color", "yellow");
    $('.pause-play1').css("border-radius", "25px");
    $('.play-pause').css("border", "none");
    $('.play-pause1').css("border", "none");
    $('.play-pause2').css("border", "none");
    $('.play-pause3').css("border", "none");
    $('.pause-play').css("border", "none");
    $('.pause-play2').css("border", "none");
    $('.pause-play3').css("border", "none");
}

function pauseAudioThree() {
    var myAudio = document.getElementById("audio4");
    myAudio.pause();
    $('.pause-play2').css("border-style", "solid");
    $('.pause-play2').css("border-width", "2px");
    $('.pause-play2').css("border-color", "yellow");
    $('.pause-play2').css("border-radius", "25px");
    $('.play-pause').css("border", "none");
    $('.play-pause1').css("border", "none");
    $('.play-pause2').css("border", "none");
    $('.play-pause3').css("border", "none");
    $('.pause-play').css("border", "none");
    $('.pause-play1').css("border", "none");
    $('.pause-play3').css("border", "none");
}

function pauseAudioFour() {
    var myAudio = document.getElementById("audio5");
    myAudio.pause();
    $('.pause-play3').css("border-style", "solid");
    $('.pause-play3').css("border-width", "2px");
    $('.pause-play3').css("border-color", "yellow");
    $('.pause-play3').css("border-radius", "25px");
    $('.play-pause').css("border", "none");
    $('.play-pause1').css("border", "none");
    $('.play-pause2').css("border", "none");
    $('.play-pause3').css("border", "none");
    $('.pause-play').css("border", "none");
    $('.pause-play1').css("border", "none");
    $('.pause-play2').css("border", "none");
}

function pauseAudioSix() {
    var myAudio = document.getElementById('audio6');
    myAudio.pause();
    $('.pause-play5').css("border-style", "solid");
    $('.pause-play5').css("border-width", "2px");
    $('.pause-play5').css("border-color", "yellow");
    $('.pause-play5').css("border-radius", "25px");
    $('.pause-play6').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function pauseAudioSeven() {
    var myAudio = document.getElementById('audio7');
    myAudio.pause();
    $('.pause-play6').css("border-style", "solid");
    $('.pause-play6').css("border-width", "2px");
    $('.pause-play6').css("border-color", "yellow");
    $('.pause-play6').css("border-radius", "25px");
    $('.pause-play5').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function pauseAudioEight() {
    var myAudio = document.getElementById('audio8');
    myAudio.pause();
    $('.pause-play7').css("border-style", "solid");
    $('.pause-play7').css("border-width", "2px");
    $('.pause-play7').css("border-color", "yellow");
    $('.pause-play7').css("border-radius", "25px");
    $('.pause-play5').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function pauseAudioNine() {
    var myAudio = document.getElementById('audio9');
    myAudio.pause();
    $('.pause-play8').css("border-style", "solid");
    $('.pause-play8').css("border-width", "2px");
    $('.pause-play8').css("border-color", "yellow");
    $('.pause-play8').css("border-radius", "25px");
    $('.pause-play5').css("border", "none");
    $('.pause-play6').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function pauseAudioTen() {
    var myAudio = document.getElementById('audio10');
    myAudio.pause();
    $('.pause-play9').css("border-style", "solid");
    $('.pause-play9').css("border-width", "2px");
    $('.pause-play9').css("border-color", "yellow");
    $('.pause-play9').css("border-radius", "25px");
    $('.pause-play5').css("border", "none");
    $('.pause-play6').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function pauseAudioEleven() {
    var myAudio = document.getElementById('audio11');
    myAudio.pause();
    $('.pause-play10').css("border-style", "solid");
    $('.pause-play10').css("border-width", "2px");
    $('.pause-play10').css("border-color", "yellow");
    $('.pause-play10').css("border-radius", "25px");
    $('.pause-play5').css("border", "none");
    $('.pause-play6').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function pauseAudioTwelve() {
    var myAudio = document.getElementById('audio12');
    myAudio.pause();
    $('.pause-play11').css("border-style", "solid");
    $('.pause-play11').css("border-width", "2px");
    $('.pause-play11').css("border-color", "yellow");
    $('.pause-play11').css("border-radius", "25px");
    $('.pause-play5').css("border", "none");
    $('.pause-play6').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play12').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function pauseAudioThirteen() {
    var myAudio = document.getElementById('audio13');
    myAudio.pause();
    $('.pause-play12').css("border-style", "solid");
    $('.pause-play12').css("border-width", "2px");
    $('.pause-play12').css("border-color", "yellow");
    $('.pause-play12').css("border-radius", "25px");
    $('.pause-play5').css("border", "none");
    $('.pause-play6').css("border", "none");
    $('.pause-play7').css("border", "none");
    $('.pause-play8').css("border", "none");
    $('.pause-play9').css("border", "none");
    $('.pause-play10').css("border", "none");
    $('.pause-play11').css("border", "none");
    $('.play-pause5').css("border", "none");
    $('.play-pause6').css("border", "none");
    $('.play-pause7').css("border", "none");
    $('.play-pause8').css("border", "none");
    $('.play-pause9').css("border", "none");
    $('.play-pause10').css("border", "none");
    $('.play-pause11').css("border", "none");
    $('.play-pause12').css("border", "none");
}

function pauseAudioFourteen() {
    var myAudio = document.getElementById('audio14');
    myAudio.pause();
    $('.pause-play13').css("border-style", "solid");
    $('.pause-play13').css("border-width", "2px");
    $('.pause-play13').css("border-color", "yellow");
    $('.pause-play13').css("border-radius", "25px");
    $('.pause-play14').css("border", "none");
    $('.pause-play15').css("border", "none");
    $('.pause-play16').css("border", "none");
    $('.pause-play17').css("border", "none");
    $('.pause-play18').css("border", "none");
    $('.play-pause13').css("border", "none");
    $('.play-pause14').css("border", "none");
    $('.play-pause15').css("border", "none");
    $('.play-pause16').css("border", "none");
    $('.play-pause17').css("border", "none");
    $('.play-pause18').css("border", "none");
}

function pauseAudioFithteen() {
    var myAudio = document.getElementById('audio15');
    myAudio.pause();
    $('.pause-play14').css("border-style", "solid");
    $('.pause-play14').css("border-width", "2px");
    $('.pause-play14').css("border-color", "yellow");
    $('.pause-play14').css("border-radius", "25px");
    $('.pause-play13').css("border", "none");
    $('.pause-play15').css("border", "none");
    $('.pause-play16').css("border", "none");
    $('.pause-play17').css("border", "none");
    $('.pause-play18').css("border", "none");
    $('.play-pause13').css("border", "none");
    $('.play-pause14').css("border", "none");
    $('.play-pause15').css("border", "none");
    $('.play-pause16').css("border", "none");
    $('.play-pause17').css("border", "none");
    $('.play-pause18').css("border", "none");
}

function pauseAudioSixteen() {
    var myAudio = document.getElementById('audio16');
    myAudio.pause();
    $('.pause-play15').css("border-style", "solid");
    $('.pause-play15').css("border-width", "2px");
    $('.pause-play15').css("border-color", "yellow");
    $('.pause-play15').css("border-radius", "25px");
    $('.pause-play13').css("border", "none");
    $('.pause-play14').css("border", "none");
    $('.pause-play16').css("border", "none");
    $('.pause-play17').css("border", "none");
    $('.pause-play18').css("border", "none");
    $('.play-pause13').css("border", "none");
    $('.play-pause14').css("border", "none");
    $('.play-pause15').css("border", "none");
    $('.play-pause16').css("border", "none");
    $('.play-pause17').css("border", "none");
    $('.play-pause18').css("border", "none");
}

function pauseAudioSeventeen() {
    var myAudio = document.getElementById('audio17');
    myAudio.pause();
    $('.pause-play16').css("border-style", "solid");
    $('.pause-play16').css("border-width", "2px");
    $('.pause-play16').css("border-color", "yellow");
    $('.pause-play16').css("border-radius", "25px");
    $('.pause-play13').css("border", "none");
    $('.pause-play14').css("border", "none");
    $('.pause-play15').css("border", "none");
    $('.pause-play17').css("border", "none");
    $('.pause-play18').css("border", "none");
    $('.play-pause13').css("border", "none");
    $('.play-pause14').css("border", "none");
    $('.play-pause15').css("border", "none");
    $('.play-pause16').css("border", "none");
    $('.play-pause17').css("border", "none");
    $('.play-pause18').css("border", "none");
}

function pauseAudioEighteen() {
    var myAudio = document.getElementById('audio18');
    myAudio.pause();
    $('.pause-play17').css("border-style", "solid");
    $('.pause-play17').css("border-width", "2px");
    $('.pause-play17').css("border-color", "yellow");
    $('.pause-play17').css("border-radius", "25px");
    $('.pause-play13').css("border", "none");
    $('.pause-play14').css("border", "none");
    $('.pause-play15').css("border", "none");
    $('.pause-play16').css("border", "none");
    $('.pause-play18').css("border", "none");
    $('.play-pause13').css("border", "none");
    $('.play-pause14').css("border", "none");
    $('.play-pause15').css("border", "none");
    $('.play-pause16').css("border", "none");
    $('.play-pause17').css("border", "none");
    $('.play-pause18').css("border", "none");
}

function pauseAudioNineteen() {
    var myAudio = document.getElementById('audio19');
    myAudio.pause();
    $('.pause-play18').css("border-style", "solid");
    $('.pause-play18').css("border-width", "2px");
    $('.pause-play18').css("border-color", "yellow");
    $('.pause-play18').css("border-radius", "25px");
    $('.pause-play13').css("border", "none");
    $('.pause-play14').css("border", "none");
    $('.pause-play15').css("border", "none");
    $('.pause-play16').css("border", "none");
    $('.pause-play17').css("border", "none");
    $('.play-pause13').css("border", "none");
    $('.play-pause14').css("border", "none");
    $('.play-pause15').css("border", "none");
    $('.play-pause16').css("border", "none");
    $('.play-pause17').css("border", "none");
    $('.play-pause18').css("border", "none");
}

function pauseAudio20() {
    var myAudio = document.getElementById('audio20');
    myAudio.pause();
    $('.pause-play19').css("border-style", "solid");
    $('.pause-play19').css("border-width", "2px");
    $('.pause-play19').css("border-color", "yellow");
    $('.pause-play19').css("border-radius", "25px");
    $('.pause-play20').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play22').css("border", "none");
    $('.pause-play23').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none")
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function pauseAudio21() {
    var myAudio = document.getElementById('audio21');
    myAudio.pause();
    $('.pause-play20').css("border-style", "solid");
    $('.pause-play20').css("border-width", "2px");
    $('.pause-play20').css("border-color", "yellow");
    $('.pause-play20').css("border-radius", "25px");
    $('.pause-play19').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play22').css("border", "none");
    $('.pause-play23').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none")
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function pauseAudio22() {
    var myAudio = document.getElementById('audio22');
    myAudio.pause();
    $('.pause-play21').css("border-style", "solid");
    $('.pause-play21').css("border-width", "2px");
    $('.pause-play21').css("border-color", "yellow");
    $('.pause-play21').css("border-radius", "25px");
    $('.pause-play19').css("border", "none");
    $('.pause-play20').css("border", "none");
    $('.pause-play22').css("border", "none");
    $('.pause-play23').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none")
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function pauseAudio23() {
    var myAudio = document.getElementById('audio23');
    myAudio.pause();
    $('.pause-play22').css("border-style", "solid");
    $('.pause-play22').css("border-width", "2px");
    $('.pause-play22').css("border-color", "yellow");
    $('.pause-play22').css("border-radius", "25px");
    $('.pause-play19').css("border", "none");
    $('.pause-play20').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play23').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none")
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function pauseAudio24() {
    var myAudio = document.getElementById('audio24');
    myAudio.pause();
    $('.pause-play23').css("border-style", "solid");
    $('.pause-play23').css("border-width", "2px");
    $('.pause-play23').css("border-color", "yellow");
    $('.pause-play23').css("border-radius", "25px");
    $('.pause-play19').css("border", "none");
    $('.pause-play20').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play22').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none")
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function pauseAudio25() {
    var myAudio = document.getElementById('audio25');
    myAudio.pause();
    $('.pause-play24').css("border-style", "solid");
    $('.pause-play24').css("border-width", "2px");
    $('.pause-play24').css("border-color", "yellow");
    $('.pause-play24').css("border-radius", "25px");
    $('.pause-play19').css("border", "none");
    $('.pause-play20').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play22').css("border", "none");
    $('.pause-play23').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none")
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function pauseAudio26() {
    var myAudio = document.getElementById('audio26');
    myAudio.pause();
    $('.pause-play25').css("border-style", "solid");
    $('.pause-play25').css("border-width", "2px");
    $('.pause-play25').css("border-color", "yellow");
    $('.pause-play25').css("border-radius", "25px");
    $('.pause-play19').css("border", "none");
    $('.pause-play20').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play22').css("border", "none");
    $('.pause-play23').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play26').css("border", "none");
    $('.pause-play27').css("border", "none")
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function pauseAudio27() {
    var myAudio = document.getElementById('audio27');
    myAudio.pause();
    $('.pause-play26').css("border-style", "solid");
    $('.pause-play26').css("border-width", "2px");
    $('.pause-play26').css("border-color", "yellow");
    $('.pause-play26').css("border-radius", "25px");
    $('.pause-play19').css("border", "none");
    $('.pause-play20').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play22').css("border", "none");
    $('.pause-play23').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play27').css("border", "none")
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}

function pauseAudio28() {
    var myAudio = document.getElementById('audio28');
    myAudio.pause();
    $('.pause-play27').css("border-style", "solid");
    $('.pause-play27').css("border-width", "2px");
    $('.pause-play27').css("border-color", "yellow");
    $('.pause-play27').css("border-radius", "25px");
    $('.pause-play19').css("border", "none");
    $('.pause-play20').css("border", "none");
    $('.pause-play21').css("border", "none");
    $('.pause-play22').css("border", "none");
    $('.pause-play23').css("border", "none");
    $('.pause-play24').css("border", "none");
    $('.pause-play25').css("border", "none");
    $('.pause-play26').css("border", "none")
    $('.play-pause19').css("border", "none");
    $('.play-pause20').css("border", "none");
    $('.play-pause21').css("border", "none");
    $('.play-pause22').css("border", "none");
    $('.play-pause23').css("border", "none");
    $('.play-pause24').css("border", "none");
    $('.play-pause25').css("border", "none");
    $('.play-pause26').css("border", "none");
    $('.play-pause27').css("border", "none");
}
function pauseAudioXFiles() {
    var myAudio = document.getElementById("audio1");
    myAudio.pause();
    $('.pause-play4').css("border-style", "solid");
    $('.pause-play4').css("border-width", "2px");
    $('.pause-play4').css("border-color", "yellow");
    $('.pause-play4').css("border-radius", "25px");
    $('.play-pause4').css("border", "none");
}
!function(a,b,c){function d(b){this.settings=a.extend({},f,b),this._defaults=f,this._name=e,this.init()}var e="fatNav",f={};a.extend(d.prototype,{init:function(){var b=this,c=this.$nav=a(".fat-nav"),d=this.$hamburger=a('<a href="javascript:void(0)" class="hamburger"><div class="hamburger__icon"></div></a>');this._bodyOverflow=a("body").css("overflow"),navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&c.children().css({height:"110%",transform:"translateY(-5%)"}),a("body").append(d),a().add(d).add(c.find("a")).on("click",function(a){b.toggleNav()})},toggleNav:function(){var b=this;this.$nav.fadeToggle(400),b.toggleBodyOverflow(),a().add(this.$hamburger).add(this.$nav).toggleClass("active")},toggleBodyOverflow:function(){var b=this,c=a("body");c.toggleClass("no-scroll");var d=c.hasClass("no-scroll");c.width(c.width()),c.css("overflow",d?"hidden":b._bodyOverflow)}}),"undefined"==typeof a[e]&&(a[e]=function(a){return new d(this,a)})}(jQuery,window,document);

(function() {
    
    $.fatNav();
    
}());

if ($('.content1').is(':visible')) {
    $('.hamburger').css("display", "none");
}
$('html, body').animate({
    scrollTop: $("#loader1").offset().top -100
}, 1000);

$('#loader0').click(function() {
    $('#video-gallery').toggle();
});

$('#loader1').click(function() {
    $('#container-btn').toggle();
});

$('#loader2').click(function() {
    $('#img-gallery').toggle();
});
