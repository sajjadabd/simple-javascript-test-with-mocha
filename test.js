var assert = require('assert');
let sum = require('./code');

describe('Array', function () {
  it('should return 5 when sum 2 and 3', function () {
    assert.equal(sum(2,3), 5);
  });
});