import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { alert, notice, info, success, error } from "@pnotify/core";

export const pnotifyFn = () => {
  const errorInput = error({
    text: "Too many matches found. Please, enter a more specific query!",
  });
};
