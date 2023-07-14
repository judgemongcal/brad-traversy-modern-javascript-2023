let intervalID;

const startChange = () => {
    if(!intervalID) {
        intervalID = setInterval(changeRandomColor, 1000);
    }
};

const changeRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomHex}`;
};

const stopChange = () => {
    clearInterval(intervalID);
};

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);