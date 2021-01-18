export type FixedSizeArray<N extends number, T> = N extends 0 ? never[] : {
    0: T;
    length: N;
} & ReadonlyArray<T>

export type HasKey<K extends string, V = any> = {
    [_ in K]: V
}

export type AscDescString = "asc" | "desc"
export type GetNumberReturnString = (val: number) => string
export type GetNumberReturnNumber = (val: number) => number

export type FunctionWithTwoParamsReturnType<T, R> = (val1: T, val2: T) => R
export type FunctionWithTwoParamsReturnNumber<T> = FunctionWithTwoParamsReturnType<T,number>
