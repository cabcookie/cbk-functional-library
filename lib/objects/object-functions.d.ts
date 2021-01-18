export declare const checkObjectForProperty: (key: string) => (obj: any) => any;
export declare const getKey: (key: string) => (obj: any) => any;
export declare const getObjKeys: (obj: any) => string[];
export declare const addKeyFunc: (key: string, fn: Function) => (obj: any) => any;
export declare const addKey: (key: string, value: any) => (obj: any) => any;
export declare const isObject: (obj: any) => boolean;
export declare const replaceNullValuesInObject: (defaultVal: any) => (obj: any) => any;
