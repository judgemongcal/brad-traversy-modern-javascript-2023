let intervalID;

function startChange() {
    if(!intervalID) {
        intervalID = setInterval(changeRandomColor, 1000);
        console.log('Hello');
    }
};

function changeRandomColor() {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomHex}`;
};

function stopChange() {
    clearInterval(intervalID);
    intervalID = undefined;
};



document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);