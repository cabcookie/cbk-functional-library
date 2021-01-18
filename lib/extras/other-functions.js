"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDevEnvironment = void 0;
const isDevEnvironment = process.env.NODE_ENV === "development";
exports.isDevEnvironment = isDevEnvironment;