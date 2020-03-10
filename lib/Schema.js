const Validator = require('./lib/Validator');
const schema = {
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
};


const validators = Object.entries(schema)
  .map(([field, configuration]) => new Validator(field, configuration));

const dog = {
  name: 1234,
  age: 5,
  weight: '20 lbs'
};

const validated = {};
validators.forEach(validator => {
  validated[validator.field] = validator.validate(dog);
});
console.log(validated);


// class Schema {
//   constructor(color, yards, owned) {
//     this.color =  color;
//     this.owned =  owned;
//     this.yards =  yards;
//   }
// }

// const schema = new Schema({
//   color: {
//     type: String,
//     required: true
//   },
//   yards: {
//     type: Number,
//     required: true
//   },
//   owned: {
//     type: Boolean,
//     required: true
//   }
// });

// const ink = {
//   color: 'blue',
//   owned: true,
//   yards: 350
// };

// schema.validate(ink);
