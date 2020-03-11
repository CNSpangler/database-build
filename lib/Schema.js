const Validator = require('./Validator');

module.exports = class Schema {
  constructor(schemaDefinition) {
    this.schemaDefinition = schemaDefinition;
    this.validators = Object.entries(schemaDefinition)
      .map(([key, object]) => new Validator(key, object)
      );
  }

  validate(object) {
    const validated = {};
    this.validators.forEach(validator => {
      validated[validator.field] = validator.validate(object);
    });
    return validated;
  }
};
