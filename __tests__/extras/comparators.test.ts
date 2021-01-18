const dateComparator = require("../../src/index").dateComparator
const date1 = { date: new Date() }
const date2 = { date: new Date("1970-01-01") }

describe("testing data comparision with no order", () => {
    test("compare same dates should return 0", () => {
        expect(dateComparator("date")(date1, date1)).toEqual(0)
    })
    test("compare today and 1970 should return greater than 0", () => {
        expect(dateComparator("date")(date1, date2)).toBeGreaterThan(0)
    })
    test("compare 1970 and today should return less than 0", () => {
        expect(dateComparator("date")(date2, date1)).toBeLessThan(0)
    })
})

describe("testing data comparision with ascending order", () => {
    test("compare same dates should return 0", () => {
        expect(dateComparator("date", "asc")(date1, date1)).toEqual(0)
    })
    test("compare today and 1970 should return greater than 0", () => {
        expect(dateComparator("date", "asc")(date1, date2)).toBeGreaterThan(0)
    })
    test("compare 1970 and today should return less than 0", () => {
        expect(dateComparator("date", "asc")(date2, date1)).toBeLessThan(0)
    })
})

describe("testing data comparision with descending order", () => {
    test("compare same dates should return 0", () => {
        expect(dateComparator("date", "desc")(date1, date1)).toEqual(0)
    })
    test("compare today and 1970 should return less than 0", () => {
        expect(dateComparator("date", "desc")(date1, date2)).toBeLessThan(0)
    })
    test("compare 1970 and today should return greater than 0", () => {
        expect(dateComparator("date", "desc")(date2, date1)).toBeGreaterThan(0)
    })
})
