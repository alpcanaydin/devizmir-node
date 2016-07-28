'use strict';

const express = require('express');
const app = express();

const responder = (req, res, next) => {
  res.success = vars => res.json({
    meta: {
      status: 200
    },
    data: vars || null
  });

  res.error = (status, error) => res.json({
    meta: { status, error }
  });

  next();
};

app.use(responder);

app.get('/', (req, res) => res.success({ user: 'alpcan' }));
app.get('/deneme', (req, res) => res.error(500, 'Server Error'));

app.listen(3000, () => {
  console.log('API is running.');
});
