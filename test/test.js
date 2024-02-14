const transpile = require("../src/transpile.js");
const assert = require('assert');
const fs = require("fs/promises");

const Tst = require('./test-description.js');

const Test = Tst.map(t => ({
  input: __dirname + '/data/' + t.input,
  output: __dirname + '/data/' + t.output,
  expected: __dirname + '/data/' + t.expected,
  correctOut: __dirname + '/data/' + t.correctOut,
})
)

const removeRequires = /require\(["'][\S]+["']\)/g;

function removeSpaces(s) {
  return s.replace(/\s/g, '').replace(removeRequires, '');
}

for (let i = 0; i < Test.length; i++) {
  it(`transpile(${Tst[i].input}, ${Tst[i].output})`, async () => {
    // Write the code
  });
}


