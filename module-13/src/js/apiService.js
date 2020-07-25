// файл apiService.js с дефолтным экспортом объекта,
// отвечающего за логику HTTP-запросов к API

const apiKey = "17611748-6d67051009b1653d75232e8c8";

export default {
  searchQuery: "",
  page: 1,

  fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    // const options = {
    //   headers: {
    //     Authorization: apiKey,
    //   },
    // };

    return fetch(url)
      .then((response) => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
    // .catch((error) => console.log(error))
  },

  resetPage() {
    this.page = 1;
  },

  incrementPage() {
    this.page += 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};

// export default apiService.fetchImages;
