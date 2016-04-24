'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toolbar;
function toolbar() {
  var color = arguments.length <= 0 || arguments[0] === undefined ? 'rgba(74, 195, 184, 0.62)' : arguments[0];
  var location = arguments.length <= 1 || arguments[1] === undefined ? 'top' : arguments[1];
  var buttons = arguments.length <= 2 || arguments[2] === undefined ? [{
    label: 'goodbye, toolbar!',
    click: function click(event) {
      console.log('Clicked on the button ' + this.label + '. And the event ' + event + '.');
    }
  }] : arguments[2];


  var toolbar = document.createElement('toolbar');

  styleToolbar(toolbar);

  setLocation(location);

  createButtons(buttons);

  document.body.appendChild(toolbar);
}

function styleToolbar(toolbar) {
  toolbar.style.position = 'fixed';
  toolbar.style.margin = '0';
  toolbar.style.padding = '12px';
  toolbar.style.boxShadow = '0 2px 1px rgba(0, 0, 0, 0.125)';
  toolbar.style.backgroundColor = color;
}

function setLocation(location) {
  switch (location) {
    case 'top':
      toolbar.style.top = '0';
      toolbar.style.left = '0';
      toolbar.style.width = '100%';
      break;
    case 'bottom':
      break;
  }
}

function createButtons(buttons) {
  buttons.forEach(function (button) {
    var btnNode = document.createElement('button');
    btnNode.textContent = button.label;
    btnNode.onclick = function (event) {
      return button.click;
    };
    toolbar.appendChild(btnNode);
  });
}