const { getCaster } = require('./types');

module.exports = class Validator {
  // Validator takes two properties
  // field - which is the field we are going to validate
  // configuration - which gives us info about how to validate
  constructor(field, configuration) {
    this.field = field;
    this.configuration = configuration;
  }

  // obj - is the object we want to run through validation
  validate(obj) {
    if(this.configuration.required && !(this.field in obj)) {
      throw new Error(`Missing required field >>${this.field}<<`);
    }
    if(!this.configuration.required && !(this.field in obj)) {
      return null;
    }
    const caster = getCaster(this.configuration.type);
    return caster(obj[this.field]);
  }
};
