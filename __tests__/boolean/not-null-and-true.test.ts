import { isNotNullAndTrue } from "../../src"

describe("test isNotNullAndTrue function", () => {
    const fnReturnNull = isNotNullAndTrue(() => null)
    const fnReturnFalse = isNotNullAndTrue(() => false)
    const fnReturnTrue = isNotNullAndTrue(() => true)

    test("should return true when true", () => {
        expect(fnReturnTrue()).toBe(true)
    })
    test("should return false when false", () => {
        expect(fnReturnFalse()).toBe(false)
    })
    test("should return false when null", () => {
        expect(fnReturnNull()).toBe(false)
    })
})