# Schemas

Schema
: the pattern each item in a collection should match

## What?

### Validator

`Validator` is a class that is used to check and cast a single field in an object.

```js
class Validator {
  constructor() {

  }

  validate(obj) {
    // do work here
  }
}
it('validates name', () => {
  const nameValidator = new Validator('name', {
    type: String,
    required: true
  });

  expect(nameValidator.validate({ name: 'spot' })).toEqual('spot');
})

const spot = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};

const one = {
  name: 1,
  age: 10,
  weight: '100 lbs'
};

const nameless = {
  age: 10,
  weight: '100 lbs'
};

nameValidator.validate(spot) // -> 'spot'
nameValidator.validate(one) // -> '1'
nameValidator.validate(nameless) // -> throws name is required
```

`Validator` is instantiated with a field name and configuration:

* `fieldName` is the name of the field that the validator will check
* `configuration` is an object specifying the type of the field and whether it is required

### Schema

`Schema` class is used to validate and cast an entire object.

```js
const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: String
  }
});

const spot = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};

const one = {
  name: 1,
  age: 10,
  weight: '100 lbs'
};

const nameless = {
  age: 10,
  weight: '100 lbs'
};

schema.validate(spot) // returns { name: 'spot', age: 5, weight: '20 lbs' }
schema.validate(one) // returns { name: '1', age: 10, weight: '100 lbs' }
schema.validate(nameless) // throws invalid schema >> [name is required]
```

## Why?

Before we insert items into our database we want to make sure the item matches
a schema. Our `Schema` class will return an item that we will insert into our
database or error if we cannot insert the item into our database.

In order to validate each field we can create a `Validator` class that can check
an individual field in an object.

## Where?

Write your code in `lib/Schema.js` and `lib/Validator.js`. Write your tests in
`lib/Schema.test.js` and `lib/Validator.test.js`
