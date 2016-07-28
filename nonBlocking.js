'use strict';

const fs = require('fs');

console.log(1);
fs.readFile('file.7z', () => {
  console.log(2);
  console.log('File read.');
});
console.log(3);
