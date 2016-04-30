// ==UserScript==
// @name          Apple Daily HTML5 video HK
// @namespace     https://github.com/soem/greasemonkey-scripts
// @description   Apple Daily HTML5 video HK
// @match         http://hk.apple.nextmedia.com/realtime/*
// @match         http://hk.apple.nextmedia.com/enews/realtime/*
// @grant         none
// ==/UserScript==

var video_div, flash_script, parrent_div;
if ( document.location.href == '' ) {
    // need something for http://hk.dv.nextmedia.com/actionnews/
} else {
    video_div = document.getElementById('video_player');
    flash_script = video_div.getElementsByTagName('script')[0].firstChild;
    parrent_div = document.getElementById('InSkinContainer_myInSkin1')
}
var video_src = flash_script.wholeText.match(/http.*mp4/g)[0];

video = document.createElement("video");
video.src = video_src;
video.autoPlay = false;
video.type = "video/mp4";
video.preload = true;
video.controls = true;
if (parrent_div) {
    video.height = parseInt(parrent_div.style.height);
    video.width = parseInt(parrent_div.style.width);
}

while (video_div.hasChildNodes()) {
    video_div.removeChild(video_div.firstChild);
}
video_div.appendChild(video);
