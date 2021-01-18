const dateComparator = require("../../src/index").dateComparator
const date1 = new Date()
const date2 = new Date("1970-01-01")
const dateObj1 = { date: date1 }
const dateObj2 = { date: date2 }

describe("testing data comparision with a key of an object with no order", () => {
    test("compare same dates should return 0", () => {
        expect(dateComparator("date")(dateObj1, dateObj1)).toEqual(0)
    })
    test("compare today and 1970 should return greater than 0", () => {
        expect(dateComparator("date")(dateObj1, dateObj2)).toBeGreaterThan(0)
    })
    test("compare 1970 and today should return less than 0", () => {
        expect(dateComparator("date")(dateObj2, dateObj1)).toBeLessThan(0)
    })
})

describe("testing data comparision with a key of an object with ascending order", () => {
    test("compare same dates should return 0", () => {
        expect(dateComparator("date", "asc")(dateObj1, dateObj1)).toEqual(0)
    })
    test("compare today and 1970 should return greater than 0", () => {
        expect(dateComparator("date", "asc")(dateObj1, dateObj2)).toBeGreaterThan(0)
    })
    test("compare 1970 and today should return less than 0", () => {
        expect(dateComparator("date", "asc")(dateObj2, dateObj1)).toBeLessThan(0)
    })
})

describe("testing data comparision with a key of an object with descending order", () => {
    test("compare same dates should return 0", () => {
        expect(dateComparator("date", "desc")(dateObj1, dateObj1)).toEqual(0)
    })
    test("compare today and 1970 should return less than 0", () => {
        expect(dateComparator("date", "desc")(dateObj1, dateObj2)).toBeLessThan(0)
    })
    test("compare 1970 and today should return greater than 0", () => {
        expect(dateComparator("date", "desc")(dateObj2, dateObj1)).toBeGreaterThan(0)
    })
})

describe("testing data comparision with a date with no order", () => {
    test("compare same dates should return 0", () => {
        expect(dateComparator()(date1, date1)).toEqual(0)
    })
    test("compare today and 1970 should return greater than 0", () => {
        expect(dateComparator()(date1, date2)).toBeGreaterThan(0)
    })
    test("compare 1970 and today should return less than 0", () => {
        expect(dateComparator()(date2, date1)).toBeLessThan(0)
    })
})

describe("testing data comparision with a date with ascending order", () => {
    test("compare same dates should return 0", () => {
        expect(dateComparator("", "asc")(date1, date1)).toEqual(0)
    })
    test("compare today and 1970 should return greater than 0", () => {
        expect(dateComparator("", "asc")(date1, date2)).toBeGreaterThan(0)
    })
    test("compare 1970 and today should return less than 0", () => {
        expect(dateComparator("", "asc")(date2, date1)).toBeLessThan(0)
    })
})

describe("testing data comparision with a date with descending order", () => {
    test("compare same dates should return 0", () => {
        expect(dateComparator("", "desc")(date1, date1)).toEqual(0)
    })
    test("compare today and 1970 should return less than 0", () => {
        expect(dateComparator("", "desc")(date1, date2)).toBeLessThan(0)
    })
    test("compare 1970 and today should return greater than 0", () => {
        expect(dateComparator("", "desc")(date2, date1)).toBeGreaterThan(0)
    })
})

const stringComparator = require("../../src/index").stringComparator
const string1 = "World? Are you there?"
const string2 = "Hello World!"
const stringObj1 = { string: string1 }
const stringObj2 = { string: string2 }

describe("testing string comparision with a key of an object with no order", () => {
    test("compare same strings should return 0", () => {
        expect(stringComparator("string")(stringObj1, stringObj1)).toEqual(0)
    })
    test("compare first string and second should return greater than 0", () => {
        expect(stringComparator("string")(stringObj1, stringObj2)).toBeGreaterThan(0)
    })
    test("compare second and first string should return less than 0", () => {
        expect(stringComparator("string")(stringObj2, stringObj1)).toBeLessThan(0)
    })
})

describe("testing string comparision with a key of an object with ascending order", () => {
    test("compare same strings should return 0", () => {
        expect(stringComparator("string", "asc")(stringObj1, stringObj1)).toEqual(0)
    })
    test("compare first string and second should return greater than 0", () => {
        expect(stringComparator("string", "asc")(stringObj1, stringObj2)).toBeGreaterThan(0)
    })
    test("compare second and first string should return less than 0", () => {
        expect(stringComparator("string", "asc")(stringObj2, stringObj1)).toBeLessThan(0)
    })
})

describe("testing string comparision with a key of an object with descending order", () => {
    test("compare same strings should return 0", () => {
        expect(stringComparator("string", "desc")(stringObj1, stringObj1)).toEqual(0)
    })
    test("compare first string and second should return less than 0", () => {
        expect(stringComparator("string", "desc")(stringObj1, stringObj2)).toBeLessThan(0)
    })
    test("compare second and first string should return greater than 0", () => {
        expect(stringComparator("string", "desc")(stringObj2, stringObj1)).toBeGreaterThan(0)
    })
})

describe("testing string comparision with a string with no order", () => {
    test("compare same strings should return 0", () => {
        expect(stringComparator()(string1, string1)).toEqual(0)
    })
    test("compare first string and second should return greater than 0", () => {
        expect(stringComparator()(string1, string2)).toBeGreaterThan(0)
    })
    test("compare second and first string should return less than 0", () => {
        expect(stringComparator()(string2, string1)).toBeLessThan(0)
    })
})

describe("testing string comparision with a string with ascending order", () => {
    test("compare same strings should return 0", () => {
        expect(stringComparator("", "asc")(string1, string1)).toEqual(0)
    })
    test("compare first string and second should return greater than 0", () => {
        expect(stringComparator("", "asc")(string1, string2)).toBeGreaterThan(0)
    })
    test("compare second and first string should return less than 0", () => {
        expect(stringComparator("", "asc")(string2, string1)).toBeLessThan(0)
    })
})

describe("testing string comparision with a string with descending order", () => {
    test("compare same strings should return 0", () => {
        expect(stringComparator("", "desc")(string1, string1)).toEqual(0)
    })
    test("compare first string and second should return less than 0", () => {
        expect(stringComparator("", "desc")(string1, string2)).toBeLessThan(0)
    })
    test("compare second and first string should return greater than 0", () => {
        expect(stringComparator("", "desc")(string2, string1)).toBeGreaterThan(0)
    })
})
