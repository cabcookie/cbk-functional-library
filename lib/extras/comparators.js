"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateComparator = exports.stringComparator = void 0;

var _fp = require("lodash/fp");

var _arrayFunctions = require("../arrays/array-functions");

var _stringFunctions = require("../strings/string-functions");

const compareValues = arr => arr[0] > arr[1] ? 1 : arr[0] < arr[1] ? -1 : 0;

const getComparableDate = date => new Date(date).getTime();

const compareDateValues = arr => getComparableDate(arr[0]) - getComparableDate(arr[1]);

const ascDesc = order => val => val === 0 ? 0 : order === 'desc' ? val * -1 : val;

const stringComparator = (key = '', order = 'asc') => (str1, str2) => (0, _fp.flow)((0, _arrayFunctions.map)((0, _fp.get)(key)), (0, _arrayFunctions.map)(_stringFunctions.upperCase), compareValues, ascDesc(order))([str1, str2]);

exports.stringComparator = stringComparator;

const dateComparator = (key = '', order = 'asc') => (date1, date2) => (0, _fp.flow)((0, _arrayFunctions.map)((0, _fp.get)(key)), compareDateValues, ascDesc(order))([date1, date2]);

exports.dateComparator = dateComparator;