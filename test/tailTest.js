const assert = require('chai').assert;
const tail = require('../tail');

describe('tail', function() {
  const arr1 = [1, 2, 3, 4];
  const arr2 = ["hello", "world", "foo", "bar"];

  it('should return 2 when the first element of tail([1, 2, 3, 4]) is checked', function() {
    assert.strictEqual(tail(arr1)[0], 2);
  });

  it('should return 3 when the length of tail([1, 2, 3, 4]) is checked', function() {
    assert.strictEqual(tail(arr1).length, 3);
  });

  it('should return "world" when the first element of tail(["hello", "world", "foo", "bar"]) is checked', function() {
    assert.strictEqual(tail(arr2)[0], "world");
  });

  it('should return 3 when the length of tail(["hello", "world", "foo", "bar"]) is checked', function() {
    assert.strictEqual(tail(arr2).length, 3);
  });

  it('should return 0 when the length of tail([1]) is checked', function() {
    assert.strictEqual(tail([1]).length, 0);
  });

  it('should return 0 when the length of tail([]) is checked', function() {
    assert.strictEqual(tail([]).length, 0);
  });
});
