'use strict';

const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', ws => {
  console.log('New connection!');

  ws.on('message', message => {
    const response = message.split('').reverse().join('');
    ws.send(response);
  });
});
