import { flow } from 'lodash/fp'

export const isArray = (arr: [any]) => Array.isArray(arr)
export const isEmptyArray = (arr: [any]) => arr && !(arr.length > 0)
export const argsToArray = (...args: any) => args
export const createArray = (val = null) => (count: number) => Array.apply(val, Array(count))
const getItem = (arr: [any]) => (index: number) => arr[index]
export const isFirstItem = (idx: number) => () => idx === 0
export const map = (fn: (...args: any) => any) => (arr: [any]) => arr.map(fn)
export const match = (regex: string) => (str: string) => str.match(regex) || []
export const split = (separator: string) => (str: string) => str.split(separator)
export const join = (separator: string) => (arr: [any]) => arr.join(separator)
export const filter = (filterFn: (...args: any) => any) => (arr: [any]) => arr.filter(filterFn)
export const sort = (comparisionFn: (...args: any) => number) => (arr: [any]) => arr.sort(comparisionFn)
export const getFirstItem = (arr: [any]) => arr[0]
export const filterFirstItem = (filterFn: (...args: any) => any) => (arr: [any]) => filter(filterFn)(arr) && filter(filterFn)(arr)[0]
export const filterFirstItemGetKey = (filterFn: (...args: any) => any, key: string) => (arr: [any]) => filterFirstItem(filterFn)(arr) && filterFirstItem(filterFn)(arr)[key]
export const slice = (indexFrom: number, indexTo: number | undefined ) => (arr: [any]) => arr.slice(indexFrom, indexTo) 
export const push = (...args: any) => (arr: [any]) => {
    const newArr = [...arr]
    newArr.push(...args)
}
export const pop = () => (arr: [any]) => {
    const newArr = [...arr]
    newArr.pop()
}
export const shift = () => (arr: [any]) => {
    const newArr = [...arr]
    newArr.shift()
}
export const unshift = (...args: any) => (arr: [any]) => {
    const newArr = [...arr]
    newArr.unshift(...args)
}
export const remove = (index: number) => (arr: [any]) => {
    if (index < 0) throw new Error("Index value is outside of the array")
    if (index >= arr.length) throw new Error("Index value is outside of the array")
    const arr1 = index === 0 ? [] : slice(0, index)(arr)
    const arr2 = index === arr.length-1 ? [] : slice(index+1, arr.length)(arr)
    return [...arr1, ...arr2]
}
export const add = (index: number, ...items: [any]) => (arr: [any]) => {
    if (index < 0) throw new Error("Index value is outside of the array")
    if (index > arr.length) throw new Error("Index value is outside of the array")
    const arr1 = index === 0 ? [...items] : flow(slice(0, index), push(...items))(arr)
    const arr2 = index === arr.length ? [] : slice(index, arr.length)(arr)
    return [...arr1, ...arr2]
}
export const move = (oldIndex: number, newIndex: number) => (arr: [any]) => {
    if (oldIndex === newIndex) return arr
    if (oldIndex < 0 || oldIndex >= arr.length) throw new Error("Old index value is outside of the array.")
    if (newIndex < 0 || newIndex >= arr.length) throw new Error("New index value is outside of the array.")
    const itemToMove = arr[oldIndex]
    const arr1 = newIndex < oldIndex ?
        newIndex === 0 ? [itemToMove] : flow(slice(0, newIndex), push(itemToMove))(arr) :
        oldIndex === 0 ? [] : slice(0, oldIndex)(arr)
    const arr2 = newIndex < oldIndex ? slice(newIndex, oldIndex)(arr) : flow(slice(oldIndex+1, newIndex+1), push(itemToMove))(arr)
    const arr3 = newIndex < oldIndex ?
        oldIndex === arr.length-1 ? [] : slice(oldIndex+1, arr.length)(arr) :
        newIndex === arr.length-1 ? [] : slice(newIndex+1, arr.length)(arr)
    return [...arr1, ...arr2, ...arr3]
}
