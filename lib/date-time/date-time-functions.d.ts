export declare const makeDate: (str: string) => Date;
export declare const now: () => Date;
export declare const setTimer: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => () => void;
export declare const addSeconds: (date: Date | string, secs: number) => Date;
export declare const addMinutes: (date: Date | string, mins: number) => Date;
export declare const addDays: (days: number) => (date: Date) => Date;
export declare const toISOString: (date: Date) => string;
export declare const shortDate: (date: Date | string) => string;
export declare const shortDateTime: (date: Date | string) => string;
export declare const shortTime: (date: Date | string) => string;
export declare const secondsToHhMmSs: (seconds: number) => string;
export declare const secondsToMmSs: (seconds: number) => string;
export declare const minutesToHhMm: (seconds: number) => string;
