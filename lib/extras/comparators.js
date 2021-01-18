"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateComparator = exports.stringComparator = void 0;
var fp_1 = require("lodash/fp");
var array_functions_1 = require("../arrays/array-functions");
var string_functions_1 = require("../strings/string-functions");
var compareValues = function (arr) { return (arr[0] > arr[1]) ? 1 :
    (arr[0] < arr[1]) ? -1 : 0; };
var getComparableDate = function (date) { return (new Date(date)).getTime(); };
var compareDateValues = function (arr) { return getComparableDate(arr[0]) - getComparableDate(arr[1]); };
var ascDesc = function (order) { return function (val) { return order === 'desc' ? val * -1 : val; }; };
var stringComparator = function (key, order) {
    if (key === void 0) { key = ''; }
    if (order === void 0) { order = 'asc'; }
    return fp_1.flow(array_functions_1.argsToArray, array_functions_1.map(fp_1.get(key)), array_functions_1.map(string_functions_1.upperCase), compareValues, ascDesc(order));
};
exports.stringComparator = stringComparator;
var dateComparator = function (key, order) {
    if (key === void 0) { key = ''; }
    if (order === void 0) { order = 'asc'; }
    return fp_1.flow(array_functions_1.argsToArray, array_functions_1.map(fp_1.get(key)), compareDateValues, ascDesc(order));
};
exports.dateComparator = dateComparator;
