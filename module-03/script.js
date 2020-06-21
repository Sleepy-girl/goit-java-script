// //* ========== hw-03-01 =============
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// // console.log(user);

// const keys = Object.keys(user);
// const values = Object.values(user);

// for (let i = 0; i < keys.length; i += 1) {
//   console.log(`${keys[i]}: ${values[i]}`);
// }

// //* ========== hw-03-02 =============

// const countProps = (obj) => {
//   // const keys = Object.keys(obj);
//   // console.log(keys);
//   // return keys.length;
//   return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


// //* ========== hw-03-03 =============

// const findBestEmployee = (employees) => {

//   //* ===== вариант-1 =====

//   // const allEntries = Object.entries(employees);
//   // // console.log(allEntries);

//   // let bestEmployee = '';
//   // let biggestProductivity = 0;

//   // for (const entry of allEntries) {
//   //   // console.log(entry);
//   //   let employee = entry[0];
//   //   let productivity = entry[1];

//   //   if (biggestProductivity < productivity) {
//   //     biggestProductivity = productivity;
//   //     bestEmployee = employee;
//   //   }
//   // }
//   // return bestEmployee;

//   //* ====== вариант-2 =======

//   const maxProductivity = Math.max(...Object.values(employees));
//   // console.log(maxProductivity);
//   const entries = Object.entries(employees);
//   // console.log(entries);

//   for (let entry of entries) {
//     if (maxProductivity === entry[1]) {
//       return (entry[0]);
//     }
//   }
//   //==========================================

// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux


// //* ========== hw-03-04 =============

// const countTotalSalary = (employees) => {

//   const valuesArray = Object.values(employees); 
//   let totalSalary = 0;
//   for (let i = 0; i < valuesArray.length; i += 1) {
//   //  console.log(valuesArray[i]);
//     totalSalary += valuesArray[i];
//   //  console.log(totalSalary);
//   }
//   return totalSalary;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400


//* ========== hw-03-05 =============

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = (arr, prop) => {
//   const arrayProp = [];
//   for (let product of arr) {
//     if (prop in product) {
//       arrayProp.push(product[prop])
//     }
//   }    
//   return arrayProp;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []


//* ========== hw-03-06 =============

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = (allProdcuts, productName) => {
//   let totalPrice = 0;
//   for (let product of allProdcuts) {
//     const values = Object.values(product);
//     // console.log(values);
//     if (values.includes(productName)) {
//       totalPrice = values[1] * values[2];
//       // console.log(totalPrice);
//     }
//   }
//     return totalPrice;
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800


//* ========== hw-03-07 =============

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {
      amount,
      type,
      id: Math.round(Math.random() * 1000000)
    }
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const history = this.createTransaction(amount, Transaction.DEPOSIT);
    const addToHistory = this.transactions.push(history);
    return addToHistory;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return `Снятие такой суммы не возможно, недостаточно средств.`
    } else {
      this.balance -= amount;
      const history = this.createTransaction(amount, Transaction.WITHDRAW);
      const addToHistory = this.transactions.push(history);
      return addToHistory;
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id)
      return transaction;
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    // if (type === Transaction.DEPOSIT) {
    //   amountOfFunds += this.deposit(amount);
    //   return amountOfFunds;
    // } else if (type === Transaction.WITHDRAW) {
    //   amountOfFunds += this.withdraw(amount);
    //   return amountOfFunds;
    // }
  },
};

console.log(account.createTransaction(200, Transaction.DEPOSIT));
console.log(account.createTransaction(100, Transaction.WITHDRAW));

console.log(account.deposit(200));
console.log(account.deposit(20));

console.log(account.withdraw(60));
console.log(account.withdraw(600));

console.log(account.getBalance());

console.log(account.getTransactionDetails());

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

console.log(account.transactions);