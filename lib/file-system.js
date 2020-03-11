const fs = require('fs').promises;

// write a json file writeJSON
function writeJSON(path, obj) {
  return fs.writeFile(path, JSON.stringify(obj));
}

// read a json file readJSON
function readJSON(path) {
  return fs.readFile(path, { encoding: 'utf8' })
    .then(file => JSON.parse(file));
}



module.exports = {
  writeJSON,
  readJSON
};

// read a directory of json files (fs.readdir -> [] -> Promise.all with readJson) readDirectoryJSON
// update a json file updateJSON
// delete a file deleteFile
// make a directory and all parent directories mkdirp
