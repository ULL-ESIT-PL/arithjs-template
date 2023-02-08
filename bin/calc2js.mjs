#!/usr/bin/env node

import { program } from "commander";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { version } = require("../package.json");
import transpile from "../src/transpile.js";

program
  .version(version)
  //. fill the argumen
  //. fill with option "-o, --output <filename>"
  //. write the action

// write the code to parse process.argv;
