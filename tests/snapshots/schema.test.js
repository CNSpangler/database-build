const schema = require('./Schema');

// Test that validate method returns the object with all fields cast
describe('Schema validation', () => {

  it('properly returns the object with all fields cast', () => {
    expect(schema.validate(ink)).toEqual({
      color: 'dark blue',
      owned: true,
      yards: 350
    });
  });

  it('throws an error if object doesn\'t follow the schema', () => {
    expect();
  });
});
