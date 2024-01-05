function fizzBuzzSingle(n) {
  return (
    ((acc) => (
      ((acc) => (
        ((acc) => (
          ((acc) => (
            acc
          ))(!acc.length ? String(n) : acc)
        ))(n % 5 === 0 ? acc + "Buzz" : acc)
      ))(n % 3 === 0 ? acc + "Fizz" : acc)
    ))("")
  );
}

module.exports = {
  fizzBuzzSingle,
};
