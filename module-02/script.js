//* ======== hw-02-01 ==========

const logItems = array => {
  for (let i = 0; i < array.length; i += 1) {
    console.log (`${i+1} -`, array[i]);
  }
  return;
};
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


//* ======== hw-02-02 ==========

// const calculateEngravingPrice = function(message, pricePerWord) {
//   const words = message.split(' ');
//   // console.log(words);
//   const total = pricePerWord * words.length;
//   return total;
// };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120


//* ======== hw-02-03 ========== "САМОЕ ДЛИННОЕ СЛОВО" ====

// const findLongestWord = function(string) {

//   const words = string.split(' ');
//   // console.log(words);
//   let longestWord = words[0];

//   for (let word of words) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'


//* ======== hw-02-04 ==========

// const formatString = function(string) {
//   if (string.length > 40) {
//     return (`${string.slice(0,40)}...`)
//   }
//   return string;
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка
// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка
// console.log(
//   formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// // вернется форматированная строка


//* ======== hw-02-05 ==========

// const checkForSpam = function(message) {
//   const words = message.split(' ')
// //  console.log(words);
//   for (let word of words) {
//     if (word.toLowerCase().includes('spam') || word.toLowerCase().includes('sale')) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


//* ======== hw-02-06 ==========

// let input;
// const numbers = [];
// let total = 0;

// while (input = Number(prompt('Введите число'))) {
//   if (input === null) {
//     break;
//   }
//   numbers.push(input);
// };

// for (let number of numbers) {
//   if (numbers !== []) {
//     total += number;
//     console.log (`Общая сумма чисел равна ${total}`);
//   }
// };


//* ======== hw-02-07 ==========

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = login => {
  
//   if (login.length >= 4 && login.length <= 16) {
//     return true;
//   } else {
//     return false;
//   }

// };

// const isLoginUnique = (allLogins, login) => {
  
//   //* ===== 1 вариант (for...of) ====
//   // for (let oneOfAllLogins of allLogins) {
//   //   if (oneOfAllLogins === login) {
//   //     return false;
//   //   } else {
//   //     return true;
//   //   }
//   // }

//   //* ===== 2 вариант (.includes()) ====
//   if (allLogins.includes(login)) {
//     return false;
//   } else {
//     return true;
//   }

// };

// const addLogin = (allLogins, login) => {
  
//   if (!isLoginValid(login)) {
//     return ('Ошибка! Логин должен быть от 4 до 16 символов');
//   } else if (!isLoginUnique(allLogins, login)) {
//     return ('Такой логин уже используется!');
//   } else {
//     allLogins.concat(login);
//     return ('Логин успешно добавлен!');
//   }

// };

// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

