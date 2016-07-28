'use strict';

const async = require('async');
const User = require('./model/user');

const usernames = [ 'ali', 'veli', 'mehmet' ];
const response = [];

async.each(
  usernames,
  (username, callback) => {
    User.findOne({ username }, (err, doc) => {
      if (err) {
        return callback();
      }

      response.push(doc);
      callback();
    });
  }, () => {
    console.log('finished!');
  });
