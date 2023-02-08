function buildRoot(child) {
  return {
    type: "Program",
    body: [
      // write your code. Use AST explorer to help you
    ],
    sourceType: "script",
  };
}

function buildLiteral(value) {
  return {
    // write your code. Use AST explorer to help you
  };
}

function buildBinaryExpression(left, op, right) {
  return {
    // write your code. Use AST explorer to help you
  };
}

module.exports = {
    buildRoot,
    buildBinaryExpression,
    buildLiteral
}