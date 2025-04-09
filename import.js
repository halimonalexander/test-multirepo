const {
    name: userName,
    sayHello
} = require('./export.js');
const os = require('os');

console.log(userName, ': ', sayHello('John'));
console.log(os.platform(), os.release());

