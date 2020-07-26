// import "./styles.css";
// // import PNotify from "node_modules/pnotify/dist/es/PNotify.js";
// // import PNotifyButtons from "node_modules/pnotify/dist/es/PNotifyButtons.js";
// import "material-design-icons/iconfont/material-icons.css";

// PNotify.defaults.styling = "material";
// PNotify.defaults.icons = "material";

// const axios = require("axios").default;
// const debounce = require("lodash.debounce");
// const searchRef = document.querySelector(".search");
// searchRef.addEventListener("input", debounce(fetchCountries(searchQuery), 500));

// fetchCountries(searchQuery) => {

// }
// возвращающей промис с массивом стран,
// результат запроса к API.

// на обработчик события необходимо применить
// подход debounce и
// делать HTTP-запрос спустя 500мс после того,
// как пользователь перестал вводить текст.
// let result = "";
// fetch(`https://restcountries.eu/rest/v2/name/${result}`);

import "./styles.css";
import refs from "./refs.js";
import fetchCountries from "./fetchCountries";
import { createMarkUp } from "./markup";

let debounce = require("lodash.debounce");

const getCountry = (e) => {
  fetchCountries(e.target.value).then(createMarkUp);
};
refs.country.addEventListener("input", debounce(getCountry, 500));
