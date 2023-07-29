let start;
let done = false;
const image = document.querySelector('img');

const step = (timestamp) => {
    if(start === undefined) {
        start = timestamp;
    }

    const elapsed = timestamp - start;
    // console.log(elapsed);

    if (elapsed > 10000) {
        done = true;
    }

    if (done) {
        return;
    }
    // console.log(elapsed);
    image.style.transform = `translateX(${elapsed / 20}px) rotate(${elapsed/10}deg)`;
    requestAnimationFrame(step);
}

requestAnimationFrame(step);