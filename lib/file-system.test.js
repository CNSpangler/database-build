const fs = require('fs').promises;
const { 
  // mkdirp,
  writeJSON,
  readJSON, 
  deleteFile
} = require('./file-system');

const testObj = {
  Message: 'We wrote a file!'
};

// Test for mkdirp
// describe('mkdirp test', () => {
//   it('makes a directory and all parent directories', () => {
//     return mkdirp('./my/cool/directory/path')
//       .then(() => fs.stat('./my/cool/directory/path'))
//       .then(stat => {
//         expect(stat.isDirectory()).toBeTruthy();
//       });
//   });
// });

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
    
      .then(data => {
        expect(data).toEqual('hello world');
      });
  });
});

// Test for deleteFile
describe('delete function', () => {
  beforeEach(() => {
    writeJSON('./write-test.txt', testObj);
  });
  
  it('deletes a file based on a given path', () => {
    deleteFile('./write-test.txt');

    expect('./write-test.txt').toBeFalsy;
  });
});
