function fizzBuzzSingle(n) {
  return (
    ((multOf3, multOf5) =>
      [
        multOf3 && "Fizz",
        multOf5 && "Buzz",
        !multOf3 && !multOf5 && String(n),
      ].filter(Boolean).join("")
    )(n % 3 === 0, n % 5 === 0)
  );
}

function fizzBuzz(n) {
  return ((fizzBuzzSingle) => 
    Array(n).fill(0).map((_, i) => fizzBuzzSingle(i + 1))
  )((n) => ((multOf3, multOf5) =>
    [
      multOf3 && "Fizz",
      multOf5 && "Buzz",
      !multOf3 && !multOf5 && String(n),
    ].filter(Boolean).join("")
  )(n % 3 === 0, n % 5 === 0)
  );
}

module.exports = {
  fizzBuzzSingle,
  fizzBuzz,
};
