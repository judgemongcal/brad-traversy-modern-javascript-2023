const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const currentTime = document.getElementById('current-time');

playBtn.addEventListener('click', () => video.play());
pauseBtn.addEventListener('click', () => video.pause());
stopBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
})
video.addEventListener('timeupdate', (e) => {
currentTime.innerText = video.currentTime;
})