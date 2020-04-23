const fs = require('fs').promises;

// makes a directory including all parent directories included in the given path
const mkdirp = path => {
  return fs.mkdir(path, { recursive: true });
};

// write a new file at the given path, including the given object
const writeJSON = (path, obj) => {
  return fs.writeFile(path, JSON.stringify(obj))
    .then(() => obj);
};

// pull the contents from the file at a given path
const readJSON = path => {
  return fs.readFile(path)
    .then(contents => JSON.parse(contents));
};

// grab all the files in a given directory. for each file, read the contents
const readDirectoryJSON = path => {
  return fs.readdir(path)
    .then(files => {
      return Promise.all(files.map(file => readJSON(`${path}/${file}`)));
    });
};

// read the file at the given path, then update the given object and rewrite the file
const updateJSON = (path, obj) => {
  return readJSON(path)
    .then(json => {
      const updatedJSON = { ...json, ...obj };
      return writeJSON(path, updatedJSON);
    });
};

// delete a file
const deleteFile = path => fs.unlink(path);

module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
};
