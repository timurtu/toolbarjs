'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toolbar;
function toolbar() {
    var location = arguments.length <= 0 || arguments[0] === undefined ? 'top' : arguments[0];
    var width = arguments.length <= 1 || arguments[1] === undefined ? '20px' : arguments[1];
    var buttons = arguments.length <= 2 || arguments[2] === undefined ? ['hello, toolbar!'] : arguments[2];

    var toolbar = document.createElement('toolbar');

    toolbar.style.position = 'fixed';
    // Set location
    if (location == 'top') {

        styleTop();
    } else if (location == 'bottom') {}

    function styleTop() {
        toolbar.style.top = '0';
        toolbar.style.width = '100%';
        toolbar.style.height = '20px';
        toolbar.style.backgroundColor = 'red';
    }

    document.body.appendChild(toolbar);
}