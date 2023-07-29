const audio = document.getElementById('audio');
const playBTN = document.getElementById('play');
const pauseBTN = document.getElementById('pause');
const stopBTN = document.getElementById('stop');
const currTime = document.getElementById('current-time');
const volume = document.getElementById('volume');

playBTN.addEventListener('click', () => audio.play());
pauseBTN.addEventListener('click', () => audio.pause());
stopBTN.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

audio.addEventListener('timeupdate', () => {
    currTime.innerText = audio.currentTime;
})

volume.addEventListener('change', () => {audio.volume = volume.value});