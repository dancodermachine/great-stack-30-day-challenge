// SpeechSynthesisUtterance contains the content the speech service should read and information about how to read it (e.g., language, pitch and volume.)
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select")

// The list of voices provided by the browser (speechSynthesis.getVoices()) isn't always available immediately when the page loads. The onvoiceschanged event lets you detect when those voices are actually loaded and ready to be used.
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]
    // Creates a new <option> element using the voice's name as the label, and the index as the value.
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});