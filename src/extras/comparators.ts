import { flow, get } from "lodash/fp"
import { map } from "../arrays/array-functions"
import { upperCase } from "../strings/string-functions"

type FixedSizeArray<N extends number, T> = N extends 0 ? never[] : {
    0: T;
    length: N;
} & ReadonlyArray<T>

type AscDescString = "asc" | "desc"



const compareValues = (arr: FixedSizeArray<2, string>) => (arr[0] > arr[1]) ? 1 :
    (arr[0] < arr[1]) ? -1 : 0
const getComparableDate = (date: Date) => (new Date(date)).getTime()
const compareDateValues = (arr: FixedSizeArray<2, Date>) => getComparableDate(arr[0]) - getComparableDate(arr[1])
const ascDesc = (order: AscDescString) => (val: number) => val === 0 ? 0 : order === 'desc' ? val * -1 : val

export const stringComparator = (key = '', order: AscDescString = 'asc') => (str1: string, str2: string) => flow(
    map(get(key)),
    map(upperCase),
    compareValues,
    ascDesc(order)
)([str1, str2])

export const dateComparator = (key = '', order: AscDescString = 'asc') => (date1: Date, date2: Date) => flow(
    map(get(key)),
    compareDateValues,
    ascDesc(order),
)([date1, date2])
