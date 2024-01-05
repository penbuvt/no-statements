const assert = require('assert/strict');
const {
  fizzBuzzSingle
} = require('../src/fizzbuzz');

describe('fizzBuzzSingle', () => {
  [
    [1, '1'],
    [2, '2'],
    [4, '4'],
    [7, '7'],
    [2*2*7*11*13, String(2*2*7*11*13)],
  ].forEach(([n, answer]) => {
    it(`should return the number ${n} as a string`, () => {
      const result = fizzBuzzSingle(n);

      assert.equal(result, answer);
    });
  });

  [3, 6, 9, 12, 99].forEach((n) => {
    it(`should return "Fizz" for ${n}`, () => {
      const result = fizzBuzzSingle(n);

      assert.equal(result, 'Fizz');
    });
  });

  [5, 10, 20, 500].forEach((n) => {
    it(`should return "Buzz" for ${n}`, () => {
      const result = fizzBuzzSingle(n);

      assert.equal(result, 'Buzz');
    });
  });

  [15, 3*3*5, 5*5*5*3*3*3*3, 30].forEach((n) => {
    it(`should return "FizzBuzz" for ${n}`, () => {
      const result = fizzBuzzSingle(n);

      assert.equal(result, 'FizzBuzz');
    });
  });


});
