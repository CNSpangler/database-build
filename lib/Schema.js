const Validator = require('./lib/Validator');

class Schema {
  constructor(schemaDefinition) {
    this.schemaDefinition = schemaDefinition;
    this.validators = Object.entries(schemaDefinition)
      .map(([key, object]) => new Validator(key, object)
      );
  }
}

const validated = {};

this.validateSchemaMethod(obj) {
  let newObject = {};
  this.validators.forEach(validator => {
    newObject[validator.key] = validator.validate(obj);
  });
  return newObject;
}

const schema = new Schema ({
  color: {
    type: String,
    required: true
  },
  owned: {
    type: Boolean,
    required: true
  },
  yards: {
    type: Number
  }
});

const validators = 
console.log(validators); // -> our schema needs to iterate through these validators
validators.forEach(validator => {
  validator.validate(ink);
});

const ink = {
  color: 'dark blue',
  owned: true,
  yards: 350
};

schema.validate(ink);

module.exports = { Schema };


// class Schema {
//   constructor(color, owned, yards) {
//     this.color = color;
//     this.owned = owned;
//     this.yards = yards;
//   }
// }

// const schema = new Schema {
//   color: {
//     type: String,
//     required: true
//   },
//   owned: {
//     type: Boolean,
//     required: true
//   },
//   yards: {
//     type: Number
//   }
// };

// const validators = Object.entries(schema)
//   .map(([field, configuration]) => new Validator(field, configuration));

// const ink = {
//   color: 'dark blue',
//   owned: true,
//   yards: 350
// };

// const validated = {};
// validators.forEach(validator => {
//   validated[validator.field] = validator.validate(ink);
// });
// console.log(validated);

