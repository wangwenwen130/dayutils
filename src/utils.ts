import {
  REGEX_PARSE,
  isNumber,
  formatDate,
  getBaseDate,
  getTimestamp,
  getSecondTimestamp,
  getMinTimestamp,
  getHourTimestamp,
  getDaysTimestamp,
  getWeekTimestamp
} from './help'

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

export const countDownDate = (mark: number | Date, carDate?: number | Date) => {
  const cur = getTimestamp(carDate)
  const markTime = getTimestamp(mark)
  const diff = markTime - cur
  const days = Math.floor(diff / getDaysTimestamp(1)) // 计算剩余的天数
  const hours = Math.floor((diff % getHourTimestamp(24)) / getHourTimestamp(1)) // 计算剩余的小时数
  const minutes = Math.floor((diff % getMinTimestamp(60)) / getMinTimestamp(1)) //  计算剩余的分钟数
  const seconds = Math.floor((diff % getSecondTimestamp(60)) / 1000)
  return {
    days,
    hours,
    minutes,
    seconds
  }
}
