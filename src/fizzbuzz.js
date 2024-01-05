function fizzBuzzSingle(n) {
  return (
    ((out) => (
      (n % 3 === 0 ? out.push("Fizz") : void 0),
      (n % 5 === 0 ? out.push("Buzz") : void 0),
      (!out.length ? out.push(String(n)) : void 0),
      out.join("")
    ))([])
  );
}

module.exports = {
  fizzBuzzSingle,
};
