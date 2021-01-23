import { flow, get } from '../src/index'

describe("test flow function", () => {
    type TestFunctionNumber = (str: String) => Number
    type TestFunctionString = (str: String) => String
    const testFnStr: TestFunctionString = str => str
    const testFnNumb: TestFunctionNumber = str => 123
    const testFlowSuccess: (str: String) => Number = flow(testFnStr, testFnNumb)

    // with this function ESLint shows already an error.
    // A test asking for a string would succeed though
    const testFlowFail: (str: String) => Number = flow(testFnStr, testFnStr)

    test("testing flow with correct types should succeed", () => {
        expect(testFlowSuccess("test")).toBe(123)
    })
})

describe("test get function", () => {
    const complexObject = {
        keyStr: "test",
        keyArr: [
            {
                keyStr: "anotherTest",
                keyNumb: 2,
            }, {
                keyStr: "successfull",
                keyNumb: 33,
            }
        ],
    }

    test("get simple key 'keyStr'", () => {
        expect(get("keyStr", complexObject)).toBe("test")
    })
    test("get first value from array", () => {
        expect(get("keyArr[0]", complexObject)).toEqual({
            keyStr: "anotherTest",
            keyNumb: 2,
        })
    })
    test("get first value from array and key 'keyNumb'", () => {
        expect(get("keyArr[0].keyNumb", complexObject)).toEqual(2)
    })
})