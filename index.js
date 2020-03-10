const { 
  isNumber,
  castToString
} = require('./lib/types.js');

console.log(isNumber('3'));

console.log(castToString(3));
