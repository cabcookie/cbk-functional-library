"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceNullValuesInObject = exports.isObject = exports.addKey = exports.addKeyFunc = exports.getObjKeys = exports.getKey = exports.checkObjectForProperty = void 0;

var _fp = require("lodash/fp");

var _higherOrderFuntions = require("../higher-order/higher-order-funtions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const checkObjectForProperty = key => obj => obj.hasOwnProperty(key);

exports.checkObjectForProperty = checkObjectForProperty;

const getKey = key => obj => key === "" ? obj : obj[key];

exports.getKey = getKey;

const getObjKeys = obj => Object.keys(obj);

exports.getObjKeys = getObjKeys;

const addKeyFunc = (key, fn) => obj => {
  const newObj = _objectSpread({}, obj);

  newObj[key] = fn(obj);
  return newObj;
};

exports.addKeyFunc = addKeyFunc;

const addKey = (key, value) => obj => {
  const newObj = _objectSpread({}, obj);

  newObj[key] = value;
  return newObj;
};

exports.addKey = addKey;

const isObject = obj => typeof obj === 'object';

exports.isObject = isObject;

const replaceNullInObject = defaultVal => (obj, key) => (0, _higherOrderFuntions.ifThenElse)((0, _fp.flow)((0, _fp.get)(key), _higherOrderFuntions.isNullOrUndefined), (0, _fp.set)(key, defaultVal), (0, _higherOrderFuntions.ifThenElse)((0, _fp.flow)((0, _fp.get)(key), isObject), currObj => (0, _fp.set)(key, (0, _fp.flow)((0, _fp.get)(key), replaceNullValuesInObject(defaultVal))(currObj), currObj)))(obj);

const replaceNullValuesInObject = defaultVal => obj => (0, _fp.flow)(_fp.keys, (0, _fp.reduce)(replaceNullInObject(defaultVal), obj))(obj);

exports.replaceNullValuesInObject = replaceNullValuesInObject;