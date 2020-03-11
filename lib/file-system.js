const fs = require('fs').promises;

// write a json file writeJSON
function writeJSON(path, obj) {
  return fs.writeFile(path, JSON.stringify(obj));
}

// read a json file readJSON


module.exports = {
  writeJSON,
};

// read a directory of json files (fs.readdir -> [] -> Promise.all with readJson) readDirectoryJSON
// update a json file updateJSON
// delete a file deleteFile
// make a directory and all parent directories mkdirp
