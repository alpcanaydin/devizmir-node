'use strict';

const async = require('async');

console.time('time');
async.series({
  one: callback => setTimeout(() => callback(null, 'one'), 3000),
  two: callback => setTimeout(() => callback(null, 'two'), 1000),
  three: callback => setTimeout(() => callback(null, 'two'), 2000)
}, (err, results) => {
  console.timeEnd('time');
  console.log(results);
});
