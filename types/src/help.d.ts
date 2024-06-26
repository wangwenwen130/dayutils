export declare const REGEX_PARSE: RegExp;
export declare const REGEX_FORMAT: RegExp;
export declare const isNumber: (val: unknown) => val is number;
export declare function formatDate(time: number | Date, fmt?: string): string;
export declare const getBaseDate: (time: number | Date) => {
    year: number;
    month: number;
    date: number;
    /**星期几 */
    week: number;
    hours: number;
    minutes: number;
    seconds: number;
    timestamp: number;
    quarter: number;
};
export declare const getTimestamp: (time?: number | Date) => number;
export declare const getSecondTimestamp: (seconds?: number) => number;
export declare const getMinTimestamp: (min?: number) => number;
export declare const getHourTimestamp: (hour?: number) => number;
export declare const getDaysTimestamp: (days?: number) => number;
export declare const getWeekTimestamp: (week?: number) => number;
