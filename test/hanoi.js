const assert = require('assert/strict');
const {
  hanoi
} = require('../src/hanoi');

describe('hanoi', () => {
  [
    [0, 0],
    [1, 1],
    [2, 2 ** 2 - 1],
    [3, 2 ** 3 - 1],
    [4, 2 ** 4 - 1],
    [5, 2 ** 5 - 1],
    [10, 2 ** 10 - 1],
  ].forEach(([n, answer]) => {
    it(`should return ${answer} steps for ${n} rings`, () => {
      const result = hanoi(n);

      assert.equal(result.length, answer);
    });
  });
});

