'use strict';

const express = require('express');
const app = express();

let counter = 0;

app.get('/', (req, res) => {
  // Counter value increases on all browsers.
  counter++;
  res.end(`Counter value: ${counter}`);
});

app.listen(3000, () => console.log('Express is running on port 3000.'));
