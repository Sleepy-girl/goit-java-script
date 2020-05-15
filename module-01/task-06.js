'use strict'

let counter;
let total = 0;

while (counter = prompt ('Введите число')) {

  if (isNaN(counter)) {
    alert ('Было введено не число, попробуйте еще раз');
    continue
  }
  total += Number(counter);
}

alert (`Общая сумма чисел равна ${total}`);
