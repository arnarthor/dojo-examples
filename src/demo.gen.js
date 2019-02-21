/* Untyped file generated by genType. */

import {objectConversion as objectConversionNotChecked} from './faultyJs.js';

import {objectWithVariantConversion as objectWithVariantConversionNotChecked} from './faultyJs.js';

import {arrayWithVariants as arrayWithVariantsNotChecked} from './faultyJs.js';

import {logForMe as logForMeNotChecked} from './faultyJs.js';

import {nestedObjectConversion as nestedObjectConversionNotChecked} from './faultyJs.js';

const $$toJS634562082 = {"847855481": "Less than five", "992812826": "Yuge"};

const $$toRE634562082 = {"Less than five": 847855481, "Yuge": 992812826};

// In case of type error, check the type of 'objectConversion' in 'demo.re' and './faultyJs.js'.
export const objectConversionTypeChecked = objectConversionNotChecked;

// Export 'objectConversion' early to allow circular import from the '.bs.js' file.
export const objectConversion = function _(Arg1) {
  const result = objectConversionTypeChecked(Arg1);
  return [result.hello, result.Name]
};

// In case of type error, check the type of 'objectWithVariantConversion' in 'demo.re' and './faultyJs.js'.
export const objectWithVariantConversionTypeChecked = objectWithVariantConversionNotChecked;

// Export 'objectWithVariantConversion' early to allow circular import from the '.bs.js' file.
export const objectWithVariantConversion = function _(Arg1) {
  const result = objectWithVariantConversionTypeChecked(Arg1);
  return [result.hello, $$toRE634562082[result.someStateConstant]]
};

// In case of type error, check the type of 'arrayWithVariants' in 'demo.re' and './faultyJs.js'.
export const arrayWithVariantsTypeChecked = arrayWithVariantsNotChecked;

// Export 'arrayWithVariants' early to allow circular import from the '.bs.js' file.
export const arrayWithVariants = function _(Arg1) {
  const result = arrayWithVariantsTypeChecked(Arg1);
  return result.map(function _element(ArrayItem) { return $$toRE634562082[ArrayItem]})
};

// In case of type error, check the type of 'logForMe' in 'demo.re' and './faultyJs.js'.
export const logForMeTypeChecked = logForMeNotChecked;

// Export 'logForMe' early to allow circular import from the '.bs.js' file.
export const logForMe = function _(Arg1) {
  const result = logForMeTypeChecked($$toJS634562082[Arg1]);
  return result
};

// In case of type error, check the type of 'nestedObjectConversion' in 'demo.re' and './faultyJs.js'.
export const nestedObjectConversionTypeChecked = nestedObjectConversionNotChecked;

// Export 'nestedObjectConversion' early to allow circular import from the '.bs.js' file.
export const nestedObjectConversion = function _(Arg1) {
  const result = nestedObjectConversionTypeChecked(Arg1);
  return [[[result.nested1.nested2.hello]]]
};

const Curry = require('bs-platform/lib/es6/curry.js');

const demoBS = require('./demo.bs');

export const recordToObject = function _(Arg1) {
  const result = demoBS.recordToObject(Arg1);
  return {nested1:{nested2:{hello:result[0][0][0]}}}
};

export const whatAboutNamedArguments = function _(Arg1, Arg2, Arg3, Arg4) {
  const result = Curry._6(demoBS.whatAboutNamedArguments, Arg1, Arg2.hello, Arg2.world, Arg3, Arg4.gimmeMore, Arg4.evenMoreOptions);
  return result
};
