//* ================ hw-01-01 ==============

// const name = 'Генератор защитного поля';
// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);


//* ================ hw-01-02 =================

// const total = 100;
// const ordered = 50;

// if (ordered > total) {
//   alert("На складе недостаточно твоаров!")
// } else {
//   alert('Заказ оформлен, с вами свяжется менеджер')
// }

//* вариант с тернарником
// const order = ordered > total ? alert("На складе недостаточно твоаров!") : alert('Заказ оформлен, с вами свяжется менеджер');


//* =============== hw-01-03 ================

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const input = prompt('Введите пароль');

// if (input === null) {
//   message = 'Отменено пользователем!';
// } else if (input === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';
// } else {
//   message = 'Доступ запрещен, неверный пароль!';
// }

// alert(message);


//* =============== hw-01-04 ================

// const credits = 23580;
// const pricePerDroid = 3000;

// const input = prompt('Какое количество дроидов Вам необходимо?');
// const totalPrice = Number(input) * pricePerDroid;

// if (input === null) {
//   console.log('Отменено пользователем!');
// } else if (totalPrice > credits) {
//   console.log('Недостаточно средств на счету!');
// } else if (totalPrice <= credits) {
//   console.log(`Вы купили ${input} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
// } else {
//   console.log('Введите число!');
// }


//* =============== hw-01-05 ================

// const inputCountry =  prompt('Введите страну доставки');
// const countryLowerCase = inputCountry.toLowerCase();
// // console.log(countryLowerCase);
// let cost;

// switch (countryLowerCase) {
//   case 'китай':
//     cost = 100;
//     alert(`Доставка в ${inputCountry} будет стоить ${cost} кредитов`);
//     break;

//   case 'чили':
//     cost = 250;
//     alert(`Доставка в ${inputCountry} будет стоить ${cost} кредитов`);
//     break;

//   case 'австралия':
//     cost = 170;
//     alert(`Доставка в ${inputCountry} будет стоить ${cost} кредитов`);
//     break;

//   case 'индия':
//     cost = 80;
//     alert(`Доставка в ${inputCountry} будет стоить ${cost} кредитов`);
//     break;

//   case 'ямайка':
//     cost = 120;
//     alert(`Доставка в ${inputCountry} будет стоить ${cost} кредитов`);
//     break;
  
//   default:
//     alert('В вашей стране доставка не доступна');
//     break;
// }


//* =============== hw-01-06 ================

// let input;
// let total = 0;

// do {
//   input = prompt('Введите число');
//   if (isNaN(input)) {
//     alert ('Было введено не число, попробуйте еще раз');
//     continue;
//   } else {
//    total += Number(input);
//   }
// } while (input !== null);

// alert (`Общая сумма чисел равна ${total}`);