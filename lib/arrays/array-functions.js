"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.move = exports.add = exports.remove = exports.unshift = exports.shift = exports.pop = exports.push = exports.slice = exports.filterFirstItemGetKey = exports.filterFirstItem = exports.getFirstItem = exports.sort = exports.filter = exports.join = exports.split = exports.match = exports.map = exports.isFirstItem = exports.createArray = exports.argsToArray = exports.isEmptyArray = exports.isArray = void 0;

var _fp = require("lodash/fp");

const isArray = arr => Array.isArray(arr);

exports.isArray = isArray;

const isEmptyArray = arr => arr && !(arr.length > 0);

exports.isEmptyArray = isEmptyArray;

const argsToArray = (...args) => args;

exports.argsToArray = argsToArray;

const createArray = (val = null) => count => Array.apply(val, Array(count));

exports.createArray = createArray;

const getItem = arr => index => arr[index];

const isFirstItem = idx => () => idx === 0;

exports.isFirstItem = isFirstItem;

const map = fn => arr => arr.map(fn);

exports.map = map;

const match = regex => str => str.match(regex) || [];

exports.match = match;

const split = separator => str => str.split(separator);

exports.split = split;

const join = separator => arr => arr.join(separator);

exports.join = join;

const filter = filterFn => arr => arr.filter(filterFn);

exports.filter = filter;

const sort = comparisionFn => arr => arr.sort(comparisionFn);

exports.sort = sort;

const getFirstItem = arr => arr[0];

exports.getFirstItem = getFirstItem;

const filterFirstItem = filterFn => arr => filter(filterFn)(arr) && filter(filterFn)(arr)[0];

exports.filterFirstItem = filterFirstItem;

const filterFirstItemGetKey = (filterFn, key) => arr => filterFirstItem(filterFn)(arr) && filterFirstItem(filterFn)(arr)[key];

exports.filterFirstItemGetKey = filterFirstItemGetKey;

const slice = (indexFrom, indexTo) => arr => arr.slice(indexFrom, indexTo);

exports.slice = slice;

const push = (...args) => arr => {
  const newArr = [...arr];
  newArr.push(...args);
};

exports.push = push;

const pop = () => arr => {
  const newArr = [...arr];
  newArr.pop();
};

exports.pop = pop;

const shift = () => arr => {
  const newArr = [...arr];
  newArr.shift();
};

exports.shift = shift;

const unshift = (...args) => arr => {
  const newArr = [...arr];
  newArr.unshift(...args);
};

exports.unshift = unshift;

const remove = index => arr => {
  if (index < 0) throw new Error("Index value is outside of the array");
  if (index >= arr.length) throw new Error("Index value is outside of the array");
  const arr1 = index === 0 ? [] : slice(0, index)(arr);
  const arr2 = index === arr.length - 1 ? [] : slice(index + 1, arr.length)(arr);
  return [...arr1, ...arr2];
};

exports.remove = remove;

const add = (index, ...items) => arr => {
  if (index < 0) throw new Error("Index value is outside of the array");
  if (index > arr.length) throw new Error("Index value is outside of the array");
  const arr1 = index === 0 ? [...items] : (0, _fp.flow)(slice(0, index), push(...items))(arr);
  const arr2 = index === arr.length ? [] : slice(index, arr.length)(arr);
  return [...arr1, ...arr2];
};

exports.add = add;

const move = (oldIndex, newIndex) => arr => {
  if (oldIndex === newIndex) return arr;
  if (oldIndex < 0 || oldIndex >= arr.length) throw new Error("Old index value is outside of the array.");
  if (newIndex < 0 || newIndex >= arr.length) throw new Error("New index value is outside of the array.");
  const itemToMove = arr[oldIndex];
  const arr1 = newIndex < oldIndex ? newIndex === 0 ? [itemToMove] : (0, _fp.flow)(slice(0, newIndex), push(itemToMove))(arr) : oldIndex === 0 ? [] : slice(0, oldIndex)(arr);
  const arr2 = newIndex < oldIndex ? slice(newIndex, oldIndex)(arr) : (0, _fp.flow)(slice(oldIndex + 1, newIndex + 1), push(itemToMove))(arr);
  const arr3 = newIndex < oldIndex ? oldIndex === arr.length - 1 ? [] : slice(oldIndex + 1, arr.length)(arr) : newIndex === arr.length - 1 ? [] : slice(newIndex + 1, arr.length)(arr);
  return [...arr1, ...arr2, ...arr3];
};

exports.move = move;