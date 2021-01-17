import { isArray } from "../arrays/array-functions"
import { checkObjectForProperty, isObject } from "../objects/object-functions"

export const makeAsyncCall = (fn: Function, nextFn = defaultFn) => async (...args: any) => nextFn(await fn(...args))
export const tryer = (tryFn: Function, errorFn: Function) => (data: any) => {
    try {
        return tryFn(data)
    } catch (error) {
        errorFn(error)
    }
}
export const addLogging = (fnName: string, fn: Function, logger = console.log, warner = console.warn) => (...args: any) => {
    logger(`Entering ${fnName}`, {args})
    try {
        const result = fn(...args)
        logger(`Exiting ${fnName}`, {result})
        return result
    } catch (error) {
        warner(`Exiting ${fnName} with error`, {error})
        throw error
    }
}
export const ifTypeError = (fn: Function, alternative: any) => (...args: any) => {
    try {
        return fn(...args)
    } catch (err) {
        if (err.name === "TypeError") return alternative
        throw err
    }
}
export const defaultFn = (obj: any) => obj
export const ifThenElse = (ifFn: Function, thenFn: Function, elseFn = defaultFn) => (obj: any) => ifFn(obj) ? thenFn(obj) : elseFn(obj) 
export const checkTypeOfValue = (type: string) => (value: any) => typeof value === type
export const runIfType = (type: string, fn: Function, elseFn = defaultFn) => ifThenElse(checkTypeOfValue(type), fn, elseFn)
export const runIfHasProperty = (key: string, fn: Function, elseFn = defaultFn) => ifThenElse(checkObjectForProperty(key), fn, elseFn)
export const isNullOrUndefined = (val: any) => val == null
export const log = (msg: string, logger = console.log) => (input: any) => {
    logger(msg, isArray(input) ? input : isNullOrUndefined(input) ? "null" : isObject(input) ? {...input} : input)
    return input
}
export const runFnOfObj = (fn: string) => (...args: any) => (obj: any) => obj[fn](...args)

