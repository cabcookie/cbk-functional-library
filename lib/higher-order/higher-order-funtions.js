"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "flow", {
  enumerable: true,
  get: function () {
    return _fp.flow;
  }
});
exports.runFnOfObj = exports.log = exports.isNullOrUndefined = exports.runIfHasProperty = exports.runIfType = exports.checkTypeOfValue = exports.ifThenElse = exports.defaultFn = exports.ifTypeError = exports.addLogging = exports.tryer = exports.makeAsyncCall = void 0;

var _arrayFunctions = require("../arrays/array-functions");

var _objectFunctions = require("../objects/object-functions");

var _fp = require("lodash/fp");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const makeAsyncCall = (fn, nextFn = defaultFn) => async (...args) => nextFn(await fn(...args));

exports.makeAsyncCall = makeAsyncCall;

const tryer = (tryFn, errorFn) => data => {
  try {
    return tryFn(data);
  } catch (error) {
    errorFn(error);
  }
};

exports.tryer = tryer;

const addLogging = (fnName, fn, logger = console.log, warner = console.warn) => (...args) => {
  logger(`Entering ${fnName}`, {
    args
  });

  try {
    const result = fn(...args);
    logger(`Exiting ${fnName}`, {
      result
    });
    return result;
  } catch (error) {
    warner(`Exiting ${fnName} with error`, {
      error
    });
    throw error;
  }
};

exports.addLogging = addLogging;

const ifTypeError = (fn, alternative) => (...args) => {
  try {
    return fn(...args);
  } catch (err) {
    if (err.name === "TypeError") return alternative;
    throw err;
  }
};

exports.ifTypeError = ifTypeError;

const defaultFn = obj => obj;

exports.defaultFn = defaultFn;

const ifThenElse = (ifFn, thenFn, elseFn = defaultFn) => obj => ifFn(obj) ? thenFn(obj) : elseFn(obj);

exports.ifThenElse = ifThenElse;

const checkTypeOfValue = type => value => typeof value === type;

exports.checkTypeOfValue = checkTypeOfValue;

const runIfType = (type, fn, elseFn = defaultFn) => ifThenElse(checkTypeOfValue(type), fn, elseFn);

exports.runIfType = runIfType;

const runIfHasProperty = (key, fn, elseFn = defaultFn) => ifThenElse((0, _objectFunctions.checkObjectForProperty)(key), fn, elseFn);

exports.runIfHasProperty = runIfHasProperty;

const isNullOrUndefined = val => val == null;

exports.isNullOrUndefined = isNullOrUndefined;

const log = (msg, logger = console.log) => input => {
  logger(msg, (0, _arrayFunctions.isArray)(input) ? input : isNullOrUndefined(input) ? "null" : (0, _objectFunctions.isObject)(input) ? _objectSpread({}, input) : input);
  return input;
};

exports.log = log;

const runFnOfObj = fn => (...args) => obj => obj[fn](...args);

exports.runFnOfObj = runFnOfObj;