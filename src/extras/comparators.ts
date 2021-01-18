import { flow, get } from "lodash/fp"
import { argsToArray, map } from "../arrays/array-functions"
import { ifThenElse, isNullOrUndefined } from "../higher-order/higher-order-funtions"
import { upperCase } from "../strings/string-functions"
import { AscDescString, FixedSizeArray, GetNumberReturnNumber, HasKey, FunctionWithTwoParamsReturnNumber } from "./type-helpers"


const compareValues: (arr: FixedSizeArray<2, string>) => number = arr => (arr[0] > arr[1]) ? 1 :
    (arr[0] < arr[1]) ? -1 : 0
const getComparableDate: (date: Date) => number = date => (new Date(date)).getTime()
const compareDateValues: (arr: FixedSizeArray<2, Date>) => number = arr => getComparableDate(arr[0]) - getComparableDate(arr[1])
const ascDesc: (order: AscDescString) => GetNumberReturnNumber = (order) => (val) => val === 0 ? 0 : order === 'desc' ? val * -1 : val
const keyIsDefined: (key: string) => () => boolean = (key) => () => !isNullOrUndefined(key) && key !== ""

export const stringComparator: <K extends string>(key: K, order: AscDescString) => FunctionWithTwoParamsReturnNumber<string | HasKey<K, string>> = (key, order = "asc") => flow(
    argsToArray,
    ifThenElse(keyIsDefined(key), map(get(key))),
    map(upperCase),
    compareValues,
    ascDesc(order)
)

export const dateComparator: <K extends string>(key: K, order: AscDescString) => FunctionWithTwoParamsReturnNumber<Date | HasKey<K, Date>> = (key, order = "asc") => flow(
    argsToArray,
    ifThenElse(keyIsDefined(key), map(get(key))),
    compareDateValues,
    ascDesc(order),
)
