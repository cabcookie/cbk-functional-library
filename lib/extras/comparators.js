import { flow, get } from "lodash/fp";
import { argsToArray, map } from "../arrays/array-functions";
import { ifThenElse, isNullOrUndefined } from "../higher-order/higher-order-funtions";
import { upperCase } from "../strings/string-functions";
const compareValues = arr => (arr[0] > arr[1]) ? 1 :
    (arr[0] < arr[1]) ? -1 : 0;
const getComparableDate = date => (new Date(date)).getTime();
const compareDateValues = arr => getComparableDate(arr[0]) - getComparableDate(arr[1]);
const ascDesc = (order) => (val) => val === 0 ? 0 : order === 'desc' ? val * -1 : val;
const keyIsDefined = (key) => () => !isNullOrUndefined(key) && key !== "";
export const stringComparator = (key, order = "asc") => flow(argsToArray, ifThenElse(keyIsDefined(key), map(get(key))), map(upperCase), compareValues, ascDesc(order));
export const dateComparator = (key, order = "asc") => flow(argsToArray, ifThenElse(keyIsDefined(key), map(get(key))), compareDateValues, ascDesc(order));
