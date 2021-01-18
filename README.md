# cbk-functional-library

This library offers a lot of functional helpers I use a lot in my applications.
Mainly I want to allow most of Javascripts functionality to be used in a function pipeline.
A function pipeline replaces the use of functions this way 

```javascript
function doSomething(input) {
    const preparation = prepareTheData(input)
    const data = getDataFromAPI(preparation)
    const result = validateTheData(data)
    return result
}
```

by this way

```javascript
const doSomething = flow(
    prepareTheData,
    getDataFromAPI,
    validateTheData
)
```

which I think is way easier to read.
However, it also brings some challenges in terms of error handling and async calls.
In the coming weeks I will add some descriptions how to handle those using the library.

## Getting Started

Install the library using `npm`:

```ssh
npm install cbk-functional-library --save
```

Use the library by importing it:

```javascript
import { flow, ifThenElse, log, isDevEnvironment, addMinutes } from "cbk-functional-library"

const addHoursToDate = (date, hours) => flow(
    ifThenElse(isDevEnvironment, log("Called addHoursToDate")),
    (date) => addMinutes(date, hours*60),
    ifThenElse(isDevEnvironment, log("Result of addHoursToDate")),
)(date)

const inOneHour = addHoursToDate(new Date(), 1)
```

I think it is useful to just import the functions you want to use in your code as shown in the example above.

## Contribute and raise issues

Feel free to contribute to the library and send me a pull request in the [Github repo](https://github.com/cabcookie/cbk-functional-library). Also, feel free to raise an issue in the repo.

## Todos

- The library is missing test scenarios for now.
- The `README.md` should include a documentation for all functions.
