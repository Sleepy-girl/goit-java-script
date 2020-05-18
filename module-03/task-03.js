'use strict'

const findBestEmployee = function(employees) {

  const allEntries = Object.entries(employees);
  // console.log(allEntries);

  let bestEmployee = '';
  let biggestProductivity = 0;

  for (const entry of allEntries) {
    // console.log(entry);
    let employee = entry[0];
    let productivity = entry[1];

    if (biggestProductivity < productivity) {
      biggestProductivity = productivity;
      bestEmployee = employee;
    }
  }
  return bestEmployee;

};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

// Задание 3
// Напиши функцию findBestEmployee(employees), 
// которая принимает объект сотрудников и 
// возвращает имя самого продуктивного 
// (который выполнил больше всех задач). 
// Сотрудники и кол-во выполненых задач содержатся, 
// как свойства объекта в формате "имя":"кол-во задач".