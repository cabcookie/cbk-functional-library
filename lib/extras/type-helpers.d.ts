export declare type FixedSizeArray<N extends number, T> = N extends 0 ? never[] : {
    0: T;
    length: N;
} & ReadonlyArray<T>;
export declare type HasKey<K extends string, V = any> = {
    [_ in K]: V;
};
export declare type AscDescString = "asc" | "desc";
export declare type GetNumberReturnString = (val: number) => string;
export declare type GetNumberReturnNumber = (val: number) => number;
export declare type FunctionWithTwoParamsReturnType<T, R> = (val1: T, val2: T) => R;
export declare type FunctionWithTwoParamsReturnNumber<T> = FunctionWithTwoParamsReturnType<T, number>;
