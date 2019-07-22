body {

    background: url("../../assets/images/background.JPG") no-repeat center center fixed;

    -webkit-background-size: cover;

    -moz-background-size: cover;

    -o-background-size: cover;

    background-size: cover;

}

 

h2 {

    color: purple;

    font-size: 20px;

    font-weight: bold;

}

 

 

/*body {

 

      background: url("../../assets/images/background.JPG") no-repeat center center fixed;

 

      width: 100%;

 

      position: absolute;

 

      top: 0;

 

      left: 0;

 

  }*/

 

audio {

    outline: none !important;

}

 

/*.btn-container {

    background-color: rgba(255, 255, 255, 0.5);

    margin-left: 25%;

    width: 50%;

}*/

 

.navbar {

    padding-top: 0;

    padding-bottom: 0;

    background-color: rgba(255, 255, 255, 0.5) !important;

}

 

.nav-link:hover {

    color: red !important;

}

 

.nav-link {

    color: white !important;

}

.navbar-toggler {
    background-color: rgb(231, 111, 12) !important;
    outline: none !important;
}

 

.navbar-collapse {

    padding-left: 20px;

}

 

.logo {

    height: 60px;

    width: 60px;

    border-radius: .25rem;

}

 

p {

    margin-left: 25%;

    margin-bottom: 0;

    border-radius: .25rem;

    width: 50%;

    color: #ffffff;

}

 

.media-scroll {

    padding: 20px;

    height: 300px;

    overflow-y: scroll;

    width: 96%;

    height: 300px;

}

 

.media-container {

    background-color: rgba(255, 255, 255, 0.5) !important;

    width: 40%;

    height: 40%;

    border-radius: 20px;

    padding: 15px;

    text-align: center;

    margin-left: 30%;

}

 

.song-name {

    background: url("../../assets/images/purple.jpg") no-repeat center center fixed;

    -webkit-background-size: cover;

    -moz-background-size: cover;

    -o-background-size: cover;

    background-size: cover;

    width: 50%;

    height: 400px;

    margin-left: 25%;

    border-radius: .30rem;

    margin-top: 10%;

    padding: 15px;

}

 

.btn-container {

    text-align: center;

    width: 35%;

    margin-right: auto;

    margin-left: auto;

    background-color: rgba(255, 255, 255, 0.5);

    margin-top: 60px;
    margin-bottom: 60px;

    overflow-y: auto;

    height: 550px;

}

.btn-container1 {

    text-align: center;

    margin-top: 50px;

}

 

.music-btn,

.new-album {

    background: rgb(231, 111, 12);

    color: #fff;

    border: none;

    position: relative;

    height: 60px;

    font-size: 1.6em;

    padding: 0 2em;

    cursor: pointer;

    transition: 800ms ease all;

    outline: none !important;

    margin-bottom: 15px;

    width: 283px;

}

 

    .music-btn:hover {

        background: black;

        color: #fff;

    }

 

    .new-album:hover {

        background: black;

        color: #fff;

    }

 

    .music-btn:before,

    button:after {

        content: '';

        position: absolute;

        top: 0;

        right: 0;

        height: 2px;

        width: 0;

        background: yellow;

        transition: 400ms ease all;

    }

 

    .new-album:before,

    button:after {

        content: '';

        position: absolute;

        top: 0;

        right: 0;

        height: 2px;

        width: 0;

        background: yellow;

        transition: 400ms ease all;

    }

 

    .music-btn:after {

        right: inherit;

        top: inherit;

        left: 0;

        bottom: 0;

    }

 

    .new-album:after {

        right: inherit;

        top: inherit;

        left: 0;

        bottom: 0;

    }

 

    .music-btn:hover:before,

    button:hover:after {

        width: 100%;

        transition: 800ms ease all;

    }

 

    .new-album:hover:before,

    button:hover:after {

        width: 100%;

        transition: 800ms ease all;

    }

 

.btn-primary {

    border-radius: 30px;

    background-color: rgb(231, 111, 12) !important;

    outline: purple !important;

    border-color: purple !important;

}

 

.play-pause:hover,

.play-pause1:hover,

.play-pause2:hover,

.play-pause3:hover,

.play-pause4:hover {

    opacity: 1 !important;

}

 

.pause-play:hover,

.pause-play1:hover,

.pause-play2:hover,

.pause-play3:hover,

.pause-play4:hover {

    opacity: 1 !important;

}

 

.title {

    text-align: center;

}

 

@media only screen and (max-width: 760px) {

    .media-container,

    h2,

    .song-name {

        width: 100%;

        margin-left: 0;

    }

 

    .media-scroll {

        height: 200px;

    }

    #playstation, #playstation1,

    #playstation2, #playstation3 {

        width: 102% !important;

    }

}

 

@media only screen and (max-width: 1169) {

 

}

 

@media only screen and (max-width: 992px) {

    .btn-container {

        width: 100% !important;

        margin-left: 0;

    }

    #album-container {

        padding-right: 0 !important;

        padding-left: 0 !important;

    }

}

 

@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700);

 

* {

    margin: 0px;

    padding: 0px;

    outline: none;

}

 

html {

    height: 100%

}

 

#playstation,

#playstation1,

#playstation2,
#playstation3 {

    background: rgba(255, 255, 255, 0.5);

    border-radius: 20px;

    width: 400px;

    border: 1px solid #c1c1c1;

    overflow: auto;

    margin: 5px auto;

}

 

#controlpanel {

    padding: 50px 25px 15px;

    overflow: auto;

    position: relative;

}

 

#songpro {

    width: 180px;

    height: 180px;

    border-radius: 50%;

    border: 1px solid #eaeaea;

    position: relative;

    margin: 0 0px 0px 23px;

    background: url("https://i1.sndcdn.com/artworks-000320657727-b9lykq-t500x500.jpg") no-repeat 0 0;

    background-size: 220px 220px;

    box-shadow: inset 0px 0px 10px 2px #5f5f5f;

}

 

#songpro1 {

    width: 180px;

    height: 180px;

    border-radius: 50%;

    border: 1px solid #eaeaea;

    position: relative;

    margin: 0 0px 0px 23px;

    background: url("https://i1.sndcdn.com/artworks-000523144152-4b2o1q-t500x500.jpg") no-repeat 0 0;

    background-size: 220px 220px;

    box-shadow: inset 0px 0px 10px 2px #5f5f5f;

}

 

#songpro2 {

    width: 180px;

    height: 180px;

    border-radius: 50%;

    border: 1px solid #eaeaea;

    position: relative;

    margin: 0 0px 0px 23px;

    background: url("../../assets/images/mixtape.jpg") no-repeat 0 0;

    background-size: 220px 220px;

    box-shadow: inset 0px 0px 10px 2px #5f5f5f;

}

#songpro3 {

    width: 180px;

    height: 180px;

    border-radius: 50%;

    border: 1px solid #eaeaea;

    position: relative;

    margin: 0 0px 0px 23px;

    background: url("https://i1.sndcdn.com/artworks-000212103491-o2q31j-t500x500.jpg") no-repeat 0 0;

    background-size: 179px 220px;

    box-shadow: inset 0px 0px 10px 2px #5f5f5f;

}

 

#backward,

#forward {

    content: "fa-backward";

    width: 60px;

    height: 60px;

    border-radius: 50%;

    margin-top: 67px;

    border: 1px solid #eaeaea;

    background: #f7f7f7;

    box-shadow: 0px 0px 5px #e9e9e9, inset 0px 2px 0px #fdfdfd;

    cursor: pointer;

    -webkit-transition: 0.2s;

    -o-transition: 0.2s;

    -ms-transition: 0.2s;

    -moz-transition: 0.2s;

    transition: 0.2s;

}

 

#backward {

    float: left;

}

 

#forward {

    float: right;

}

 

    #backward:hover,

    #forward:hover {

        box-shadow: 0px 0px 0px #cacaca, inset 0px 2px 0px #fdfdfd;

        -webkit-transition: 0.2s;

        -o-transition: 0.2s;

        -ms-transition: 0.2s;

        -moz-transition: 0.2s;

        transition: 0.2s;

    }

 

        #backward:hover .fa {

            text-shadow: 0px 2px 0px #cacaca;

            -webkit-transition: 0.2s;

            -o-transition: 0.2s;

            -ms-transition: 0.2s;

            -moz-transition: 0.2s;

            transition: 0.2s;

        }

 

        #forward:hover .fa {

            text-shadow: 0px 2px 0px #cacaca;

            -webkit-transition: 0.2s;

            -o-transition: 0.2s;

            -ms-transition: 0.2s;

            -moz-transition: 0.2s;

            transition: 0.2s;

        }

 

.fa {

    -webkit-transition: 0.2s;

    -o-transition: 0.2s;

    -ms-transition: 0.2s;

    -moz-transition: 0.2s;

    transition: 0.2s;

}

 

#backward .fa,

#forward .fa {

    margin: 19px 0px 0px 22px;

}

 

#backward .fa {

    margin: 19px 0px 0px 16px;

}

 

.inlineblo {

    display: inline-block;

}

 

.fa {

    color: #666666;

    font-size: 1.5em;

}

 

h1,

h2 {

    text-align: center;

    font-weight: normal;

    padding: 5px 15px 5px 15px;

    font-size: 1.8em;

}

 

h2 {

    font-size: 1.5em;

    padding: 0px 15px 5px 15px;

}

 

ol {

    padding: 0px 0px 15px 0px;

    counter-reset: section;

    overflow-y: auto;

    height: 300px;

}

 

    ol li {

        list-style-type: none;

        padding: 15px 25px 15px 15px;

        border-bottom: 1px solid #cccccc;

        border-top: 1px solid #ffffff;

        font-size: 16px;

        color: red;

        font-weight: bold;

        cursor: pointer;

        -webkit-transition: 0.2s;

        -o-transition: 0.2s;

        -ms-transition: 0.2s;

        -moz-transition: 0.2s;

        transition: 0.2s;

    }

 

.title:hover {

    background: black;

    text-shadow: 0px 2px 0px purple;

    -webkit-transition: 0.2s;

    -o-transition: 0.2s;

    -ms-transition: 0.2s;

    -moz-transition: 0.2s;

    transition: 0.2s;

}

 

ol li:first-child {

    border-top: none;

}

 

ol li:last-child {

    border-bottom: none;

}

 

.time {

    float: right;

    color: #999999;

}

 

.textalign {

    text-align: left !important;

}

 

 

/* Progress bar css */

 

progress[value] {

    width: 100%;

    height: 12px;

    -webkit-appearance: none;

    appearance: none;

    border: 0px solid #000;

    margin-bottom: 1px;

}

 

    progress[value]::-webkit-progress-bar {

        background-color: #eee;

        border-radius: 0px;

        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2) inset;

    }

 

    progress[value]::-webkit-progress-value {

        background: #ffaa00;

        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2) inset;

    }

 

 

/* CSS3 Counter */

 

.flip-card {

    background-color: transparent;

    width: 300px;

    height: 300px;

    perspective: 1000px;

    margin-right: auto;

    margin-left: auto;

}

 

.flip-card-inner {

    position: relative;

    width: 100%;

    height: 100%;

    text-align: center;

    transition: transform 0.6s;

    transform-style: preserve-3d;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

}

 

.flip-card:hover .flip-card-inner, .flip-card:active {

    transform: rotateY(180deg);

}


.flip-card-front, .flip-card-back {

    position: absolute;

    width: 100%;

    height: 100%;

    backface-visibility: hidden;

}

 

.flip-card-front {

    background-color: #bbb;

    color: black;

}

 

.flip-card-back {

    background-color: black;

    color: white;

    transform: rotateY(180deg);

}

 

.btn-container::-webkit-scrollbar {

    width: 10px;

    /*background-color: #fbfbfb; */

}

 

.btn-container::-webkit-scrollbar-track {

    box-shadow: inset 0 0 1px grey;

    background-color: black;

    border-radius: 4px;

}

 

.btn-container::-webkit-scrollbar-thumb {

    border-radius: 4px;

    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.5);

    background-color: rgb(231, 111, 12);

    height: 50%;

}

