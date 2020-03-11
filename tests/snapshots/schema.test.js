const Schema = require('./Schema.js');

// Test that validate method returns the object with all fields cast
describe('Schema validation', () => {

  it('properly returns the object with all fields cast', () => {
    const ink = {
      color: 'dark blue',
      owned: true,
      yards: 350
    };
    
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
    const inkSchema = new Schema(schema);
    
    expect(inkSchema.validate(ink)).toEqual(ink);
  });

  it('throws an error if object doesn\'t follow the schema', () => {
    expect();
  });
});
