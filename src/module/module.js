
// 모듈 import
const car = require('./car');
console.log(car);

console.log(require('./items').book);

const {book} = require('./items');
console.log(book);

const dog = require('./dog');
console.log(dog);