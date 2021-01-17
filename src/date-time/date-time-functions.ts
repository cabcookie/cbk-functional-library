import { flow } from "lodash/fp"
import { defaultFn, runFnOfObj } from "../higher-order/higher-order-funtions"
import { upperCase } from "../strings/string-functions"

const languageSetting = "de"
export const makeDate = (str: string) => new Date(str)
export const now = () => new Date()
const clearTimer = (timer: any) => () => clearTimeout(timer)
export const setTimer = flow(setTimeout, clearTimer)
export const addSeconds = (date: Date | string, secs: number) => {
    const d = new Date(date)
    return new Date(d.getTime() + secs*1000)
}
export const addMinutes = (date: Date | string, mins: number) => addSeconds(date, mins*60)
export const addDays = (days: number) => (date: Date) => {
    const d = new Date(date)
    d.setDate(date.getDate() + days)
    return d
}
export const toISOString = (date: Date) => date.toISOString()

export const shortDate = (date: Date | string) => new Date(date).toLocaleDateString(languageSetting, {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "numeric"
})
export const shortDateTime = (date: Date | string) => new Date(date).toLocaleDateString(languageSetting, {
    weekday: "short",
    month: "2-digit",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
})
export const shortTime = (date: Date | string) => new Date(date).toLocaleTimeString(languageSetting, {
    hour: "2-digit",
    minute: "2-digit",
})

const make2Digit = (i: number) => (i < 10 ? "0" : "") + i
export const secondsToHhMmSs = (seconds: number) => {
    const h = Math.floor(seconds / (60*60))
    const m = Math.floor(seconds % (60*60) / 60)
    const s = Math.floor(seconds % 60)
    return make2Digit(h) + ":" + make2Digit(m) + ":" + make2Digit(s)
}

export const secondsToMmSs = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    return m + ":" + make2Digit(s)
}
export const minutesToHhMm = secondsToMmSs
