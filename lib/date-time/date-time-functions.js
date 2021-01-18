"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minutesToHhMm = exports.secondsToMmSs = exports.secondsToHhMmSs = exports.shortTime = exports.shortDateTime = exports.shortDate = exports.toISOString = exports.addDays = exports.addMinutes = exports.addSeconds = exports.setTimer = exports.now = exports.makeDate = void 0;

var _fp = require("lodash/fp");

const languageSetting = "de";

const makeDate = str => new Date(str);

exports.makeDate = makeDate;

const now = () => new Date();

exports.now = now;

const clearTimer = timer => () => clearTimeout(timer);

const setTimer = (0, _fp.flow)(setTimeout, clearTimer);
exports.setTimer = setTimer;

const addSeconds = (date, secs) => {
  const d = new Date(date);
  return new Date(d.getTime() + secs * 1000);
};

exports.addSeconds = addSeconds;

const addMinutes = (date, mins) => addSeconds(date, mins * 60);

exports.addMinutes = addMinutes;

const addDays = days => date => {
  const d = new Date(date);
  d.setDate(date.getDate() + days);
  return d;
};

exports.addDays = addDays;

const toISOString = date => date.toISOString();

exports.toISOString = toISOString;

const shortDate = date => new Date(date).toLocaleDateString(languageSetting, {
  weekday: "short",
  year: "numeric",
  month: "2-digit",
  day: "numeric"
});

exports.shortDate = shortDate;

const shortDateTime = date => new Date(date).toLocaleDateString(languageSetting, {
  weekday: "short",
  month: "2-digit",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});

exports.shortDateTime = shortDateTime;

const shortTime = date => new Date(date).toLocaleTimeString(languageSetting, {
  hour: "2-digit",
  minute: "2-digit"
});

exports.shortTime = shortTime;

const make2Digit = i => (i < 10 ? "0" : "") + i;

const secondsToHhMmSs = seconds => {
  const h = Math.floor(seconds / (60 * 60));
  const m = Math.floor(seconds % (60 * 60) / 60);
  const s = Math.floor(seconds % 60);
  return make2Digit(h) + ":" + make2Digit(m) + ":" + make2Digit(s);
};

exports.secondsToHhMmSs = secondsToHhMmSs;

const secondsToMmSs = seconds => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return m + ":" + make2Digit(s);
};

exports.secondsToMmSs = secondsToMmSs;
const minutesToHhMm = secondsToMmSs;
exports.minutesToHhMm = minutesToHhMm;