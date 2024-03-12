function fn(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

console.log(fn(3));