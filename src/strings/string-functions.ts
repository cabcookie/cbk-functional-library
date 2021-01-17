export const upperCase = (val: string | any) => (typeof val === 'string') ? val.toUpperCase() : val
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
export const replace = (toReplace: string, replacyBy: string) => (str: string) => str.replace(toReplace, replacyBy)
export const str = (str: string) => () => str
export const strFill = (fill: string, digits: number) => (str: string) => (`${fill}`.repeat(digits) + `${str}`).slice(-digits)
export const prepend = (pre: string) => (str: string) => `${pre}${str}`
export const append = (post: string) => (str: string) => `${str}${post}`
export const left = (count: number) => (str: string) => str.substring(0, count)
export const right = (count: number) => (str: string) => str.substring(str.length-count, str.length+1)
export const mid = (first: number, length: number) => (str: string) => str.substring(first-1, first+length-1)
