const message = 'NodeJS is amazing';
console.log(message);

//для запуска файла переходим в папку по терминалу
// => node index.js - (полное название файла)

// index.js
const validator = require('validator');

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  'Is mango@mail.com a valid email?: ',
  validateEmail('mango@mail.com'),
);

console.log(
  'Is Mangozedog.com a valid email?: ',
  validateEmail('Mangozedog.com'),
);
document.q