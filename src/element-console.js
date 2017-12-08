export default class ElementConsole {
  constructor(eleSelector) {
    this._ele = document.querySelector(eleSelector);
  }

  logMessage(message) {
    let ele = document.createElement('div');
    ele.textContent = message;
    this._ele.appendChild(ele);
  }

  show() {
    this._ele.style.display = 'block';
  }

  hide() {
    this._ele.style.display = 'none';
  }

}
