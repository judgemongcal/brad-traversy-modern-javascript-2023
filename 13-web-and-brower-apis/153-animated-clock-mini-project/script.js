const clock = () => {
    const now = new Date();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Setup Canvas

    ctx.save(); // save the default state
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250);  // put 0,0 in the middle of the canvas 
    ctx.rotate(-Math.PI / 2); // rotate clock -90deg

    // Set default styles
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#f4f4f4';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    // Draw Clock face/border

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#800000';
    ctx.arc(0,0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    // Draw hour lines
    ctx.save();
    for (let x = 0; x < 12; x++){
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100,0);
        ctx.lineTo(120,0);
        ctx.stroke();
    }
    
    ctx.restore();

    // Draw minute lines
    ctx.save();
    ctx.lineWidth = 3;
    for (let x = 0; x < 60; x++){
        if(x % 5 != 0){
            ctx.beginPath();
            
            ctx.moveTo(116,0);
            ctx.lineTo(120,0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30);
    }
    
    ctx.restore();

    // Get current Time

    const hr = now.getHours() % 12;
    const mins = now.getMinutes();
    const sec = now.getSeconds();

    console.log(`${hr} : ${mins} : ${sec}`);

    // Draw Hour Hands
    ctx.save();

    ctx.rotate((Math.PI/ 6) * hr + (Math.PI / 360) * mins + (Math.PI / 21600) * sec);
    ctx.strokeStyle = '#800000';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();

    ctx.restore();

    // Draw Minute Hands
    ctx.save();

    ctx.rotate((Math.PI/ 30) * mins + (Math.PI / 1800) / sec);
    ctx.strokeStyle = '#800000';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();

    ctx.restore();

     // Draw Second Hands
     ctx.save();

     ctx.rotate((sec* Math.PI/ 30));
     ctx.strokeStyle = '#ff7f50';
     ctx.fillStyle = '#ff7f50';
     ctx.lineWidth = 6;
     ctx.beginPath();
     ctx.moveTo(-30, 0);
     ctx.lineTo(100, 0);
     ctx.stroke();
     ctx.beginPath();
     ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
     ctx.fill(); 
     ctx.restore();

    ctx.restore(); // restore the default state

    requestAnimationFrame(clock);
};

clock();

requestAnimationFrame(clock);