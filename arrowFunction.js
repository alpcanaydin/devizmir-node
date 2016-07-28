'use strict';

// ES5
/* eslint-disable */
var es5Arr = [1, 2, 3, 4];
var newEs5Arr = es5Arr.filter(function (item) {
  return item > 2;
});
/* eslint-enable */

// ES6
const arr = [1, 2, 3, 4];
const newArr = arr.filter(item => item > 2);
console.log(newArr);

const callback = (err, data) => {
  if (err) {
    throw new Error('Error occured');
  }

  return data * 2;
};

callback(null, 3);


const cities = [ 'izmir', 'istanbul', 'ankara' ];
const citiesObj = cities.map(city => ({ name: city }));
console.log(citiesObj);


const responder = num => cb => cb(num * 3);
responder(5)(result => console.log(result));

