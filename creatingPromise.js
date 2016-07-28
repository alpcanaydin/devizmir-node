'use strict';

const fs = require('fs');

const readFile = filename => new Promise((resolve, reject) => {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      return reject(err);
    }

    resolve(data);
  });
});

readFile('langs.txt')
  .then(data => data.split('\n'))
  .then(langs => langs.filter(lang => lang !== ''))
  .then(langs => console.log(langs))
  .catch(err => console.log(err))
;
