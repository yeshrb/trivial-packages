'use strict';

module.exports = isEven;
const isOdd = require('@reulav-cli/tools');
function isEven() {
    console.log(isOdd());
    return "Hello from isEven";
}
