const date = new Date();

function notPureAdd(a, b) {
  return a + date.getMilliseconds();
}

function pureAdd(a, b) {
  return a + b;
}
