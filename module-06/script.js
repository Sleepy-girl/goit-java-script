import users from './users.js';

//* =================== hw-06-01 =====================

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


//* =================== hw-06-02 =====================

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


//* =================== hw-06-03 =====================

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


//* =================== hw-06-04 =====================

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


//* =================== hw-06-05 =====================

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


//* =================== hw-06-06 =====================

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => ((user.age >= min) && (user.age <= max)));
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


//* =================== hw-06-07 =====================

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0)
};

console.log(calculateTotalBalance(users)); // 20916


//! =================== hw-06-08 =====================

const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => {
    return user.friends.some(friend => friend === friendName)
  }).map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


//! =================== hw-06-09 =====================

const getNamesSortedByFriendsCount = users => {
  return users.sort((a, b) => a.friends.length - b.friends.length)
  .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


//* =================== hw-06-10 =====================

//* ---------- 1-вариант (new Set) -----------
// const getSortedUniqueSkills = users => {
//   return users.reduce((allSkills, user) => {
//     // allSkills.push(...user.skills);
//     allSkills = [...allSkills, ...user.skills];
//     return [...new Set(allSkills.sort())];
//   }, [])
// };

//* ---------- 2-вариант (без new Set) -----------
const getSortedUniqueSkills = users => {
  return users.reduce((allSkills, user) => {
    return allSkills = [...allSkills, ...user.skills];
  }, []).reduce((unicSkills, skill) => {
    if (!unicSkills.includes(skill)) {
      unicSkills.push(skill);
    }
    return unicSkills;
  }, [])
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

