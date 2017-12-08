export default class SpeechRecognition {
  constructor(eventHandle) {
    this._recognition = new (webkitSpeechRecognition || SpeechRecognition)();
    this._recognition.lang = 'en-US';
    this._recognition.interimResults = false;
    this._recognition.maxAlternatives = 3;

    this._registerEventHandler(eventHandle);
  }

  _registerEventHandler(eventHandle) {
    [
      'onaudiostart',
      'onaudioend',
      'onend',
      'onerror',
      'onnomatch',
      'onresult',
      'onsoundstart',
      'onsoundend',
      'onspeechend',
      'onstart'
    ].forEach((eventName) => {
      this._recognition[eventName] = (e) => {
        eventHandle(eventName, e);
        if ('onend' === eventName) {
          this._recognition.start();
        }
      };
    });
  }

  start() {
    this._recognition.start();
  }

}
