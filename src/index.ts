// regex
const REGEX_PARSE =
  /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/

const REGEX_FORMAT =
  /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g

const isNumber = (val: unknown): val is number => {
  return toString.call(val) === `[object ${Number}]`
}

const getBaseDate = (time: number | Date) => {
  const day = isNumber(time) ? new Date(time) : time
  return {
    year: day.getFullYear(),
    month: day.getMonth(),
    day: day.getDate(),
    week: day.getDay(),
    hours: day.getHours(),
    minutes: day.getMinutes(),
    seconds: day.getSeconds(),
    date: day.getTime(),
    quarter: Math.floor((day.getMonth() + 3) / 3) // 季度
  }
}

export function strToDate(str: string) {
  const d = str.match(REGEX_PARSE)
  if (d) {
    const m = Number(d[2]) - 1 || 0
    return new Date(
      Number(d[1]),
      m,
      Number(d[3] || 1),
      Number(d[4] || 0),
      Number(d[5] || 0),
      Number(d[6] || 0)
    )
  }
}

function formatDate(time: number | Date, fmt = 'YYYY-mm-dd HH:MM:SS') {
  const { year, month, day, hours, minutes, seconds } = getBaseDate(time)
  const patternObj = {
    'Y+': String(year), // 年
    'm+': String(month + 1), // 月
    'd+': String(day), // 日
    'H+': String(hours), // 时
    'M+': String(minutes), // 分
    'S+': String(seconds) // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  type K = keyof typeof patternObj
  let execResult: RegExpExecArray | null
  for (let k in patternObj) {
    execResult = new RegExp('(' + k + ')').exec(fmt)
    if (execResult) {
      fmt = fmt.replace(
        execResult[1],
        execResult[1].length == 1
          ? patternObj[k as K]
          : patternObj[k as K].padStart(execResult[1].length, '0')
      )
    }
  }
  return fmt
}

const getTimestamp = (time?: number | Date) => {
  if (!time) time = new Date()
  return isNumber(time) ? time : time.getTime()
}

const getSecondTimestamp = (seconds = 1) => {
  return seconds * 1000
}

const getMinTimestamp = (min = 1) => {
  return min * getSecondTimestamp(60)
}

const getHourTimestamp = (hour = 1) => {
  return hour * getMinTimestamp(60)
}

const getDaysTimestamp = (days = 1) => {
  return days * 24 * getHourTimestamp(60)
}

const getWeekTimestamp = (week = 1) => {
  return week * getDaysTimestamp(7)
}

export const format = (time: number | Date, format = 'YYYY-mm-dd HH:MM:SS') => {
  return formatDate(isNumber(time) ? time : time.getTime(), format)
}

export const getTimestampBefore = (timestamp: number, carDate?: number | Date) => {
  return new Date(getTimestamp(carDate) - timestamp)
}

export const getTimestampAfter = (timestamp: number, carDate?: number | Date) => {
  return new Date(getTimestamp(carDate) - timestamp)
}

export const isDayBefore = (days: number | Date, carDate?: number | Date) => {
  return getTimestamp(carDate) < getTimestamp(days)
}

export const isDayAfter = (days: number | Date, carDate?: number | Date) => {
  return getTimestamp(carDate) > getTimestamp(days)
}

export const isDuringBetween = (
  start: number | Date,
  end: number | Date,
  curDate?: number | Date
) => {
  const date = getTimestamp(curDate)
  return date >= getTimestamp(start) && date <= getTimestamp(end)
}

export const getWeeKBefore = (weeks: number, carDate?: number | Date): Date => {
  return new Date(getTimestamp(carDate) - getWeekTimestamp(weeks))
}

export const getWeekAfter = (weeks: number, carDate?: number | Date) => {
  return new Date(getTimestamp(carDate) + getWeekTimestamp(weeks))
}
export const getDayBefore = (days: number, carDate?: number | Date): Date => {
  return new Date(getTimestamp(carDate) - getDaysTimestamp(days))
}

export const getDayAfter = (days: number, carDate?: number | Date) => {
  return new Date(getTimestamp(carDate) + getDaysTimestamp(days))
}

export const getHourBefore = (hours: number, carDate?: number | Date): Date => {
  return new Date(getTimestamp(carDate) - getHourTimestamp(hours))
}

export const getHourAfter = (hours: number, carDate?: number | Date) => {
  return new Date(getTimestamp(carDate) + getHourTimestamp(hours))
}

export const getMinBefore = (mins: number, carDate?: number | Date): Date => {
  return new Date(getTimestamp(carDate) - getMinTimestamp(mins))
}

export const getMinAfter = (mins: number, carDate?: number | Date) => {
  return new Date(getTimestamp(carDate) + getMinTimestamp(mins))
}
export const getSecondBefore = (seconds: number, carDate?: number | Date): Date => {
  return new Date(getTimestamp(carDate) - getSecondTimestamp(seconds))
}

export const getSecondAfter = (seconds: number, carDate?: number | Date) => {
  return new Date(getTimestamp(carDate) + getSecondTimestamp(seconds))
}

export const getDayStart = (carDate: number | Date): Date => {
  const { year, month, day } = getBaseDate(carDate)
  return new Date(year, month, day, 0, 0, 0)
}

export const getDayEnd = (carDate: number | Date): Date => {
  const { year, month, day } = getBaseDate(carDate)
  return new Date(year, month, day, 23, 59, 59)
}

export class Dayjs {
  public day: Date

  constructor(carDate?: number | Date) {
    this.day = carDate ? (isNumber(carDate) ? new Date(carDate) : carDate) : new Date()
  }

  get baseDate() {
    return getBaseDate(this.day)
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

  toString() {
    return this.day.toString()
  }
}

export const dayPipe = (Date?: number | Date) => new Dayjs(Date)
