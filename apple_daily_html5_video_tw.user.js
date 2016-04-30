// ==UserScript==
// @name          Apple Daily HTML5 video TW
// @namespace     https://github.com/soem/greasemonkey-scripts
// @description   Apple Daily HTML5 video TW
// @match         http://www.appledaily.com.tw/appledaily/article/*
// @match         http://*.appledaily.com.tw/realtimenews/article/*
// @match         http://www.appledaily.com.tw/animation/appledaily/*
// @match         http://www.appledaily.com.tw/column/infographicarticle/*
// @grant         none
// ==/UserScript==

var url = document.location.href;
var selector;
if (url.indexOf('appledaily/article') > -1 ) {
  selector = '.mediabox > script';
} else if (url.indexOf('infographicarticle') > -1 ) {
  selector = '#videobox > script:nth-of-type(3)';
} else {
  selector = '#playerVideo > script';
}

var flashScript = document.querySelector(selector);
if (flashScript) {
  var videoSrc = flashScript.innerHTML.match(/http.*mp4/)[0];
  var video = document.createElement("video");
  video.src = videoSrc;
  video.autoPlay = false;
  video.type = "video/mp4";
  video.preload = true;
  video.controls = true;

  var videoDiv = flashScript.parentNode;
  while (videoDiv.hasChildNodes()) {
    videoDiv.removeChild(videoDiv.firstChild);
  }
  videoDiv.appendChild(video);
}
