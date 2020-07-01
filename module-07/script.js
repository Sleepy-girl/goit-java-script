//* ================== hw-07-01 =====================

const items = document.querySelectorAll('.item').length;
console.log(`В списке ${items} категории.`);

const arrLi = document.querySelectorAll('.item');
const newArrLi = Array.from(arrLi);
for (const item of newArrLi) {
  console.log(`Категория: ${item.children[0].textContent}`);
  console.log(`Количество элементов: ${item.children[1].children.length}`);
}

//* ================== hw-07-02 =====================

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredUl = document.querySelector('#ingredients');
const ingredList = ingredients.map(ingredient => {
  const liContent = document.createElement('li');
  liContent.textContent = `${ingredient}`;
  ingredUl.appendChild(liContent);
});
  console.log(ingredUl);

// //* ------------ 2-вариант ---------------
// // const markUp = ingredients.reduce((acc, item) => {
// //   return acc += `<li>${item}</li>`
// // }, '')
// // // console.log(markUp);
// // const ulIngredients = `<ul>${markUp}</ul>`;
// // console.log(ulIngredients);
  

//* ================== hw-07-03 =====================

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulGallery = document.querySelector('#gallery');
console.log(ulGallery);

const gallery = images.map(image => {
  const imageTag = `<img src="${Object.values(image)[0]}" ${Object.keys(image)[1]}="${Object.values(image)[1]}" width = 200>`
  return imageTag;
}).map(img => {
  const listGallery = `<li class="js-gallery-list">${img}</li>`;
  return ulGallery.insertAdjacentHTML('afterbegin', listGallery);
})


//* ================== hw-07-04 =====================

let counterValue = document.querySelector('#value');
const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
let counter = 0;
btnDecrementRef.addEventListener("click", () => {
  counter -= 1;
  counterValue.innerHTML = counter;
  // counterValue.textContent = counter;  // 2-вариант
});
btnIncrementRef.addEventListener("click", () => {
  counter += 1;
  counterValue.innerHTML = counter;  
  // counterValue.textContent = counter;  // 2-вариант
});


//* ================== hw-07-05 =====================

const inputRef = document.querySelector('input[id="name-input"]');
const messageRef = document.querySelector('span[id="name-output"]');

inputRef.addEventListener('change', event => {
  // console.log(event.target.value);
  // if (event.target.value === '') {
  //   // messageRef.innerHTML = 'незнакомец';
  //   messageRef.textContent = 'незнакомец';
  // } else {
  //   // messageRef.innerHTML = event.target.value;
  //   messageRef.textContent = event.target.value;
  // };
  //* -------- тернарник --------
  event.target.value === '' ?
  messageRef.textContent = 'незнакомец' :
  messageRef.textContent = event.target.value;
});


//* ================== hw-07-06 =====================

const input = document.querySelector('input[id="validation-input"]');

input.addEventListener('blur', event => {
  console.log(event.target.value);
  if (event.target.value.length === 6) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
})


//* ================== hw-07-07 =====================

const fontSizeRef = document.querySelector('input[id="font-size-control"]');
const textRef = document.querySelector('span[id="text"]');

fontSizeRef.addEventListener('input', event => {
  textRef.style.fontSize = fontSizeRef.value + 'px';
});


//* ================== hw-07-08 (дополнительная) =====================

