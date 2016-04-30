// ==UserScript==
// @name          Apple Daily HTML5 video
// @namespace     http://soem
// @description   Apple Daily HTML5 video
// @match         http://www.appledaily.com.tw/appledaily/article/*
// @match         http://*.appledaily.com.tw/realtimenews/article/*
// @match         http://www.appledaily.com.tw/animation/appledaily/*
// @match         http://www.appledaily.com.tw/column/infographicarticle/*
// @grant         none
// ==/UserScript==

var video_div, flash_script;
if ( document.location.href.indexOf('appledaily/article') > -1 ) {
    video_div = document.getElementsByClassName('mediabox')[0];
    flash_script = video_div.getElementsByTagName('script')[0].firstChild;
} else if ( document.location.href.indexOf('infographicarticle') > -1 ) {
    video_div = document.getElementsByClassName('mediabox')[0];
    flash_script = document.getElementById('videobox').getElementsByTagName('script')[2].firstChild;
} else {
    video_div = document.getElementById('playerVideo');
    flash_script = video_div.getElementsByTagName('script')[0].firstChild;
}
var video_src = flash_script.wholeText.match(/http.*mp4/g)[0];


while (video_div.hasChildNodes()) {
    video_div.removeChild(video_div.firstChild);
}

video = document.createElement("video");
video_div.appendChild(video);

video.src = video_src;
video.autoPlay = false;
video.type = "video/mp4";
video.preload = true;
video.controls = true;