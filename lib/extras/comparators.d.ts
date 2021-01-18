import { AscDescString, HasKey, FunctionWithTwoParamsReturnNumber } from "./type-helpers";
export declare const stringComparator: <K extends string>(key: K, order: AscDescString) => FunctionWithTwoParamsReturnNumber<string | HasKey<K, string>>;
export declare const dateComparator: <K extends string>(key: K, order: AscDescString) => FunctionWithTwoParamsReturnNumber<Date | HasKey<K, Date>>;
