'use strict'

const credits = 23580;
const pricePerDroid = 3000;

const totalPrice = prompt ('Какое количество дроидов Вам необходимо?');

if (totalPrice === null) {
  alert ('Отменено пользователем!');
} else if (totalPrice * pricePerDroid > credits) {
  alert ('Недостаточно средств на счету!');
} else if (totalPrice * pricePerDroid <= credits) {
  alert (`Вы купили ${totalPrice} дроидов, на счету осталось ${credits - totalPrice * pricePerDroid} кредитов.`);
}