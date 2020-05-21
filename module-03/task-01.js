'use strict'

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
// console.log (user);

const keys = Object.keys(user);
// console.log(keys);
const values = Object.values(user);
// console.log(values);

for (let i = 0; i < keys.length; i += 1) {
  console.log(`${keys[i]}: ${values[i]}`);
}
  
//
//
// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:
//   добавляет поле mood со значением 'happy'
//   заменяет значение hobby на 'skydiving'
//   заменяет значение premium на false
//   выводит содержимое объекта user в формате ключ:значение 
//   используя Object.keys() и for...of




