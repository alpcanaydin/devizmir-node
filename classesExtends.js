'use strict';

class Animal {
  constructor() {
    this.kind = 'animal';
  }

  setName(name) {
    this.name = name;
  }

  sayHi() {
    return `Hello my name is ${this.name}. I am an ${this.kind}`;
  }
}

class Dog extends Animal {
  constructor() {
    super();
    this.something = 'somevalue';
  }
}

const dog = new Dog();
console.log(dog.something);
dog.setName('Karabaş');
console.log(dog.sayHi());
