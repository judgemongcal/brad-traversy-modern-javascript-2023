const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {
    const acceptedColor = [
        'red', 'blue', 'orange', 'white', 'black', 'green', 'purple'
    ];

    for(let x = e.resultIndex; x < e.results.length; x++){
        const script = e.results[x][0].transcript.toLowerCase().trim();


        if(acceptedColor.includes(script)) {
            document.body.style.backgroundColor = script;
        } else {
            alert('Please say a color');
        }
    }
}

rec.start();