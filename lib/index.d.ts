import { checkObjectForProperty, getKey, getObjKeys, addKeyFunc, addKey, isObject, replaceNullValuesInObject } from "./objects/object-functions";
import { mult, plus, minus, div, rest, localNumberString } from './numbers/number-functions';
import { makeAsyncCall, tryer, addLogging, ifTypeError, defaultFn, ifThenElse, checkTypeOfValue, runIfType, runIfHasProperty, isNullOrUndefined, log, runFnOfObj } from "./higher-order/higher-order-funtions";
import { isArray, isEmptyArray, argsToArray, createArray, isFirstItem, map, match, split, join, filter, sort, getFirstItem, filterFirstItem, filterFirstItemGetKey, slice, push, pop, shift, unshift, remove, add, move } from "./arrays/array-functions";
import { upperCase, capitalize, replace, str, strFill, prepend, append, left, right, mid } from "./strings/string-functions";
import { isDevEnvironment } from "./extras/other-functions";
export { checkObjectForProperty, getKey, getObjKeys, addKeyFunc, addKey, isObject, isDevEnvironment, replaceNullValuesInObject, mult, plus, minus, div, rest, localNumberString, makeAsyncCall, tryer, addLogging, ifTypeError, defaultFn, ifThenElse, checkTypeOfValue, runIfType, runIfHasProperty, isNullOrUndefined, log, runFnOfObj, isArray, isEmptyArray, argsToArray, createArray, isFirstItem, map, match, split, join, filter, sort, getFirstItem, filterFirstItem, filterFirstItemGetKey, slice, push, pop, shift, unshift, remove, add, move, upperCase, capitalize, replace, str, strFill, prepend, append, left, right, mid, };
