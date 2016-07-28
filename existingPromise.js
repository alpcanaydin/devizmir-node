'use strict';

const User = require('./model/user');

User
  .find({})
  .then(docs => {
    if (docs === null) {
      return Promise.reject();
    }

    return docs;
  })
  .then(docs => docs.filter(doc => doc.age > 18))
  .catch(err => console.log(err))
;
