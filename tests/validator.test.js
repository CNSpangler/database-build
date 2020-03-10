const {
  Validator,
} = require('../lib/validator.js');

describe('validator module', () => {
  describe('basic validation', () => {
    it('has a field and configuration property', () => {
      const colorValidator = new Validator('color', {
        type: String,
        required: true
      });
      
      expect(colorValidator.field).toEqual('color');
      expect (colorValidator.configuration).toEqual({
        type: String,
        required: true
      })
    });

    it('can validate an object with the proper type', () => {
      const colorValidator
    })
});


// Test that validate method can take an object and return a fields value
// Test that validate method can take an object and throw an error
// Test all permutations:
// required and field missing
// required and field there but wrong type
// required and field there and right type
// not required and field missing
// not required and field there but wrong type
// not required and field there and right type
