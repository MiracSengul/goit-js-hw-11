import axios from "axios";

const api_key='51344250-e7642866312899c0b298dad04';

export const pullImgs= input => {
    const api_url= `https://pixabay.com/api/?key=${api_key}&q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;

    return axios.get(api_url).then(
        response => {response.data.hits;}
    ).catch(error => {
        console.error("Error fetching images:", error);
        throw error;
    })
}