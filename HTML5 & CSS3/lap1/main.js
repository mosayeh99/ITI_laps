// ---------------------------Change color of paragraph-----------------------------
let redRange = document.querySelector('form .red-range');
let greenRange = document.querySelector('form .green-range');
let blueRange = document.querySelector('form .blue-range');
let coloredP = document.querySelector('form .colored-p');

let redValue = 0;
function redRangeValue(red) {
    redValue = red;
}

let greenValue = 0;
function greenRangeValue(green) {
    greenValue = green;
}

let blueValue = 0;
function blueRangeValue(blue) {
    blueValue = blue;
}

function changeColor() {
    coloredP.style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

redRange.addEventListener('input', changeColor);
greenRange.addEventListener('input', changeColor);
blueRange.addEventListener('input', changeColor);

// --------------------Video controls--------------------------
let video = document.querySelector('.video-sec video');
let videoRange = document.querySelector('.video-duration .video-range');
let fullTimeVideo = document.querySelector('.video-sec .video-full-time');
let liveTimeVideo = document.querySelector('.video-sec .video-live-time');

function videoTimeRange() {
    video.pause();
    video.currentTime = videoRange.value;
    video.play();
}

setInterval(() => {
    videoRange.value = video.currentTime;
    if (video.currentTime == 0) {
        liveTimeVideo.textContent = '00:00';
    } else {
        let timeMM = Math.trunc(video.currentTime / 60);
        let timeSS = Math.trunc(video.currentTime % 60);
        let liveVideoMM = timeMM < 10 ? `0${timeMM}` : timeMM;
        let liveVideoSS = timeSS < 10 ? `0${timeSS}` : timeSS;
        liveTimeVideo.textContent = `${liveVideoMM}:${liveVideoSS}`;
    }
}, 1000);

video.onloadedmetadata = function() {
    videoRange.max = video.duration;
    let timeMM = Math.trunc(video.duration / 60);
    let timeSS = Math.trunc(video.duration % 60);
    let VideoMM = timeMM < 10 ? `0${timeMM}` : timeMM;
    let VideoSS = timeSS < 10 ? `0${timeSS}` : timeSS;
    fullTimeVideo.textContent = `${VideoMM}:${VideoSS}`;
};

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function videoStart() {
    video.currentTime = 0;
    video.play();
}

function next5seconds() {
    video.currentTime += 5;
}

function previous5seconds() {
    video.currentTime -= 5;
}

function videoEnd() {
    video.currentTime = video.duration;
}

function muteVideo() {
    video.muted = true;
}

function unmuteVideo() {
    video.muted = false;
}

function volumeVideo(volumeValue) {
    video.volume = volumeValue;
}

function speedVideo(speedValue) {
    video.playbackRate = speedValue;
}

// ------------------------canva section---------------------
let mycanvas =  document.getElementById("canv");
let counter = 0;

let aninmateCanvas;
mycanvas.onclick = () => {
    aninmateCanvas = setInterval(moveCanvas, 100);
}


function moveCanvas() {
    if (counter == 350) {
        clearInterval(aninmateCanvas);
        alert('Animation Ended!')
    } else {
        counter += 10;
        let ctx = mycanvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(counter,counter);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();
    }
}
