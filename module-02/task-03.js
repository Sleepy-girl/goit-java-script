'use strict'

const findLongestWord = function(string) {

  const message = string;
  const words = message.split(' ');
  let longbestWord = words[0];
  
// // 1-й вариант
  for (let i = 0; i < words.length; i += 1) {
    // console.log(i);
    // console.log(words[i]);
    if ((words[i].length) > longbestWord.length) {
      longbestWord = (words[i]);
    }
  }
  return longbestWord;

// // 2-й вариант (for...of)
//   for (const word of words) {
//     if (word.length > longbestWord.length) {
//       longbestWord = word;
//     }
//   }
//   return longbestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'


//
//
//// !погуглить инвариантные вычесления

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