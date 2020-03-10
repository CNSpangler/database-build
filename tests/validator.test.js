const {
  Validator,
} = require('../lib/validator.js');

it('validates field', () => {
  const fieldValidator = new Validator('field', {
    type: String,
    required: true
  });
  
  expect(fieldValidator.validate({ field: 'spot' })).toEqual('spot');

  const configurationValidator = new Validator('configuration', {
    type: String,
    required: true
  });

  expect(configurationValidator.validate({ configuration: 'spot' })).toEqual('spot');
});
