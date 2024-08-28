let speech = new SpeechSynthesisUtterance();

let voice = [];
let voiceSelect = document.getElementById("select");

window.speechSynthesis.onvoiceschanged = () => {
  voice = window.speechSynthesis.getVoices();
  speech.voice = voice[0];
  voice.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};
voiceSelect.addEventListener("change", () => {
  speech.voice = voice[voiceSelect.value];
});
function generate() {
  const textArea = document.getElementById("textArea");
  speech.text = textArea.value;

  window.speechSynthesis.speak(speech);
}
