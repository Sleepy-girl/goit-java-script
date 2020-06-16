//* ======== hw-02-01 ==========

// const logItems = function(array) {

//   for (let i = 0; i < array.length; i += 1) {
//     console.log (`${i+1} -`, array[i]);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


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

//! ======== hw-02-03 ==========

// const findLongestWord = function(string) {



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


//! ======== hw-02-05 ==========




//! ======== hw-02-06 ==========



//! ======== hw-02-07 ==========



//* ================================

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']

// // Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// 
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }
