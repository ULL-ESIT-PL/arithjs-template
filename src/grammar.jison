%{
const { 
  buildLiteral, 
  buildBinaryExpression, 
  buildUnaryExpression,
  buildCallExpression,
  buildRoot
} = require('./ast-build.js');
%}

/* set priorities */
%%
/* your grammar here */
