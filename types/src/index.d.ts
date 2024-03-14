export declare function strToDate(str: string): Date | undefined;
export declare function formatDate(time: number | Date, fmt?: string): string;
export declare const format: (format?: string, time?: number | Date) => string;
export declare const getTimestampBefore: (timestamp: number, carDate?: number | Date) => Date;
export declare const getTimestampAfter: (timestamp: number, carDate?: number | Date) => Date;
export declare const isDayBefore: (days: number | Date, carDate?: number | Date) => boolean;
export declare const isDayAfter: (days: number | Date, carDate?: number | Date) => boolean;
export declare const isDuringBetween: (start: number | Date, end: number | Date, curDate?: number | Date) => boolean;
export declare const getWeeKBefore: (weeks: number, carDate?: number | Date) => Date;
export declare const getWeekAfter: (weeks: number, carDate?: number | Date) => Date;
export declare const getDayBefore: (days: number, carDate?: number | Date) => Date;
export declare const getDayAfter: (days: number, carDate?: number | Date) => Date;
export declare const getHourBefore: (hours: number, carDate?: number | Date) => Date;
export declare const getHourAfter: (hours: number, carDate?: number | Date) => Date;
export declare const getMinBefore: (mins: number, carDate?: number | Date) => Date;
export declare const getMinAfter: (mins: number, carDate?: number | Date) => Date;
export declare const getSecondBefore: (seconds: number, carDate?: number | Date) => Date;
export declare const getSecondAfter: (seconds: number, carDate?: number | Date) => Date;
export declare const getDayStart: (carDate: number | Date) => Date;
export declare const getDayEnd: (carDate: number | Date) => Date;
export declare class Dayjs {
    day: Date;
    constructor(carDate?: number | Date);
    get baseDate(): {
        year: number;
        month: number;
        day: number;
        week: number;
        hours: number;
        minutes: number;
        seconds: number;
        date: number;
        quarter: number;
    };
    format(format?: string): string;
    isDayBofore(days: number | Date): boolean;
    isDayAfter(days: number | Date): boolean;
    isDuringBetween(start: number | Date, end: number | Date): boolean;
    toWeekBefore(weeks: number): this;
    toWeekAfter(weeks: number): this;
    toDayBefore(days: number): this;
    toDayAfter(days: number): this;
    toHourBefore(hours: number): this;
    toHourAfter(hours: number): this;
    toMinBefore(mins: number): this;
    toMinAfter(mins: number): this;
    toSecondBefore(seconds: number): this;
    toSecondAfter(seconds: number): this;
    setStartTime(): this;
    setEndTime(): this;
    toString(): string;
}
export declare const dayPipe: (Date?: number | Date | undefined) => Dayjs;