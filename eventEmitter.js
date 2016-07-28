'use strict';

const EventEmitter = require('events');

// New instance of event emitter
class ExampleEventEmitter extends EventEmitter {}

const exampleEventEmitter = new ExampleEventEmitter();
setTimeout(
  // Push a message to say channel.
  () => exampleEventEmitter.emit('say', 'hello world!'),
  3000
);

// Log message
exampleEventEmitter.on('say', data => console.log(data));
