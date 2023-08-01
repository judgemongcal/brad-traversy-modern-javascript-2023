const voiceSelect = document.getElementById('voice-select');
const synth = window.speechSynthesis;
let voices;


function addVoices() {
    voices = synth.getVoices();
    for(let x = 0; x < voices.length; x++) {
        const option = document.createElement('option');
        option.textContent = `${voices[x].name} - ${voices[x].lang}`;

        if (voices[x].default) {
            option.textContent += ' (Default)';
        }

        option.setAttribute('data-lang', voices[x].lang);
        option.setAttribute('data-name', voices[x].name);
        voiceSelect.appendChild(option);
    }
};

const onSubmit = (e) => {
    e.preventDefault();
    
    const text = document.getElementById('text-input');
    const utterThis = new SpeechSynthesisUtterance(text.value);

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for(let x = 0; x < voices.length; x++) {
        if (voices[x].name === selectedOption) {
            utterThis.voice = voices[x];
        }
    }

    synth.speak(utterThis);
}

addVoices();
if(speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = addVoices;
} 
document.getElementById('form').addEventListener('submit', onSubmit);