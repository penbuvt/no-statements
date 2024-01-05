function hanoi(diskCount, source = 1, dest = 3, spare = 2) {
  return ((h, ...args) => h(h, ...args))(
    (h, n, s, d, p) => (
      n === 0 ? []
      : n === 1 ? [[s, d]]
      : [
        ...h(h, n - 1, s, p, d),
        [s, d],
        ...h(h, n - 1, p, d, s),
      ]
    ),
    diskCount,
    source,
    dest,
    spare
  );
}

module.exports = {
  hanoi,
};
