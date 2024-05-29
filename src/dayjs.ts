import { getBaseDate, isNumber, formatDate } from './help'
import {
  isDayBefore,
  isDayAfter,
  isDuringBetween,
  getWeeKBefore,
  getWeekAfter,
  getDayBefore,
  getDayAfter,
  getHourAfter,
  getHourBefore,
  getMinBefore,
  getMinAfter,
  getSecondBefore,
  getSecondAfter,
  getDayStart,
  getDayEnd,
  countDownDate
} from './utils'

export class Dayjs {
  public day: Date

  constructor(carDate?: number | Date) {
    this.day = carDate ? (isNumber(carDate) ? new Date(carDate) : carDate) : new Date()
  }

  get baseDate() {
    return getBaseDate(this.day)
  }

  get getTime() {
    return this.day.getTime()
  }

  format(format = 'YYYY-mm-dd HH:MM:SS') {
    return formatDate(this.day, format)
  }

  isDayBofore(days: number | Date) {
    return isDayBefore(days, this.day)
  }

  isDayAfter(days: number | Date) {
    return isDayAfter(days, this.day)
  }

  isDuringBetween(start: number | Date, end: number | Date) {
    return isDuringBetween(start, end, this.day)
  }

  toWeekBefore(weeks: number) {
    this.day = getWeeKBefore(weeks, this.day)
    return this
  }

  toWeekAfter(weeks: number) {
    this.day = getWeekAfter(weeks, this.day)
    return this
  }
  toDayBefore(days: number) {
    this.day = getDayBefore(days, this.day)
    return this
  }

  toDayAfter(days: number) {
    this.day = getDayAfter(days, this.day)
    return this
  }

  toHourBefore(hours: number) {
    this.day = getHourBefore(hours, this.day)
    return this
  }

  toHourAfter(hours: number) {
    this.day = getHourAfter(hours, this.day)
    return this
  }

  toMinBefore(mins: number) {
    this.day = getMinBefore(mins, this.day)
    return this
  }

  toMinAfter(mins: number) {
    this.day = getMinAfter(mins, this.day)
    return this
  }

  toSecondBefore(seconds: number) {
    this.day = getSecondBefore(seconds, this.day)
    return this
  }

  toSecondAfter(seconds: number) {
    this.day = getSecondAfter(seconds, this.day)
    return this
  }

  setStartTime() {
    this.day = getDayStart(this.day)
    return this
  }

  setEndTime() {
    this.day = getDayEnd(this.day)
    return this
  }

  countDownDate(mark: number | Date) {
    return countDownDate(mark, this.day)
  }

  toString() {
    return this.day.toString()
  }
}

export const dayPipe = (Date?: number | Date) => new Dayjs(Date)
