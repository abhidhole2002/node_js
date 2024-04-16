console.log("exporting demo.js");

let a = 10;
let b = 20;

let func = (a, b) => a + b;

module.exports = {
  a,
  b,
  func,
};
