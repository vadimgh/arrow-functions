function fn(n) {
  const f = () => arguments[0] + n;
  return f();
}

console.log(fn(2));