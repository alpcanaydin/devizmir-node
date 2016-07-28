'use strict';

class Example {
  constructor() {
    this.defaultOptions = {
      city: 'izmir',
      lang: 'node.js'
    };
  }

  sayHi(name) {
    console.log(`Hello ${name} from ${this.options.city}`);
  }

  get options() {
    return this.defaultOptions;
  }

  set options(options) {
    Object.assign(this.defaultOptions, options);
  }
}

const example = new Example();
console.log(example.sayHi('alpcan'));
console.log(example.options);
console.log('----');
example.options = { city: 'ankara' };
console.log(example.sayHi('alpcan'));
console.log(example.options);
