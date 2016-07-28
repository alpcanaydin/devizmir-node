'use strict';

const async = require('async');

async.waterfall([
  callback => callback(null, 'one', 'two'),
  (arg1, arg2, callback) => callback(null, 'three'),
  (arg1, callback) => callback(null, 'done')
], (err, result) => {
  // result now equals 'done'
  console.log(result);
});

