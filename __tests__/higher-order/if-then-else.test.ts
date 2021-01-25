import { ifThenElse } from '../../src'

describe("test ifThenElse function", () => {
    const testStr = "test"
    const testNum = 123
    const returnsTrue = obj => true
    const returnsFalse = obj => false
    const returnsStr = obj => testStr
    const returnsNum = obj => testNum
    const returnsInput = obj => obj

    test("if true then function returns string", () => {
        const fn = ifThenElse(returnsTrue, returnsStr)
        expect(fn("whatever")).toBe(testStr)
    })
    test("if false then function returns string", () => {
        const fn = ifThenElse(returnsFalse, returnsFalse, returnsStr)
        expect(fn("whatever")).toBe(testStr)
    })
    test("if true then function returns number", () => {
        const fn = ifThenElse(returnsTrue, returnsNum)
        expect(fn("whatever")).toBe(testNum)
    })
    test("if false then function returns number", () => {
        const fn = ifThenElse(returnsFalse, returnsFalse, returnsNum)
        expect(fn("whatever")).toBe(testNum)
    })
    test("if true then function returns input", () => {
        const fn = ifThenElse(returnsTrue, returnsInput)
        expect(fn("whatever")).toBe("whatever")
    })
    test("if true then function returns input", () => {
        const fn = ifThenElse(returnsFalse, returnsFalse, returnsInput)
        expect(fn("whatever")).toBe("whatever")
    })
})
