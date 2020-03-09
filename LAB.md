# Type checking and casting

Type Checking
: check that a value matches an expected type (e.g. string, number, boolean, etc.).

Type casting
: change a value into into a type (e.g. "1" -> 1, 12 -> "12", true -> 1).

## What?

For this lab we'll be writing functions that will type check and type cast for
us.

### Type Checking

Our type checking functions will take a value. It will return `true` if the value
matches the type, otherwise it will return `false`

```js
isString('hi')
// -> true

isNumber('hi')
// -> false
```

### Type Casting

Our type casting functions will take a value. It will cast the value into a type
if possible, otherwise it will `throw` an error.

```js
castToString(100)
// -> '100'

castToNumber('40')
// -> 40

castToNumber('hi')
// -> throw Cannot cast >>hi<< to Number
```

## Why?

This is the initial step to building our database. As items are inserted into
our database, we want to ensure that those items all match some pattern.

The first step is to make sure that we type check each item.

## Where?

Write your code in `lib/types.js` and your tests in `lib/types.test.js`.
