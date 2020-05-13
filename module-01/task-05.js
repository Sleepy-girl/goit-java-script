'use strict'

let country = prompt ('Укажите страну доставки').toLowerCase();
let price;

switch (country) {
  
  case 'китай':
    price = 100;
    alert (`Доставка в ${'Китай'} будет стоить ${price} кредитов`);
    break;

  case 'чили':
    price = 250;
    alert (`Доставка в ${'Чили'} будет стоить ${price} кредитов`);
    break;

  case 'австралия':
    price = 170;
    alert (`Доставка в ${'Австралия'} будет стоить ${price} кредитов`);
    break;

  case 'индия':
    price = 80;
    alert (`Доставка в ${'Индия'} будет стоить ${price} кредитов`);
    break;

  case 'ямайка':
    price = 120;
    alert (`Доставка в ${'Ямайка'} будет стоить ${price} кредитов`);
    break;

  default:
    alert ('В вашей стране доставка не доступна');
    break;
}
