import axios from 'axios';
const api_key = '51088577-7b521529318281431558696f8';

export const fetchImages = input => {
  const api_url = `https://pixabay.com/api/?key=${api_key}&q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;

  return axios.get(api_url)
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
};
