'use strict'

const message = 'The quick brown fox jumped over the lazy dog';
const words = message.split(' ');
let longbestWord = words[0];

for (let i = 0; i < words.length; i += 1) {
  console.log(i);
  console.log(words[i]);

  if ((words[i].length) > longbestWord.length) {
    longbestWord = (words[i]);
  }

}
console.log(words);
console.log(longbestWord);



// const findLongestWord = function(string) {
//   // твой код
// };





// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'