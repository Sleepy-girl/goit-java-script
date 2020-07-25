import imageTemplate from "../templates/card_image_template.hbs";
import refs from "../js/refs";

function updateImagesMarkup(hits) {
  const markup = imageTemplate(hits);
  // console.log(markup);
  refs.imagerContainer.insertAdjacentHTML("beforeend", markup);
}

export default updateImagesMarkup;
