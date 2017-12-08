import ElementConsole from './element-console';
import SpeechRecognition from './speech-recognition';
import SpeechSynthesis from './speech-synthesis';

const eventConsole = new ElementConsole('#events-cont');
const utteranceConsole = new ElementConsole('#utterance-cont');

const speechSynthesis = new SpeechSynthesis('Google UK English Male');
const speechRecognition = new SpeechRecognition(function (eventName, event) {
  eventConsole.logMessage(eventName);
  switch (eventName) {
    case 'onresult':
      let text = event.results[0][0].transcript;
      console.log(text);
      handleText(text);
      break;
  }
});
console.log('xxx4')
speechRecognition.start();

const commands = {
  'test': function() {
    speechSynthesis.speak('It works.');
  },
  'hello': function() {
    speechSynthesis.speak('Hi');
  },
  'hi': function() {
    speechSynthesis.speak('Hi');
  },
  'what\'s your name': function() {
    speechSynthesis.speak('I\'m Velizar');
  },
  'show console window': function() {
    eventConsole.show();
    utteranceConsole.show();
  },
  'hide console window': function() {
    eventConsole.hide();
    utteranceConsole.hide();
  }
};

function handleText(text) {
  var trigger = 'Jarvis';
  if (!text.startsWith(trigger)) {
    return;
  }

  text = text.substring(trigger.length).trim();

  utteranceConsole.logMessage(text);
  if (commands[text]) {
    commands[text]();
  } else {
    speechSynthesis.speak('I don\'t know that x.');
  }
}
