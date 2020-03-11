const fs = require('fs').promises;

// make a directory and all parent directories
// function mkdirp(path) {
//   return fs.mkdir(path, { recursife: true });
// }

// write a json file
function writeJSON(path, obj) {
  return fs.writeFile(path, JSON.stringify(obj));
}

// read a json file readJSON
function readJSON(path) {
  return fs.readFile(path, { encoding: 'utf8' })
    .then(file => JSON.parse(file));
}

// delete a file deleteFile
function deleteFile(path) {
  fs.unlink(path);
}

module.exports = {
  // mkdirp,
  writeJSON,
  readJSON,
  deleteFile
};

// read a directory of json files (fs.readdir -> [] -> Promise.all with readJson) readDirectoryJSON
// update a json file updateJSON
