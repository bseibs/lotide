const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', function() {
  it('should return [2] for middle([1, 2, 3])', function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return [2, 3] for middle([1, 2, 3, 4])', function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should return [] for middle([1])', function() {
    assert.deepEqual(middle([1]), []);
  });

  it('should return [] for middle([])', function() {
    assert.deepEqual(middle([]), []);
  });

  it('should return ["world", "foo"] for middle(["hello", "world", "foo", "bar"])', function() {
    assert.deepEqual(middle(["hello", "world", "foo", "bar"]), ["world", "foo"]);
  });
});
