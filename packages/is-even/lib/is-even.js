'use strict';

module.exports = isEven;
const isOdd = require('@reulav-cli/is-odd');
function isEven() {
    console.log(isOdd());
    return "Hello from isEven";
}
