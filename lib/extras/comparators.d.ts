declare type AscDescString = "asc" | "desc";
export declare const stringComparator: (key?: string, order?: AscDescString) => (...args: any[]) => any;
export declare const dateComparator: (key?: string, order?: AscDescString) => (...args: any[]) => any;
export {};
