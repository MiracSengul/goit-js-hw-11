import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createList,showLoader,hideLoader,clearGallery } from './js/functions.js';
import { pullImgs } from './js/pixabay_api.js';

const form = document.querySelector('.form');

form.addEventListener('submit', e =>{
    e.preventDefault();
    clearGallery();

    const input= e.target.elements.search.value;

    if(input === ""){
        iziToast.error({
            title: "Error",
            message: 'Please enter a search query.',
            position: "topLeft",
        })
        return;
    }

    showLoader();

    createList(input)
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
      pullImgs(images);
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
