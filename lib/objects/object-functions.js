import { get, flow, set, keys, reduce } from 'lodash/fp';
import { ifThenElse, isNullOrUndefined } from '../higher-order/higher-order-funtions';
export const checkObjectForProperty = (key) => (obj) => obj.hasOwnProperty(key);
export const getKey = (key) => (obj) => key === "" ? obj : obj[key];
export const getObjKeys = (obj) => Object.keys(obj);
export const addKeyFunc = (key, fn) => (obj) => {
    const newObj = { ...obj };
    newObj[key] = fn(obj);
    return newObj;
};
export const addKey = (key, value) => (obj) => {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
};
export const isObject = (obj) => typeof (obj) === 'object';
const replaceNullInObject = (defaultVal) => (obj, key) => ifThenElse(flow(get(key), isNullOrUndefined), set(key, defaultVal), ifThenElse(flow(get(key), isObject), (currObj) => set(key, flow(get(key), replaceNullValuesInObject(defaultVal))(currObj), currObj)))(obj);
export const replaceNullValuesInObject = (defaultVal) => (obj) => flow(keys, reduce(replaceNullInObject(defaultVal), obj))(obj);
