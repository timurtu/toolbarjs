'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var toolbar = function toolbar() {
    var location = arguments.length <= 0 || arguments[0] === undefined ? 'top' : arguments[0];
    var width = arguments.length <= 1 || arguments[1] === undefined ? '20px' : arguments[1];
    var buttons = arguments.length <= 2 || arguments[2] === undefined ? ['hello, toolbar!'] : arguments[2];
    var stretch = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

    _classCallCheck(this, toolbar);

    console.log(location);
};

exports.default = toolbar;