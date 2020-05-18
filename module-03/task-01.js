'use strict'

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,

  addKey (newKey) {
    this.mood = newKey;
  },
  
  changeValue (newValueHobby, newValuePremium) {
    this.hobby = newValueHobby;
    this.premium = newValuePremium;
  },

};

// const values = Object.values(user);
// let value;
// for (value of values) {
//   console.log (value);
// }

// const keys = Object.keys(user);
// let key;
// for (key of keys) {
//   console.log (key);
// }
// console.log (`${key}: ${value}`);

//addKey - в колсоле отображает функцю вместо значений
user.addKey ('happy');
user.changeValue ('skydiving', false);
console.log (user);

