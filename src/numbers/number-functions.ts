const languageSetting = "en-US"
export const mult = (b: number) => (a: number) => a * b
export const plus = (b: number) => (a: number) => a + b
export const minus = (b: number) => (a: number) => a - b
export const div = (b: number) => (a: number) => a / b
export const rest = (b: number) => (a: number) => a % b
export const localNumberString = (numb: number) => numb.toLocaleString(languageSetting)
