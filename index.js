const fs = require('fs');
const { join } = require('path');

// const data = 'Hey there';

// fs.writeFile('anotherTest.js', data, (err) => {
//   if(err) return console.error(err);

//   fs.readFile('anotherTest.txt', { encoding: 'utf8' }, (err, data) => {
//     if(err) return console.error(err);

//     fs.unlink('anotherTest.txt', err => {
//       console.log(err);
//     });
//     console.log(data);
//   });
//   console.log('The file has been saved!');
// }); 

fs.readFile(join(__dirname, './original-file.txt'), { encoding: 'utf8' }, (err, content) => {
  if(err) return console.error(err);

  fs.writeFile(join(__dirname, 'copy-text.txt'), content, err => {
    if(err) return console.error(err);

    console.log('Done coping');
  });
});
