import list from "./templates/list.hbs";
import counrty from "./templates/country.hbs";
import refs from "./refs";
import { pnotifyFn } from "./pnotify";

export let createMarkUp = (array) => {
  if (array.length > 2 && array.length < 10) {
    refs.countryList.innerHTML = list(array);
  } else if (array.length === 1) {
    refs.countryList.innerHTML = counrty(array);
  } else {
    pnotifyFn();
    refs.countryList.innerHTML = "";
  }
};
