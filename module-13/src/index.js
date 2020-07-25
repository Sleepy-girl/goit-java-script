import "./styles.css";
import updateImagesMarkup from "./templates/card_image_template.hbs";
import refs from "./js/refs";
import fetchImages from "./js/apiService";

fetchImages();

//* ================= button =====================
// let searchQuery = "";
// // function loadMoreImages (e) {
// //   if (e.target.dataset.action === "load-btn") {
// //     //отрисовывается еще 12 фоток
// //   }
// // }

// refs.loadMore.querySelector("click", () => {
//   fetchImages(searchQuery).then(updateImagesMarkup);
// });
