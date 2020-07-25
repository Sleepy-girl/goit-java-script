import "./styles.css";
import refs from "./js/refs";
import apiService from "./js/apiService";
import updateImagesMarkup from "./js/imageMarkup";

refs.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.currentTarget.elements.query);

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  // console.log(searchQuery);

  refs.imagerContainer.innerHTML = "";
  form.reset(); //* сброс формы

  apiService.resetPage(); //* сброс формы на первую страницу при новом запросе в поиск, реализуется в методе объекта файла apiService.

  refs.loadMore.classList.add("is-hidden");

  apiService.fetchImages().then((hits) => {
    updateImagesMarkup(hits);
    refs.loadMore.classList.remove("is-hidden");
  });
});

refs.loadMore.addEventListener("click", () => {
  apiService.fetchImages().then((hits) => {
    updateImagesMarkup(hits);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: "smooth",
    });
  });
});
