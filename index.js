const fs = require('fs');

function copy(src, dest, callback) {
  fs.readFile(src, (err, content) => {
    if(err) return callback(err);

    fs.writeFile(dest, content, err => {
      callback(err);
    });
  });
}

module.exports = copy;
