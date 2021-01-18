import { flow, get } from "lodash/fp";
import { map } from "../arrays/array-functions";
import { upperCase } from "../strings/string-functions";
const compareValues = (arr) => (arr[0] > arr[1]) ? 1 :
    (arr[0] < arr[1]) ? -1 : 0;
const getComparableDate = (date) => (new Date(date)).getTime();
const compareDateValues = (arr) => getComparableDate(arr[0]) - getComparableDate(arr[1]);
const ascDesc = (order) => (val) => val === 0 ? 0 : order === 'desc' ? val * -1 : val;
export const stringComparator = (key = '', order = 'asc') => (str1, str2) => flow(map(get(key)), map(upperCase), compareValues, ascDesc(order))([str1, str2]);
export const dateComparator = (key = '', order = 'asc') => (date1, date2) => flow(map(get(key)), compareDateValues, ascDesc(order))([date1, date2]);
