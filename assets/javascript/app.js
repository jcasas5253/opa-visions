console.log("created by Jacob Casas");

 

function toggleMusic() {

    var x = document.getElementById("playstation");

    if (x.style.display === "none") {

      x.style.display = "block";
      document.getElementById("noclassified").style.display = "none"
      document.getElementById("album-new").style.display = "initial";
      document.getElementById('x-files').style.display = "none";
      document.getElementById('albums').style.display = "none";
      document.getElementById('mixtape').style.display = "none";

    } else {

      x.style.display = "none";

    }

  }

  function xFiles() {
    document.getElementById('playstation1').style.display = "block";
    document.getElementById('x-files').style.display = "none";
    document.getElementById('noclassified').style.display = "none";
    document.getElementById('albums').style.display = "none";
    document.getElementById('mixtape').style.display = "none";
    document.getElementById("album-new").style.display = "initial";
  }

  function newAlbum() {
    document.getElementById('noclassified').style.display = "initial";
    document.getElementById('x-files').style.display = "initial";
    document.getElementById('mixtape').style.display = "initial";
    document.getElementById('albums').style.display = "block";
    document.getElementById('album-new').style.display = "none";
    document.getElementById('playstation').style.display = "none";
    document.getElementById('playstation1').style.display = "none";
  }

 

  function onlyPlayOneIn(container) {

    container.addEventListener("play", function(event) {

    audio_elements = container.getElementsByTagName("audio")

      for(i=0; i < audio_elements.length; i++) {

        audio_element = audio_elements[i];

        if (audio_element !== event.target) {

          audio_element.pause();

        }

      }

    }, true);

  }

 

  document.addEventListener("DOMContentLoaded", function() {

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

function pauseAudioXFiles() {

  var myAudio = document.getElementById("audio1");

  myAudio.pause();
  $('.pause-play4').css("border-style", "solid");
  $('.pause-play4').css("border-width", "2px");
  $('.pause-play4').css("border-color", "yellow");
  $('.pause-play4').css("border-radius", "25px");
  $('.play-pause4').css("border", "none");

}