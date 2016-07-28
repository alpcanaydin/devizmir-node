'use strict';

const arr = ['a', 'b', 'c', 'd'];

/* eslint-disable */
for (const item in arr) {
  console.log(item);
}
/* eslint-enable */

console.log('-----');

for (const item of arr) {
  console.log(item);
}
