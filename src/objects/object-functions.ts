import { get, flow, set, keys, reduce } from 'lodash/fp'
import { ifThenElse, isNullOrUndefined } from '../higher-order/higher-order-funtions'

export const checkObjectForProperty = (key: string) => (obj: any) => obj.hasOwnProperty(key)
export const getKey = (key: string) => (obj: any) => key === "" ? obj : obj[key]
export const getObjKeys = (obj: any) => Object.keys(obj)
export const addKeyFunc = (key: string, fn: Function) => (obj: any) => {
    const newObj = { ...obj }
    newObj[key] = fn(obj)
    return newObj
}
export const addKey = (key: string, value: any) => (obj: any) => {
    const newObj = { ...obj }
    newObj[key] = value
    return newObj
}
export const isObject = (obj: any) => typeof(obj) === 'object'

const replaceNullInObject = (defaultVal: any) => (obj: any, key: string) => ifThenElse(flow( get(key), isNullOrUndefined ),
    set(key, defaultVal),
    ifThenElse(flow( get(key), isObject ),
        (currObj: any) => set(key, flow(
            get(key),
            replaceNullValuesInObject(defaultVal),
        )(currObj), currObj),
    ),
)(obj)

export const replaceNullValuesInObject = (defaultVal: any) => (obj: any) => flow(
    keys,
    reduce(replaceNullInObject(defaultVal), obj),
)(obj)
