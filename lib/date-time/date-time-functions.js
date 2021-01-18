import { flow } from "lodash/fp";
const languageSetting = "de";
export const makeDate = (str) => new Date(str);
export const now = () => new Date();
const clearTimer = (timer) => () => clearTimeout(timer);
export const setTimer = flow(setTimeout, clearTimer);
export const addSeconds = (date, secs) => {
    const d = new Date(date);
    return new Date(d.getTime() + secs * 1000);
};
export const addMinutes = (date, mins) => addSeconds(date, mins * 60);
export const addDays = (days) => (date) => {
    const d = new Date(date);
    d.setDate(date.getDate() + days);
    return d;
};
export const toISOString = (date) => date.toISOString();
export const shortDate = (date) => new Date(date).toLocaleDateString(languageSetting, {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "numeric"
});
export const shortDateTime = (date) => new Date(date).toLocaleDateString(languageSetting, {
    weekday: "short",
    month: "2-digit",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
});
export const shortTime = (date) => new Date(date).toLocaleTimeString(languageSetting, {
    hour: "2-digit",
    minute: "2-digit",
});
const make2Digit = (i) => (i < 10 ? "0" : "") + i;
export const secondsToHhMmSs = (seconds) => {
    const h = Math.floor(seconds / (60 * 60));
    const m = Math.floor(seconds % (60 * 60) / 60);
    const s = Math.floor(seconds % 60);
    return make2Digit(h) + ":" + make2Digit(m) + ":" + make2Digit(s);
};
export const secondsToMmSs = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ":" + make2Digit(s);
};
export const minutesToHhMm = secondsToMmSs;
