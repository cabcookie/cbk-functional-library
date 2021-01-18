"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.move = exports.add = exports.remove = exports.unshift = exports.shift = exports.pop = exports.push = exports.slice = exports.filterFirstItemGetKey = exports.filterFirstItem = exports.getFirstItem = exports.sort = exports.filter = exports.join = exports.split = exports.match = exports.map = exports.isFirstItem = exports.createArray = exports.argsToArray = exports.isEmptyArray = exports.isArray = void 0;
var fp_1 = require("lodash/fp");
var isArray = function (arr) { return Array.isArray(arr); };
exports.isArray = isArray;
var isEmptyArray = function (arr) { return arr && !(arr.length > 0); };
exports.isEmptyArray = isEmptyArray;
var argsToArray = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
exports.argsToArray = argsToArray;
var createArray = function (val) {
    if (val === void 0) { val = null; }
    return function (count) { return Array.apply(val, Array(count)); };
};
exports.createArray = createArray;
var getItem = function (arr) { return function (index) { return arr[index]; }; };
var isFirstItem = function (idx) { return function () { return idx === 0; }; };
exports.isFirstItem = isFirstItem;
var map = function (fn) { return function (arr) { return arr.map(fn); }; };
exports.map = map;
var match = function (regex) { return function (str) { return str.match(regex) || []; }; };
exports.match = match;
var split = function (separator) { return function (str) { return str.split(separator); }; };
exports.split = split;
var join = function (separator) { return function (arr) { return arr.join(separator); }; };
exports.join = join;
var filter = function (filterFn) { return function (arr) { return arr.filter(filterFn); }; };
exports.filter = filter;
var sort = function (comparisionFn) { return function (arr) { return arr.sort(comparisionFn); }; };
exports.sort = sort;
var getFirstItem = function (arr) { return arr[0]; };
exports.getFirstItem = getFirstItem;
var filterFirstItem = function (filterFn) { return function (arr) { return exports.filter(filterFn)(arr) && exports.filter(filterFn)(arr)[0]; }; };
exports.filterFirstItem = filterFirstItem;
var filterFirstItemGetKey = function (filterFn, key) { return function (arr) { return exports.filterFirstItem(filterFn)(arr) && exports.filterFirstItem(filterFn)(arr)[key]; }; };
exports.filterFirstItemGetKey = filterFirstItemGetKey;
var slice = function (indexFrom, indexTo) { return function (arr) { return arr.slice(indexFrom, indexTo); }; };
exports.slice = slice;
var push = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (arr) {
        var newArr = __spreadArrays(arr);
        newArr.push.apply(newArr, args);
    };
};
exports.push = push;
var pop = function () { return function (arr) {
    var newArr = __spreadArrays(arr);
    newArr.pop();
}; };
exports.pop = pop;
var shift = function () { return function (arr) {
    var newArr = __spreadArrays(arr);
    newArr.shift();
}; };
exports.shift = shift;
var unshift = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (arr) {
        var newArr = __spreadArrays(arr);
        newArr.unshift.apply(newArr, args);
    };
};
exports.unshift = unshift;
var remove = function (index) { return function (arr) {
    if (index < 0)
        throw new Error("Index value is outside of the array");
    if (index >= arr.length)
        throw new Error("Index value is outside of the array");
    var arr1 = index === 0 ? [] : exports.slice(0, index)(arr);
    var arr2 = index === arr.length - 1 ? [] : exports.slice(index + 1, arr.length)(arr);
    return __spreadArrays(arr1, arr2);
}; };
exports.remove = remove;
var add = function (index) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    return function (arr) {
        if (index < 0)
            throw new Error("Index value is outside of the array");
        if (index > arr.length)
            throw new Error("Index value is outside of the array");
        var arr1 = index === 0 ? __spreadArrays(items) : fp_1.flow(exports.slice(0, index), exports.push.apply(void 0, items))(arr);
        var arr2 = index === arr.length ? [] : exports.slice(index, arr.length)(arr);
        return __spreadArrays(arr1, arr2);
    };
};
exports.add = add;
var move = function (oldIndex, newIndex) { return function (arr) {
    if (oldIndex === newIndex)
        return arr;
    if (oldIndex < 0 || oldIndex >= arr.length)
        throw new Error("Old index value is outside of the array.");
    if (newIndex < 0 || newIndex >= arr.length)
        throw new Error("New index value is outside of the array.");
    var itemToMove = arr[oldIndex];
    var arr1 = newIndex < oldIndex ?
        newIndex === 0 ? [itemToMove] : fp_1.flow(exports.slice(0, newIndex), exports.push(itemToMove))(arr) :
        oldIndex === 0 ? [] : exports.slice(0, oldIndex)(arr);
    var arr2 = newIndex < oldIndex ? exports.slice(newIndex, oldIndex)(arr) : fp_1.flow(exports.slice(oldIndex + 1, newIndex + 1), exports.push(itemToMove))(arr);
    var arr3 = newIndex < oldIndex ?
        oldIndex === arr.length - 1 ? [] : exports.slice(oldIndex + 1, arr.length)(arr) :
        newIndex === arr.length - 1 ? [] : exports.slice(newIndex + 1, arr.length)(arr);
    return __spreadArrays(arr1, arr2, arr3);
}; };
exports.move = move;
