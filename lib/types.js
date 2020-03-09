const isNumber = val => typeof val === 'number';

const isString = val => typeof val === 'string';

const isBoolean = val => typeof val === 'boolean';

const isArray = val => Array.isArray(val);

const isObject = val => typeof val === 'object';

const isFunction = val => typeof val === 'function';

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};

const castToString = val => {
  if(isString(val)) return val;
  if(typeof val === 'object') throw new CastError(String, val);
  const string = val.toString();
  return string;
};

const castToBoolean = val => {
  if(isBoolean(val)) return val;
  if(val === 'true' || val === 1) return true;
  if(val === 'false' || val === 0) return false;
  if(castToBoolean(val) !== true || false) throw new CastError(Boolean, val);
};

class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  Number: castToNumber,
  String: castToString,
  Boolean: castToBoolean
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  CastError,
  getCaster,
  castToNumber,
  castToString,
  castToBoolean
};
