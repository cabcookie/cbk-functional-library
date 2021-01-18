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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runFnOfObj = exports.log = exports.isNullOrUndefined = exports.runIfHasProperty = exports.runIfType = exports.checkTypeOfValue = exports.ifThenElse = exports.defaultFn = exports.ifTypeError = exports.addLogging = exports.tryer = exports.makeAsyncCall = exports.flow = void 0;
var array_functions_1 = require("../arrays/array-functions");
var object_functions_1 = require("../objects/object-functions");
var fp_1 = require("lodash/fp");
Object.defineProperty(exports, "flow", { enumerable: true, get: function () { return fp_1.flow; } });
var makeAsyncCall = function (fn, nextFn) {
    if (nextFn === void 0) { nextFn = exports.defaultFn; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = nextFn;
                    return [4 /*yield*/, fn.apply(void 0, args)];
                case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
            }
        }); });
    };
};
exports.makeAsyncCall = makeAsyncCall;
var tryer = function (tryFn, errorFn) { return function (data) {
    try {
        return tryFn(data);
    }
    catch (error) {
        errorFn(error);
    }
}; };
exports.tryer = tryer;
var addLogging = function (fnName, fn, logger, warner) {
    if (logger === void 0) { logger = console.log; }
    if (warner === void 0) { warner = console.warn; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        logger("Entering " + fnName, { args: args });
        try {
            var result = fn.apply(void 0, args);
            logger("Exiting " + fnName, { result: result });
            return result;
        }
        catch (error) {
            warner("Exiting " + fnName + " with error", { error: error });
            throw error;
        }
    };
};
exports.addLogging = addLogging;
var ifTypeError = function (fn, alternative) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    try {
        return fn.apply(void 0, args);
    }
    catch (err) {
        if (err.name === "TypeError")
            return alternative;
        throw err;
    }
}; };
exports.ifTypeError = ifTypeError;
var defaultFn = function (obj) { return obj; };
exports.defaultFn = defaultFn;
var ifThenElse = function (ifFn, thenFn, elseFn) {
    if (elseFn === void 0) { elseFn = exports.defaultFn; }
    return function (obj) { return ifFn(obj) ? thenFn(obj) : elseFn(obj); };
};
exports.ifThenElse = ifThenElse;
var checkTypeOfValue = function (type) { return function (value) { return typeof value === type; }; };
exports.checkTypeOfValue = checkTypeOfValue;
var runIfType = function (type, fn, elseFn) {
    if (elseFn === void 0) { elseFn = exports.defaultFn; }
    return exports.ifThenElse(exports.checkTypeOfValue(type), fn, elseFn);
};
exports.runIfType = runIfType;
var runIfHasProperty = function (key, fn, elseFn) {
    if (elseFn === void 0) { elseFn = exports.defaultFn; }
    return exports.ifThenElse(object_functions_1.checkObjectForProperty(key), fn, elseFn);
};
exports.runIfHasProperty = runIfHasProperty;
var isNullOrUndefined = function (val) { return val == null; };
exports.isNullOrUndefined = isNullOrUndefined;
var log = function (msg, logger) {
    if (logger === void 0) { logger = console.log; }
    return function (input) {
        logger(msg, array_functions_1.isArray(input) ? input : exports.isNullOrUndefined(input) ? "null" : object_functions_1.isObject(input) ? __assign({}, input) : input);
        return input;
    };
};
exports.log = log;
var runFnOfObj = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (obj) { return obj[fn].apply(obj, args); };
}; };
exports.runFnOfObj = runFnOfObj;
