import { defaultFn } from '../../src'

describe("test defaultFn", () => {
    const str = "test"
    const num = 123
    const obj = { test: "test", num: 123 }

    test("a string should return that string", () => {
        expect(defaultFn(str)).toBe(str)
    })
    test("a number should return that number", () => {
        expect(defaultFn(num)).toBe(num)
    })
    test("an object should return that object", () => {
        expect(defaultFn(obj)).toBe(obj)
    })
})