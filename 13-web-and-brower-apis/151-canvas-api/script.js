const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

// Draw Rectangle
ctx.fillStyle = 'yellow';
ctx.fillRect(10, 10, 150, 100);

// Draw Circle
ctx.fillStyle = 'blue';
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// Draw Lines

ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw Text

ctx.font = '30px Arial';
ctx.lineWidth = '1.5';
ctx.fillStyle = 'green';
ctx.fillText('Hello World', 300, 100, 300);
ctx.strokeText('Hello World', 300, 500, 300);

// Draw Image

const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', () => ctx.drawImage(image, 250, 250, 100, 100));