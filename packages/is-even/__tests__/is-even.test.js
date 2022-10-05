'use strict';

const isEven = require('..');
const assert = require('assert').strict;

assert.strictEqual(isEven(), 'Hello from isEven');
console.info("isEven tests passed");
