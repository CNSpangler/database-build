const {
  isNumber,
  isString,
  isBoolean,
  castToNumber,
  castToString,
  castToBoolean,
  getCaster
} = require('../lib/types.js');

// Validate numbers and associated casters
describe('validator module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a number', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
  });

  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });

    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });
  });

  it('can get the right number caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(Promise)).toBeNull();
  });

  // Validate strings and associated casters
  describe('basic validation', () => {
    it('properly tells if a value is a string', () => {
      expect(isString('wow')).toBeTruthy();
      expect(isString(false)).toBeFalsy();
      expect(isString(6)).toBeFalsy();
      expect(isString([])).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(() => {})).toBeFalsy();
    });
  });

  describe('casters', () => {
    it('can cast values to a string', () => {
      expect(castToString(3)).toEqual('3');
      expect(castToString('hi')).toEqual('hi');
    });

    it('throws if value is not castable to string', () => {
      expect(() => castToString({}).toThrowErrorMatchingSnapshot()
      );
    });
  });

  it('can get the right stringy caster', () => {
    expect(getCaster(String)).toEqual(castToString);
    expect(getCaster(Promise)).toBeNull();
  });
});

// Validate booleans and associated casters
describe('basic validation', () => {
  it('properly tells if a value is a boolean', () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
    expect(isBoolean('hi')).toBeFalsy();
    expect(isBoolean(8)).toBeFalsy();
    expect(isBoolean([])).toBeFalsy();
    expect(isBoolean({})).toBeFalsy();
    expect(isBoolean(() => {})).toBeFalsy();
  });
});

describe('casters', () => {
  it('can cast values to a boolean', () => {
    expect(castToBoolean('true')).toEqual(true);
    expect(castToBoolean('false')).toEqual(false);
    expect(castToBoolean(1)).toEqual(true);
    expect(castToBoolean(0)).toEqual(false);
  });

  it('throws if value is not castable to boolean', () => {
    expect(() => castToBoolean('hi')).toThrowErrorMatchingSnapshot();
    expect(() => castToBoolean({})).toThrowErrorMatchingSnapshot();
  });
});
