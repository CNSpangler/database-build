const fs = require('fs').promises;
const { writeJSON } = require('./file-system');

// Test that a file now exists at the path we gave
// Test that the new file contains the object we JSON stringified
const testObj = {
  Message: 'We wrote a file!'
};

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
