'use strict';

const fs = require('fs');

const stream = fs.createReadStream('langs.txt');

stream
  .on('data', data => console.log(data))
  .on('close', () => console.log('done!'))
;
