import {
  getBaseDate,
  isNumber,
  formatDate,
  getDaysTimestamp,
  getHourTimestamp,
  getMinTimestamp,
  getSecondTimestamp,
  getWeekTimestamp
} from './help'
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

  format(format = 'YYYY-MM-DD HH:mm:ss') {
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
  diff(days: number, type: 'day' | 'hour' | 'min' | 'sec' | 'week' = 'day') {
    const curDays = isNumber(days) ? new Date(days) : days
    const diff = this.day.getTime() - curDays.getTime()

    const map = {
      day: () => diff / getDaysTimestamp(),
      hour: () => diff / getHourTimestamp(),
      min: () => diff / getMinTimestamp(),
      sec: () => diff / getSecondTimestamp(),
      week: () => diff / getWeekTimestamp()
    }
    return Math.floor(map[type]())
  }
  subtrac(days: number, type: 'day' | 'hour' | 'min' | 'sec' | 'week' = 'day') {
    switch (type) {
      case 'day':
        this.day = getDayBefore(days, this.day)
        break
      case 'hour':
        this.day = getHourBefore(days, this.day)
        break
      case 'min':
        this.day = getMinBefore(days, this.day)
        break
      case 'sec':
        this.day = getSecondBefore(days, this.day)
        break
      case 'week':
        this.day = getWeeKBefore(days, this.day)
        break
    }
    return this
  }
  add(days: number, type: 'day' | 'hour' | 'min' | 'sec' | 'week' = 'day') {
    switch (type) {
      case 'day':
        this.day = getDayAfter(days, this.day)
        break
      case 'hour':
        this.day = getHourAfter(days, this.day)
        break
      case 'min':
        this.day = getMinAfter(days, this.day)
        break
      case 'sec':
        this.day = getSecondAfter(days, this.day)
        break
      case 'week':
        this.day = getWeekAfter(days, this.day)
        break
    }
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

  setHours(hours: number, min?: number, sec?: number, ms?: number) {
    const base = this.baseDate
    this.day.setHours(hours, min || base.minutes, sec || base.seconds, ms || 0)
    return this
  }

  setFullYear(year: number, month?: number, date?: number) {
    const base = this.baseDate
    this.day.setFullYear(year, month || base.month - 1, date || base.date)
    return this
  }

  setDate(
    year: number,
    month?: number,
    date?: number,
    hours?: number,
    min?: number,
    sec?: number,
    ms?: number
  ) {
    const base = this.baseDate
    this.day = new Date(
      year,
      (month && month - 1) || base.month,
      date || base.date,
      hours || base.hours,
      min || base.minutes,
      sec || base.seconds,
      ms || 0
    )
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
  setDayStartTime() {
    this.day = getDayStart(this.day)
    return this
  }
  /**
   *  后续废弃
   */
  setStartTime() {
    this.day = getDayStart(this.day)
    return this
  }
  setDayEndTime() {
    this.day = getDayEnd(this.day)
    return this
  }
  /**
   *  后续废弃
   */
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
