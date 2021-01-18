import { isArray } from "../arrays/array-functions";
import { checkObjectForProperty, isObject } from "../objects/object-functions";
import { flow } from "lodash/fp";
export { flow };
export const makeAsyncCall = (fn, nextFn = defaultFn) => async (...args) => nextFn(await fn(...args));
export const tryer = (tryFn, errorFn) => (data) => {
    try {
        return tryFn(data);
    }
    catch (error) {
        errorFn(error);
    }
};
export const addLogging = (fnName, fn, logger = console.log, warner = console.warn) => (...args) => {
    logger(`Entering ${fnName}`, { args });
    try {
        const result = fn(...args);
        logger(`Exiting ${fnName}`, { result });
        return result;
    }
    catch (error) {
        warner(`Exiting ${fnName} with error`, { error });
        throw error;
    }
};
export const ifTypeError = (fn, alternative) => (...args) => {
    try {
        return fn(...args);
    }
    catch (err) {
        if (err.name === "TypeError")
            return alternative;
        throw err;
    }
};
export const defaultFn = (obj) => obj;
export const ifThenElse = (ifFn, thenFn, elseFn = defaultFn) => (obj) => ifFn(obj) ? thenFn(obj) : elseFn(obj);
export const checkTypeOfValue = (type) => (value) => typeof value === type;
export const runIfType = (type, fn, elseFn = defaultFn) => ifThenElse(checkTypeOfValue(type), fn, elseFn);
export const runIfHasProperty = (key, fn, elseFn = defaultFn) => ifThenElse(checkObjectForProperty(key), fn, elseFn);
export const isNullOrUndefined = (val) => val == null;
export const log = (msg, logger = console.log) => (input) => {
    logger(msg, isArray(input) ? input : isNullOrUndefined(input) ? "null" : isObject(input) ? { ...input } : input);
    return input;
};
export const runFnOfObj = (fn) => (...args) => (obj) => obj[fn](...args);
