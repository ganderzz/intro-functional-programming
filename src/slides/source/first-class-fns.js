function myFunc(f) {
  return f();
}

const parent = myFunc;

parent(console.log);
