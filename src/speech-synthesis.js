
let voiceMap = [];
function loadVoices() {
  let voices = window.speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
    let voice = voices[i];
    voiceMap[voice.name] = voice;
  };
};

window.speechSynthesis.onvoiceschanged = function (e) {
  loadVoices();
};

export default class SpeechSynthesis {
  constructor(voice) {
    this._voice = voice;
  }

  speak(message) {
    console.log(message)
    if (!message || 'string' !== typeof message || '' === message.trim()) {
      return;
    }

    let msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.voice = voiceMap[this._voice];
    msg.rate = 1;
    msg.Pitch = 0.5;
    msg.text = message;
    window.speechSynthesis.speak(msg);
  }
}
