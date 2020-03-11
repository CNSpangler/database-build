const fs = require('fs').promises;
const { 
  writeJSON,
  readJSON, 
} = require('./file-system');

const testObj = {
  Message: 'We wrote a file!'
};

// Test for writeJSON
describe('write function', () => {
  afterEach(() => {
    fs.unlink('./write-test.txt');
  });

  it('writes a txt file based on an object', () => {
    return writeJSON('./write-test.txt', testObj)
      .then(() => fs.readFile('./write-test.txt', { encoding: 'utf8' }))
  
      .then(data => {
        expect(JSON.parse(data)).toEqual(testObj);
      });
  });
});

// Test for readJSON
describe('read function', () => {
  it('reads a file based on a path we give it', () => {
    return readJSON('./lib/test.txt')
      .then(() => fs.readFile('./lib/test.txt', { encoding: 'utf8' }))
  
      .then(data => {
        expect(data).toEqual('hello world');
      });
  });
});
