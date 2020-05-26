'use strict'

// debugger;

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(addItem) {
    this.items.push(addItem);
    // this.items = [...items, addItem]
  }

  removeItem(removeItem) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i] === removeItem) {
        return this.items.splice(i, 1);
      }
    }
  }
}


//* 2-вариант (от невнимательного чтения условия)
// const Storage = function(items) {
//   this.items = items;

//   this.getItems = function() {
//     return items;
//   }

//   this.addItem = function(addItem) {
//     items.push(addItem);
//     // this.items = [...items, addItem]
//     return items;
//   }

//   this.removeItem = function(removeItem) {

//     for (let i=0; i<items.length; i+=1) {
//       if (items[i] === removeItem) {
//         items = items.splice(i, 1);
//         return items;
//       }
//     }
//   }
// }

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//* Задание 3
//* Напиши класс Storage, который будет создавать 
//* объекты для управления складом товаров. 
//* При вызове будет получать один аргумент - 
//* начальный массив товаров, 
//* и записывать его в свойство items.

//* Добавь методы класса:
//*   getItems() - возвращает массив текущих товаров
//*   addItem(item) - получает новый товар и добавляет его к текущим
//*   removeItem(item) - получет товар и, если он есть, 
// *   удаляет его из текущих
// 
