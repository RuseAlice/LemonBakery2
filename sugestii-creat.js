var sound      = document.createElement('audio');
sound.id       = 'audio-player';
sound.controls = 'controls';
sound.src      = 'muzica.mp3';
sound.type     = 'audio/mpeg';
document.getElementsByClassName("obiect-grid")[0].appendChild(sound);

var video = document.createElement("iframe");
video.src="https://www.youtube.com/embed/dSVqf8hTD9o";
video.style.height="315";
video.style.width="560";
document.getElementsByClassName("obiect-grid")[0].appendChild(video);

