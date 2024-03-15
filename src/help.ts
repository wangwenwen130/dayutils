// regex
export const REGEX_PARSE =
  /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/

export const REGEX_FORMAT =
  /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g

export const isNumber = (val: unknown): val is number => {
  return toString.call(val) === `[object Number]`
}

export function formatDate(time: number | Date, fmt = 'YYYY-mm-dd HH:MM:SS') {
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

export const getBaseDate = (time: number | Date) => {
  const day = isNumber(time) ? new Date(time) : time
  return {
    year: day.getFullYear(),
    month: day.getMonth() + 1,
    day: day.getDate(),
    week: day.getDay(),
    hours: day.getHours(),
    minutes: day.getMinutes(),
    seconds: day.getSeconds(),
    date: day.getTime(),
    quarter: Math.floor((day.getMonth() + 3) / 3) // 季度
  }
}

export const getTimestamp = (time?: number | Date) => {
  if (!time) time = Date.now()
  return isNumber(time) ? time : time.getTime()
}

export const getSecondTimestamp = (seconds = 1) => {
  return seconds * 1000
}

export const getMinTimestamp = (min = 1) => {
  return min * getSecondTimestamp(60)
}

export const getHourTimestamp = (hour = 1) => {
  return hour * getMinTimestamp(60)
}

export const getDaysTimestamp = (days = 1) => {
  return days * getHourTimestamp(24)
}

export const getWeekTimestamp = (week = 1) => {
  return week * getDaysTimestamp(7)
}
