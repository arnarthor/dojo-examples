// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var DemoGenJs = require("./demo.gen.js");

console.log("Hello:", DemoGenJs.objectConversion()[/* hello */0]);

console.log("Name:", DemoGenJs.objectConversion()[/* name */1]);

console.log("");

console.log("");

console.log("");

console.log("========================================");

var constant = DemoGenJs.objectWithVariantConversion()[/* someStateConstant */1];

console.log("Number is:", constant >= 992812826 ? "Yuuuuuuuuuuge" : "Small", constant);

console.log("");

console.log("");

console.log("");

console.log("========================================");

console.log("Numbers are:", DemoGenJs.arrayWithVariants());

console.log("");

console.log("");

console.log("");

console.log("========================================");

console.log("Big log");

DemoGenJs.logForMe(/* Yuge */992812826);

console.log("Small log");

DemoGenJs.logForMe(/* Less */847855481);

console.log("");

console.log("");

console.log("");

console.log("========================================");

console.log("Converted string:", DemoGenJs.nestedObjectConversion()[/* nested1 */0][/* nested2 */0][/* hello */0]);

function recordToObject(param) {
  return /* record */[/* nested1 : record */[/* nested2 : record */[/* hello */"Wow this is amazing"]]];
}

function whatAboutNamedArguments(str, hello, world, str2, moreOptions, evenMoreOptions) {
  console.log(str);
  console.log(hello);
  console.log(world);
  console.log(str2);
  console.log(moreOptions);
  console.log(evenMoreOptions);
  return /* () */0;
}

exports.constant = constant;
exports.recordToObject = recordToObject;
exports.whatAboutNamedArguments = whatAboutNamedArguments;
/*  Not a pure module */