export const isNotNullAndTrue: (fn: (...args: any) => boolean) => (...args: any) => boolean = fn => (...args) => {
    const result = fn(...args)
    return result !== null && result
}
