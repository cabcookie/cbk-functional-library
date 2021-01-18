"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localNumberString = exports.rest = exports.div = exports.minus = exports.plus = exports.mult = void 0;
const languageSetting = "de";

const mult = b => a => a * b;

exports.mult = mult;

const plus = b => a => a + b;

exports.plus = plus;

const minus = b => a => a - b;

exports.minus = minus;

const div = b => a => a / b;

exports.div = div;

const rest = b => a => a % b;

exports.rest = rest;

const localNumberString = numb => numb.toLocaleString(languageSetting);

exports.localNumberString = localNumberString;