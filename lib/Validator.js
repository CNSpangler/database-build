const { getCaster } = require('./types');

class Validator {
  constructor(field, configuration) {
    this.field = field;
    this.configuration = configuration;
  }


  // constructor(field, { type, required }) {
  //   this.field = field;
  //   this.type = type;
  //   this.required = required;
  //   this.caster = getCaster(type);
  // }

  validate(obj) {
    const val = obj[this.field];
    if(this.required && !val) throw new Error(`${this.field} is required`);
    if(!this.required && !val) return null;
    
    return this.caster(val);
  }
}

const colorValidator = new Validator('color', {
  type: String,
  required: true
});

const ownedValidator = new Validator('owned', {
  type: Boolean,
  required: true
});

const yardsValidator = new Validator('yards', {
  type: Number,
  required: true
});

const ink = {
  color: 'dark blue',
  owned: true,
  yards: 350
};

colorValidator.validate(ink); // returns 'dark blue'
ownedValidator.validate(ink); // returns true
yardsValidator.validate(ink); // returns 350

module.exports = {
  Validator,
};
