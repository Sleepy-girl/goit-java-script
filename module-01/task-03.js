'use strict'

const message = prompt ('Введите пароль');
const ADMIN_PASSWORD = 'jqueryismyjam';

// ПОЧЕМУ НЕ РАБОТАЕТ ПЕРВЫЙ ВАРИАНТ,
// КОГДА УСЛОВИЕ ПРО ОТМЕНУ В КОНЦЕ?
// цена ошибки = 2.5 часа

// if (message === ADMIN_PASSWORD) {
//   alert ('Добро пожаловать!');
// } else if (message !== ADMIN_PASSWORD) {
//   alert ('Доступ запрещен, неверный пароль!');
// } else if (message === null) {
//   alert ('Отменено пользователем!');
// }

if (message === null) {
  alert ('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
  alert ('Добро пожаловать!');
} else if (message !== ADMIN_PASSWORD) {
  alert ('Доступ запрещен, неверный пароль!');
}
