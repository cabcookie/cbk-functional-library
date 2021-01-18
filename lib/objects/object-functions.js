"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceNullValuesInObject = exports.isObject = exports.addKey = exports.addKeyFunc = exports.getObjKeys = exports.getKey = exports.checkObjectForProperty = void 0;
var fp_1 = require("lodash/fp");
var higher_order_funtions_1 = require("../higher-order/higher-order-funtions");
var checkObjectForProperty = function (key) { return function (obj) { return obj.hasOwnProperty(key); }; };
exports.checkObjectForProperty = checkObjectForProperty;
var getKey = function (key) { return function (obj) { return key === "" ? obj : obj[key]; }; };
exports.getKey = getKey;
var getObjKeys = function (obj) { return Object.keys(obj); };
exports.getObjKeys = getObjKeys;
var addKeyFunc = function (key, fn) { return function (obj) {
    var newObj = __assign({}, obj);
    newObj[key] = fn(obj);
    return newObj;
}; };
exports.addKeyFunc = addKeyFunc;
var addKey = function (key, value) { return function (obj) {
    var newObj = __assign({}, obj);
    newObj[key] = value;
    return newObj;
}; };
exports.addKey = addKey;
var isObject = function (obj) { return typeof (obj) === 'object'; };
exports.isObject = isObject;
var replaceNullInObject = function (defaultVal) { return function (obj, key) { return higher_order_funtions_1.ifThenElse(fp_1.flow(fp_1.get(key), higher_order_funtions_1.isNullOrUndefined), fp_1.set(key, defaultVal), higher_order_funtions_1.ifThenElse(fp_1.flow(fp_1.get(key), exports.isObject), function (currObj) { return fp_1.set(key, fp_1.flow(fp_1.get(key), exports.replaceNullValuesInObject(defaultVal))(currObj), currObj); }))(obj); }; };
var replaceNullValuesInObject = function (defaultVal) { return function (obj) { return fp_1.flow(fp_1.keys, fp_1.reduce(replaceNullInObject(defaultVal), obj))(obj); }; };
exports.replaceNullValuesInObject = replaceNullValuesInObject;
