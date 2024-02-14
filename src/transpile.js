#!/usr/bin/env node
const fs = require('fs/promises');

const p = require("./calc").parser;

const estraverse = require("estraverse");
const exportedSupportIdentifiers = Object.keys(require("./support-lib.js")); // [ power, factorial ]

const escodegen = require('escodegen');
const { renderFile } = require('template-file'); // handlebars.js mustache.js ...

async function generateCode(dependencies, ast) {
  // Write the code to generate the output
}

const findUsedFunctions = function (ast) {
  const usedSupportFunctions = new Set();
  estraverse.traverse(ast, {
    enter: function (node, _ ) {
      // Write the code to find the used functions
    },
  });
  return Array.from(usedSupportFunctions);
};

async function writeOutput(outputFile, output) {
  // Write the code to write the output
}

module.exports = async function transpile(inputFile, outputFile) {
  try {
    let input = await fs.readFile(inputFile, 'utf-8')
    const ast = p.parse(input);                           // lexical and syntax analysis
  
    const dependencies = findUsedFunctions(ast);          // semantic analysis
    
    const output = await generateCode(dependencies, ast); // code generation
  
    await writeOutput(outputFile, output);                // output
  } catch (e) {
    console.error(e.message);
  }
}

