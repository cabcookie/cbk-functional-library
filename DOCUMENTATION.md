# Documentation for cbk-functional-library

## `flow`

The function is imported from [lodash](https://lodash.com/docs/4.17.15#flow).

## `get`

The function is imported from [lodash](https://lodash.com/docs/4.17.15#get).

## `ifThenElse(ifFunc, thenFunc, elseFunc?)`

Creates a new function that expects an `input` value and validates it with the `ifFunc`. The function should return `true` or `false`. If the function returns `true` the `thenFunc` will be involked with the value `input`. if the `ifFunc` returns false, the `elseFunc` will be invoked with the value `input`.

### Since

0.0.18

### Arguments

* `ifFunc` *`(Function)`*: A function that should return a boolean value.
* `thenFunc` *`(Function)`*: A function that will be called with the `input` when `ifFunc` returned `true`.
* `elseFunc` *`(Function?)`*: A function that will be called with the `input` when `ifFunc` returned `false`. If `elseFunc` is not provided and `ifFunc` returned false, `input` will be returned.

### Returns

*`(Function)`*: Returns a new function that expects an `input` to be tested with the `ifFunc`.

### Examples

```javascript
const checkIfPositive = ifThenElse(
    val => val >= 0,
    val => `${val} is positive`,
    val => `${val} is negative`
)

// returns '10 is positive'
console.log(checkIfPositive(10))

// returns '-5 is negative'
console.log(checkIfPositive(-5))
```

## `isNotNullAndTrue`

Creates a new function that expects an `input` value and validates if the result of that function is not `null` and `true`. It returns `true` if both is the case. Otherwise that new function returns `false`.

### Since

0.0.18

### Arguments

* `func` *`(Function)`*: A function that will be called with the `input` value and should then return `null` or a boolean value.

### Returns

*`(Function)`*: Returns a new function that expects an `input` to be tested if it returns not `null` and `true`.

### Examples

```javascript
const funcReturnsNull = isNotNullAndTrue(() => null)
const funcReturnsFalse = isNotNullAndTrue(() => false)
const funcReturnsTrue = isNotNullAndTrue(() => true)

// returns true
console.log(funcReturnsTrue())

// returns false
console.log(funcReturnsFalse())

// returns false
console.log(funcReturnsNull())
```

## `map`

The function is imported from [lodash](https://lodash.com/docs/4.17.15#map).

## `set`

The function is imported from [lodash](https://lodash.com/docs/4.17.15#set).
