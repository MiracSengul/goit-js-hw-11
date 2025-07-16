import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let galleryImages = new SimpleLightbox('.gallery a',{captionsData: 'alt',captionDelay: 250,});

export const createList = input => {
    const imageList = input.map(
        image =>{
            `<li class="gallery-item">
                <a href="${image.largeImageURL}">
                  <img src="${image.webformatURL}" width='360' height='200' alt="${image.tags}">
                </a>
                <ul>
                    <li><b>Likes</b> ${image.likes}</li>
                    <li><b>Views</b> ${image.views}</li>
                    <li><b>Comments</b> ${image.comments}</li>
                    <li><b>Downloads</b> ${image.downloads}</li>
                </ul>
            </li>`
        }
    ).join('');

    gallery.insertAdjacentHTML("beforeend", imageList)
    galleryImages.refresh();
}
export const showLoader = () => {
    loader.style.display = 'block';
  };
  export const hideLoader = () => {
    loader.style.display = 'none';
  };
  export const clearGallery = () => {
    gallery.innerHTML = '';
  };