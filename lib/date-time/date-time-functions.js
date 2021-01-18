"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minutesToHhMm = exports.secondsToMmSs = exports.secondsToHhMmSs = exports.shortTime = exports.shortDateTime = exports.shortDate = exports.toISOString = exports.addDays = exports.addMinutes = exports.addSeconds = exports.setTimer = exports.now = exports.makeDate = void 0;
var fp_1 = require("lodash/fp");
var languageSetting = "de";
var makeDate = function (str) { return new Date(str); };
exports.makeDate = makeDate;
var now = function () { return new Date(); };
exports.now = now;
var clearTimer = function (timer) { return function () { return clearTimeout(timer); }; };
exports.setTimer = fp_1.flow(setTimeout, clearTimer);
var addSeconds = function (date, secs) {
    var d = new Date(date);
    return new Date(d.getTime() + secs * 1000);
};
exports.addSeconds = addSeconds;
var addMinutes = function (date, mins) { return exports.addSeconds(date, mins * 60); };
exports.addMinutes = addMinutes;
var addDays = function (days) { return function (date) {
    var d = new Date(date);
    d.setDate(date.getDate() + days);
    return d;
}; };
exports.addDays = addDays;
var toISOString = function (date) { return date.toISOString(); };
exports.toISOString = toISOString;
var shortDate = function (date) { return new Date(date).toLocaleDateString(languageSetting, {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "numeric"
}); };
exports.shortDate = shortDate;
var shortDateTime = function (date) { return new Date(date).toLocaleDateString(languageSetting, {
    weekday: "short",
    month: "2-digit",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
}); };
exports.shortDateTime = shortDateTime;
var shortTime = function (date) { return new Date(date).toLocaleTimeString(languageSetting, {
    hour: "2-digit",
    minute: "2-digit",
}); };
exports.shortTime = shortTime;
var make2Digit = function (i) { return (i < 10 ? "0" : "") + i; };
var secondsToHhMmSs = function (seconds) {
    var h = Math.floor(seconds / (60 * 60));
    var m = Math.floor(seconds % (60 * 60) / 60);
    var s = Math.floor(seconds % 60);
    return make2Digit(h) + ":" + make2Digit(m) + ":" + make2Digit(s);
};
exports.secondsToHhMmSs = secondsToHhMmSs;
var secondsToMmSs = function (seconds) {
    var m = Math.floor(seconds / 60);
    var s = Math.floor(seconds % 60);
    return m + ":" + make2Digit(s);
};
exports.secondsToMmSs = secondsToMmSs;
exports.minutesToHhMm = exports.secondsToMmSs;
