// файл apiService.js с дефолтным экспортом объекта,
// отвечающего за логику HTTP-запросов к API

const apiKey = "17611748-6d67051009b1653d75232e8c8";

function fetchImages(searchQuery) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${apiKey}`;

  return fetch(url)
    .then((response) => response.json())
    .then(({ hits }) => {
      // console.log(hits);
      const markup = updateImagesMarkup(hits);
      // console.log(markup);
      refs.imagerContainer.insertAdjacentHTML("beforeend", markup);
    })
    .catch((error) => console.log(error));
}

export default fetchImages;
