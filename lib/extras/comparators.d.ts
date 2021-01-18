declare type AscDescString = "asc" | "desc";
export declare const stringComparator: (key?: string, order?: AscDescString) => (str1: string, str2: string) => any;
export declare const dateComparator: (key?: string, order?: AscDescString) => (date1: Date, date2: Date) => any;
export {};
