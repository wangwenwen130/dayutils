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
    get getTime(): number;
    format(format?: string): string;
    isDayBofore(days: number | Date): boolean;
    isDayAfter(days: number | Date): boolean;
    isDuringBetween(start: number | Date, end: number | Date): boolean;
    toWeekBefore(weeks: number): this;
    toWeekAfter(weeks: number): this;
    diff(days: number, type?: 'day' | 'hour' | 'min' | 'sec'): number;
    subtrac(days: number): this;
    add(days: number): this;
    /**
     *  后续废弃
     */
    toDayBefore(days: number): this;
    /**
     *  后续废弃
     */
    toDayAfter(days: number): this;
    toSetHours(hours: number, min?: number, sec?: number, ms?: number): this;
    toHourBefore(hours: number): this;
    toHourAfter(hours: number): this;
    toMinBefore(mins: number): this;
    toMinAfter(mins: number): this;
    toSecondBefore(seconds: number): this;
    toSecondAfter(seconds: number): this;
    setDayStartTime(): this;
    /**
     *  后续废弃
     */
    setStartTime(): this;
    setDayEndTime(): this;
    /**
     *  后续废弃
     */
    setEndTime(): this;
    countDownDate(mark: number | Date): {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
    toString(): string;
}
export declare const dayPipe: (Date?: number | Date | undefined) => Dayjs;
