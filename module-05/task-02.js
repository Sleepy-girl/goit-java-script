'use strict'

class User {
  constructor ({name = '', age = 0, followers = 0}) {
    this.name = name;
    this.age = age;
    this.followers = followers;
} 

  getInfo = function() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}

// * 2-вариант (от невнимательного чтения условия)
// const User = function ({name = '', age = 0, followers = 0}){
//   this.name = name;
//   this.age = age;
//   this.followers = followers;

//   this.getInfo = function() {
//     console.log(`User ${name} is ${age} years old and has ${followers} followers`);
//   }
// }

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers

//* Задание 2
// Напиши класс User для создания пользователя 
// со следующим свойствами:
//   name - строка
//   age - число
//   followers - число
// Добавь метод getInfo(), который, выводит строку: 
// User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers