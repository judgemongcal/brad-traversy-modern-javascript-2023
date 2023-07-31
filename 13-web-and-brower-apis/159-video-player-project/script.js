const playBtn = document.querySelector('#play');
const stopBtn = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');
const video = document.querySelector('#video');

const playPause = () => {
 if(video.paused) {
        video.play();
        playBtn.querySelector('i.fa').classList.remove('fa-play');
        playBtn.querySelector('i.fa').classList.add('fa-pause');
    } else {
        video.pause();
        playBtn.querySelector('i.fa').classList.remove('fa-pause');
        playBtn.querySelector('i.fa').classList.add('fa-play');

    }
};

const stopVideo = () => {
    video.pause();
    video.currentTime = 0;
};

const updateTime = () => {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get mins
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    } 
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${minutes}:${secs}`;
};

const setProgress = () => {
    video.currentTime = (parseInt(progress.value) * video.duration) / 100;
}

video.addEventListener('click', playPause);
playBtn.addEventListener('click', playPause);
stopBtn.addEventListener('click', stopVideo);
video.addEventListener('timeupdate', updateTime);
progress.addEventListener('click', setProgress);
