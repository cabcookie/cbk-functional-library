"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mid = exports.right = exports.left = exports.append = exports.prepend = exports.strFill = exports.str = exports.replace = exports.capitalize = exports.upperCase = void 0;

const upperCase = val => typeof val === 'string' ? val.toUpperCase() : val;

exports.upperCase = upperCase;

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

exports.capitalize = capitalize;

const replace = (toReplace, replacyBy) => str => str.replace(toReplace, replacyBy);

exports.replace = replace;

const str = str => () => str;

exports.str = str;

const strFill = (fill, digits) => str => (`${fill}`.repeat(digits) + `${str}`).slice(-digits);

exports.strFill = strFill;

const prepend = pre => str => `${pre}${str}`;

exports.prepend = prepend;

const append = post => str => `${str}${post}`;

exports.append = append;

const left = count => str => str.substring(0, count);

exports.left = left;

const right = count => str => str.substring(str.length - count, str.length + 1);

exports.right = right;

const mid = (first, length) => str => str.substring(first - 1, first + length - 1);

exports.mid = mid;