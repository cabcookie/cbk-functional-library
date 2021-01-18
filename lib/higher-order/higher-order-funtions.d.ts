import { flow } from "lodash/fp";
export { flow };
export declare const makeAsyncCall: (fn: Function, nextFn?: (obj: any) => any) => (...args: any) => Promise<any>;
export declare const tryer: (tryFn: Function, errorFn: Function) => (data: any) => any;
export declare const addLogging: (fnName: string, fn: Function, logger?: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
}, warner?: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
}) => (...args: any) => any;
export declare const ifTypeError: (fn: Function, alternative: any) => (...args: any) => any;
export declare const defaultFn: (obj: any) => any;
export declare const ifThenElse: (ifFn: Function, thenFn: Function, elseFn?: (obj: any) => any) => (obj: any) => any;
export declare const checkTypeOfValue: (type: string) => (value: any) => boolean;
export declare const runIfType: (type: string, fn: Function, elseFn?: (obj: any) => any) => (obj: any) => any;
export declare const runIfHasProperty: (key: string, fn: Function, elseFn?: (obj: any) => any) => (obj: any) => any;
export declare const isNullOrUndefined: (val: any) => boolean;
export declare const log: (msg: string, logger?: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
}) => (input: any) => any;
export declare const runFnOfObj: (fn: string) => (...args: any) => (obj: any) => any;
