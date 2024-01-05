function hanoi(diskCount, source = 1, dest = 3, spare = 2) {
  return (
    // Y combinator
    ((f) => ((x) => f((...args) => (x(x)(...args))))((x) => f((...args) => (x(x)(...args)))))(
      // hanoi solver
      (h) => (n, s, d, p) => (
        n === 0 ? []
        : n === 1 ? [[s, d]]
        : [
          ...h(n - 1, s, p, d),
          [s, d],
          ...h(n - 1, p, d, s),
        ]
      )
    )(
      diskCount,
      source,
      dest,
      spare
    )
  );
}

module.exports = {
  hanoi,
};
