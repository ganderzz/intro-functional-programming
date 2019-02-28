const obj = {
  a: 1,
  b: 2
};

function doStuff(input) {
  return {
    a: input.a + 1,
    b: input.b + 1
  };
}

const newObj = doStuff(obj);
