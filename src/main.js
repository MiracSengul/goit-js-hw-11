// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';
// Dokümantasyonda belirtilen import
import { renderImages,showLoader,hideLoader,clearGallery } from './js/render-functions.js';
import { fetchImages } from './js/pixabay-api.js';


const form = document.querySelector('.form');


form.addEventListener('submit', e => {
  e.preventDefault();
  clearGallery();

  const input = e.target.elements.search.value;


  if (input === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    })
    return;
  };
  showLoader();

  
  fetchImages(input)
    .then(images => {
      if (images.length === 0) {
        iziToast.warning({
          title: 'Warning',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      renderImages(images);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'An error occurred while fetching images. Please try again later.',
        position: 'topRight',
      });
      console.error('Error fetching images:', error);
    })
    .finally(() => {
      hideLoader();
    });
  
  form.reset();
});
