import './styles.css';
import menu from './menu.json';
import menuTemplate from './template.hbs';
import Theme from './themes.js';

const menuRef = document.querySelector('.menu');
const markup = menuTemplate(menu);
menuRef.insertAdjacentHTML('afterbegin', markup);

const switchRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');

bodyRef.classList.add('light-theme');

saveTheme();

function toolbar (e) {
  if (e.target.checked) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
};

function saveTheme() {
  const savedTheme = localStorage.getItem('Theme');
  if (savedTheme) {
    bodyRef.classList.add(savedTheme);
  } else if (savedTheme === 'dark-theme') {
    switchRef.checked = true;
  }
};

switchRef.addEventListener('change', toolbar);