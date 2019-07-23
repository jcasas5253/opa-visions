console.log("created by Jacob Casas");

$('#audio1').on('timeupdate', function() {
  $('#seekbar').attr("value", this.currentTime / this.duration);
})

$('#audio2').on('timeupdate', function() {
  $('#seekbar2').attr("value", this.currentTime / this.duration);
})

$('#audio3').on('timeupdate', function() {
  $('#seekbar2').attr("value", this.currentTime / this.duration);
})

$('#audio4').on('timeupdate', function() {
  $('#seekbar2').attr("value", this.currentTime / this.duration);
})

$('#audio5').on('timeupdate', function() {
  $('#seekbar2').attr("value", this.currentTime / this.duration);
})

$('#audio6').on('timeupdate', function() {
  $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio7').on('timeupdate', function() {
  $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio8').on('timeupdate', function() {
  $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio9').on('timeupdate', function() {
  $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio10').on('timeupdate', function() {
  $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio11').on('timeupdate', function() {
  $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio12').on('timeupdate', function() {
  $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio13').on('timeupdate', function() {
  $('#seekbar3').attr("value", this.currentTime / this.duration);
})

$('#audio14').on('timeupdate', function() {
  $('#seekbar4').attr("value", this.currentTime / this.duration);
})

$('#audio15').on('timeupdate', function() {
  $('#seekbar4').attr("value", this.currentTime / this.duration);
})

$('#audio16').on('timeupdate', function() {
  $('#seekbar4').attr("value", this.currentTime / this.duration);
})

$('#audio17').on('timeupdate', function() {
  $('#seekbar4').attr("value", this.currentTime / this.duration);
})

$('#audio18').on('timeupdate', function() {
  $('#seekbar4').attr("value", this.currentTime / this.duration);
})

$('#audio19').on('timeupdate', function() {
  $('#seekbar4').attr("value", this.currentTime / this.duration);
})


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

    $('#checkbox-one').click(function () {
       // if ($(this).is(":checked")) {
           // $('.flip-card1 .flip-card-inner1').css("transform", "rotateY(180deg)");
           xFiles();
       // }
        //else if (!$('#checkbox-one').is(":checked")) {
           // $('.flip-card1 .flip-card-inner1').css("transform", "rotateY(360deg)")
        //}
    })

$('#checkbox-two').click(function () {
    //if ($(this).is(":checked")) {
        //$('.flip-card2 .flip-card-inner2').css("transform", "rotateY(180deg)");
        toggleMusic();
   // }
   // else if (!$('#checkbox-one').is(":checked")) {
       // $('.flip-card2 .flip-card-inner2').css("transform", "rotateY(360deg)")
    //}
})

$('#checkbox-three').click(function () {
   // if ($(this).is(":checked")) {
       // $('.flip-card3 .flip-card-inner3').css("transform", "rotateY(180deg)");
        mixTape();
    //}
   // else if (!$('#checkbox-one').is(":checked")) {
        //$('.flip-card3 .flip-card-inner3').css("transform", "rotateY(360deg)")
   // }
})

$('#checkbox-four').click(function () {
    //if ($(this).is(":checked")) {
     //   $('.flip-card4 .flip-card-inner4').css("transform", "rotateY(180deg)");
        minuteMaid();
   // }
   // else if (!$('#checkbox-one').is(":checked")) {
       // $('.flip-card4 .flip-card-inner4').css("transform", "rotateY(360deg)")
   // }
})

if ("ontouchstart" in document.documentElement) {
    console.log("your device is a touch screen device.");
    $('.music-btn').css("margin-top", "0")
    $('.music-btn').css("height", "100%");
    $('.music-btn').css("width", "100%");
}
else {
    
}


function toggleMusic() {

 

    var x = document.getElementById("playstation");

 

    if (x.style.display === "none") {

 

        x.style.display = "block";

        document.getElementById("container-btn").style.display = "none";

        document.getElementById("album-new").style.display = "initial";

 

    } else {

 

        x.style.display = "none";

 

    }

 

}

function card() {
  $('.flip-card').css("trasform", "rotateY(180deg)");
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

    document.getElementById('playstation').style.display = "none";

    document.getElementById('playstation1').style.display = "none";

    document.getElementById('playstation2').style.display = "none";
    
    document.getElementById('playstation3').style.display = "none";

}

 

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

 

// Play / Stop Audio

 

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

 

function playAudioXFiles() {

 

    var myAudio = document.getElementById("audio1");

 

    myAudio.play();

    $('.play-pause4').css("border-style", "solid");

    $('.play-pause4').css("border-width", "2px");

    $('.play-pause4').css("border-color", "yellow");

    $('.play-pause4').css("border-radius", "25px");

    $('.pause-play4').css("border", "none");

 

}

 

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

 

function pauseAudioXFiles() {

 

    var myAudio = document.getElementById("audio1");

 

    myAudio.pause();

    $('.pause-play4').css("border-style", "solid");

    $('.pause-play4').css("border-width", "2px");

    $('.pause-play4').css("border-color", "yellow");

    $('.pause-play4').css("border-radius", "25px");

    $('.play-pause4').css("border", "none");

 

}
