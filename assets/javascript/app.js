console.log("created by Jacob Casas");

 

function toggleMusic() {

    var x = document.getElementById("content-container");

    if (x.style.display === "none") {

      x.style.display = "block";

    } else {

      x.style.display = "none";

    }

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

}

 

function pauseAudio() {

    var myAudio = document.getElementById("audio2");

    myAudio.pause();
    $('.pause-play').css("border-style", "solid");
    $('.pause-play').css("border-width", "2px");
    $('.pause-play').css("border-color", "yellow");
    $('.pause-play').css("border-radius", "25px");
    $('.play-pause').css("border", "none");

}