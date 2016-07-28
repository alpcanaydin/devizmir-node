'use strict';

const User = require('./model/user');
const Product = require('./model/product');
const Category = require('./model/category');

Promise
  .all([
    User.count(),
    Product.count(),
    Category.count()
  ])
  .then(values => {
    const userCount = values[0];
    const productCount = values[1];
    const categoryCount = values[2];

    console.log(`
      userCount: ${userCount}\n
      productCount: ${productCount}\n
      categoryCount: ${categoryCount}
    `);
  })
  .catch(err => console.log(err))
;
