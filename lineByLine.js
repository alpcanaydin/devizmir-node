'use strict';

const fs = require('fs');
const readLine = require('readline');

const stream = readLine.createInterface({
  input: fs.createReadStream('langs.txt'),
  terminal: false
});

stream
  .on('line', line => console.log(line))
  .on('close', () => console.log('done!'))
;

