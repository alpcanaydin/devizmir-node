'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [];

app.get('/users', (req, res) => {
  res.json({ users });
});

app.put('/user', (req, res) => {
  users.push(req.body.user);
  res.json({ status: true });
});

app.post('/user/:index', (req, res) => {
  users[req.params.index] = req.body.user;
  res.json({ status: true });
});

app.delete('/user/:index', (req, res) => {
  users.splice(parseInt(req.params.index), 1);
  res.json({ status: true });
});

app.listen(3000, () => {
  console.log('API is running.');
});
